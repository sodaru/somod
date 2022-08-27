import { readJsonFileStore, unixStylePath } from "@solib/cli-base";
import { writeFileSync } from "fs";
import { join } from "path";
import {
  file_packageJson,
  path_build,
  path_functionLayers,
  path_serverless,
  resourceType_FunctionLayer
} from "../../constants";
import { getPath, JSONObjectNode, JSONPrimitiveNode } from "../../jsonTemplate";
import { KeywordDefinition } from "../../keywords/types";
import { ServerlessTemplate } from "../types";

type FunctionLayerType = {
  name: string;
  libraries?: string[];
  content?: Record<string, string>;
};

export const keywordFunctionLayer: KeywordDefinition<
  FunctionLayerType,
  ServerlessTemplate
> = {
  keyword: "SOMOD::FunctionLayer",

  getValidator: async rootDir => {
    const modulePackageJsonPath = join(rootDir, file_packageJson);
    const modulePackageJson = await readJsonFileStore(modulePackageJsonPath);
    const moduleDevDependencies = modulePackageJson.devDependencies || {};

    return (keyword, node, value) => {
      const errors: Error[] = [];

      const path = getPath(node);
      if (
        !(
          path.length == 4 &&
          path[0] == "Resources" &&
          path[2] == "Properties" &&
          path[3] == "ContentUri" &&
          (
            (node.parent.node.parent.node as JSONObjectNode).properties
              ?.Type as JSONPrimitiveNode
          ).value == resourceType_FunctionLayer
        )
      ) {
        errors.push(
          new Error(
            `${keyword} is allowed only as value of ContentUri property of ${resourceType_FunctionLayer} resource`
          )
        );
      }

      //NOTE: structure of the value is validated by serverless-schema

      value.libraries?.forEach(library => {
        if (moduleDevDependencies[library] === undefined) {
          errors.push(
            new Error(
              `${library} required in layer ${value.name} does not exist in ${modulePackageJsonPath} as dev dependency`
            )
          );
        }
      });

      return errors;
    };
  },

  getProcessor:
    async (rootDir, moduleName, moduleContentMap) => (keyword, node, value) => {
      const functionLayerPath = join(
        moduleContentMap[moduleName].location,
        path_build,
        path_serverless,
        path_functionLayers,
        value.name
      );

      Object.keys(value.content || {}).forEach(layerContentPath => {
        const functionLayerContentPath = join(
          functionLayerPath,
          layerContentPath
        );

        writeFileSync(
          functionLayerContentPath,
          value.content[layerContentPath]
        );
      });

      return {
        type: "object",
        value: unixStylePath(functionLayerPath)
      };
    }
};

export const getFunctionLayerLibraries = (
  serverlessTemplate: ServerlessTemplate
) => {
  const libraries: Record<string, string[]> = {};
  Object.values(serverlessTemplate.Resources).forEach(resource => {
    if (resource.Type == resourceType_FunctionLayer) {
      const layer = resource.Properties.ContentUri?.[
        keywordFunctionLayer.keyword
      ] as FunctionLayerType;

      if (layer?.name) {
        libraries[layer.name] = layer.libraries || [];
      }
    }
  });
  return libraries;
};
