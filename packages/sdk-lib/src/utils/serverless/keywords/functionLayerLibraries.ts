import {
  childProcess,
  ChildProcessStreamConfig,
  readJsonFileStore,
  unixStylePath
} from "@solib/cli-base";
import { existsSync } from "fs";
import { mkdir, readdir, writeFile } from "fs/promises";
import { join } from "path";
import {
  file_packageJson,
  path_build,
  path_functionLayers,
  path_serverless
} from "../../constants";
import {
  KeywordSOMODFunctionLayerLibraries,
  KeywordSOMODResourceName,
  ServerlessTemplate,
  SOMODFunctionLayerLibraries,
  SLPTemplate,
  KeywordSOMODFunctionLayerContent
} from "../types";
import { getSOMODKeyword, replaceSOMODKeyword } from "../utils";

export const validate = async (slpTemplate: SLPTemplate): Promise<Error[]> => {
  const errors: Error[] = [];

  const modulePackageJsonPath = join(
    slpTemplate.packageLocation,
    file_packageJson
  );
  const modulePackageJson = await readJsonFileStore(modulePackageJsonPath);
  const moduleDevDependencies = modulePackageJson.devDependencies || {};

  await Promise.all(
    slpTemplate.keywordPaths[KeywordSOMODFunctionLayerLibraries].map(
      async layerPaths => {
        const layer = getSOMODKeyword<SOMODFunctionLayerLibraries>(
          slpTemplate,
          layerPaths
        );

        const layerName = layer.LayerName[KeywordSOMODResourceName];

        layer[KeywordSOMODFunctionLayerLibraries].forEach(dependency => {
          if (!moduleDevDependencies[dependency]) {
            errors.push(
              new Error(
                `${dependency} required in layer ${layerName} does not exist in ${modulePackageJsonPath} as dev dependency`
              )
            );
          }
        });
      }
    )
  );
  return errors;
};

export const apply = (serverlessTemplate: ServerlessTemplate) => {
  Object.values(serverlessTemplate).forEach(slpTemplate => {
    slpTemplate.keywordPaths[KeywordSOMODFunctionLayerLibraries].forEach(
      functionLayerLibrariesKeywordPath => {
        const functionLayerLibraries =
          getSOMODKeyword<SOMODFunctionLayerLibraries>(
            slpTemplate,
            functionLayerLibrariesKeywordPath
          ) as SOMODFunctionLayerLibraries & {
            ContentUri: string;
          };

        const layerName =
          functionLayerLibraries.LayerName[KeywordSOMODResourceName];

        functionLayerLibraries.ContentUri = `${unixStylePath(
          slpTemplate.packageLocation
        )}/${path_build}/${path_serverless}/${path_functionLayers}/${layerName}`;
        delete functionLayerLibraries[KeywordSOMODFunctionLayerLibraries];
        delete functionLayerLibraries[KeywordSOMODFunctionLayerContent];

        replaceSOMODKeyword(
          slpTemplate,
          functionLayerLibrariesKeywordPath,
          functionLayerLibraries
        );
      }
    );
  });
};

const path_layerNodeJs = "nodejs";

export const build = async (rootSLPTemplate: SLPTemplate): Promise<void> => {
  const modulePackageJsonPath = join(
    rootSLPTemplate.packageLocation,
    file_packageJson
  );
  const modulePackageJson = await readJsonFileStore(modulePackageJsonPath);
  const moduleDevDependencies = modulePackageJson.devDependencies || {};

  const buildFunctionLayerPath = join(
    rootSLPTemplate.packageLocation,
    path_build,
    path_serverless,
    path_functionLayers
  );

  await Promise.all(
    rootSLPTemplate.keywordPaths[KeywordSOMODFunctionLayerLibraries].map(
      async layerPaths => {
        const layer = getSOMODKeyword<SOMODFunctionLayerLibraries>(
          rootSLPTemplate,
          layerPaths
        );

        const layerName = layer.LayerName[KeywordSOMODResourceName];
        const dependencies = {};

        layer[KeywordSOMODFunctionLayerLibraries].forEach(dependency => {
          dependencies[dependency] = moduleDevDependencies[dependency];
        });

        const layerPackageJson = {
          name: rootSLPTemplate.module + "-" + layerName.toLowerCase(),
          version: "1.0.0",
          description: `Lambda function layer - ${layerName}`,
          dependencies
        };

        const layerPath = join(
          buildFunctionLayerPath,
          layerName,
          path_layerNodeJs
        );

        await mkdir(layerPath, { recursive: true });
        await writeFile(
          join(layerPath, file_packageJson),
          JSON.stringify(layerPackageJson, null, 2)
        );
      }
    )
  );
};

export const installDependencies = async (
  dir: string,
  verbose = false
): Promise<void> => {
  const functionLayersPath = join(
    dir,
    path_build,
    path_serverless,
    path_functionLayers
  );

  if (!existsSync(functionLayersPath)) {
    return;
  }

  const npmCommand = process.platform == "win32" ? "npm.cmd" : "npm";
  const streamConfig: ChildProcessStreamConfig = {
    show: verbose ? "on" : "error",
    return: "off"
  };
  const layers = await readdir(functionLayersPath);
  await Promise.all(
    layers.map(async layer => {
      const layerPath = join(functionLayersPath, layer, path_layerNodeJs);
      await childProcess(
        layerPath,
        npmCommand,
        ["install"],
        streamConfig,
        streamConfig
      );
    })
  );
};
