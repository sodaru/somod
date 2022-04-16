import { readJsonFileStore, unixStylePath } from "@sodaru/cli-base";
import { CommonLayers, layerLibraries } from "@somod/common-layers";
import { build as esbuild } from "esbuild";
import { existsSync } from "fs";
import { mkdir, readdir, writeFile } from "fs/promises";
import { dirname, join } from "path";
import {
  file_index_js,
  path_build,
  path_functions,
  path_serverless,
  somod_slp_module
} from "../../constants";
import { apply as applyLayer } from "../baseModule/layers/baseLayer";
import {
  KeywordSLPFunction,
  ServerlessTemplate,
  SLPFunction,
  SLPTemplate
} from "../types";
import {
  getSLPKeyword,
  replaceSLPKeyword,
  updateKeywordPathsInSLPTemplate
} from "../utils";

export const validate = (slpTemplate: SLPTemplate): Error[] => {
  const errors: Error[] = [];

  slpTemplate.keywordPaths[KeywordSLPFunction].forEach(functionKeywordPath => {
    const _function = getSLPKeyword<SLPFunction>(
      slpTemplate,
      functionKeywordPath
    )[KeywordSLPFunction];

    /**
     * for root module look in <$packageLocation>/serverless/functions/<functionName>.ts
     * for child module look in <$packageLocation>/build/serverless/functions/<functionName>/index.js
     */
    let functionFilePath = slpTemplate.packageLocation;
    if (!slpTemplate.root) {
      functionFilePath = join(functionFilePath, path_build);
    }
    functionFilePath = join(
      functionFilePath,
      path_serverless,
      path_functions,
      _function.name + (slpTemplate.root ? ".ts" : "/index.js")
    );

    if (!existsSync(functionFilePath)) {
      errors.push(
        new Error(
          `Referenced module function {${slpTemplate.module}, ${
            _function.name
          }} not found. Looked for file "${unixStylePath(
            functionFilePath
          )}". Referenced in "${
            slpTemplate.module
          }" at "Resources/${functionKeywordPath.join("/")}"`
        )
      );
    }
  });

  return errors;
};

export const apply = (serverlessTemplate: ServerlessTemplate) => {
  Object.values(serverlessTemplate).forEach(slpTemplate => {
    slpTemplate.keywordPaths[KeywordSLPFunction].forEach(
      functionKeywordPath => {
        const _function = getSLPKeyword<SLPFunction>(
          slpTemplate,
          functionKeywordPath
        )[KeywordSLPFunction];
        replaceSLPKeyword(
          slpTemplate,
          functionKeywordPath,
          `${slpTemplate.packageLocation}/${path_build}/${path_serverless}/${path_functions}/${_function.name}`
        );

        const resourceId = functionKeywordPath[0];
        if (_function.layers.includes(CommonLayers.customResource)) {
          applyLayer(
            slpTemplate,
            resourceId,
            layerLibraries[CommonLayers.customResource]["moduleName"] ??
              somod_slp_module,
            layerLibraries[CommonLayers.customResource]["name"]
          );
        }

        if (_function.layers.includes(CommonLayers.httpWrapper)) {
          applyLayer(
            slpTemplate,
            resourceId,
            layerLibraries[CommonLayers.httpWrapper]["moduleName"] ??
              somod_slp_module,
            layerLibraries[CommonLayers.httpWrapper]["name"]
          );
        }

        applyLayer(
          slpTemplate,
          resourceId,
          layerLibraries[CommonLayers.base]["moduleName"] ?? somod_slp_module,
          layerLibraries[CommonLayers.base]["name"]
        );
      }
    );
    if (slpTemplate.keywordPaths[KeywordSLPFunction].length > 0) {
      // refresh keyword paths after applying layers
      updateKeywordPathsInSLPTemplate(slpTemplate);
    }
  });
};

const file_excludeJson = "exclude.json";

export const build = async (rootSLPTemplate: SLPTemplate): Promise<void> => {
  const buildFunctionsPath = join(
    rootSLPTemplate.packageLocation,
    path_build,
    path_serverless,
    path_functions
  );
  await Promise.all(
    rootSLPTemplate.keywordPaths[KeywordSLPFunction].map(
      async functionPaths => {
        const _function = getSLPKeyword<SLPFunction>(
          rootSLPTemplate,
          functionPaths
        )[KeywordSLPFunction];
        const external = ["aws-sdk", ...(_function.exclude || [])];
        external.push(...layerLibraries[CommonLayers.base]["libraries"]);
        if (_function.layers.includes(CommonLayers.customResource)) {
          external.push(
            ...layerLibraries[CommonLayers.customResource]["libraries"]
          );
        }
        if (_function.layers.includes(CommonLayers.httpWrapper)) {
          external.push(
            ...layerLibraries[CommonLayers.httpWrapper]["libraries"]
          );
        }
        const excludeFilePath = join(
          buildFunctionsPath,
          _function.name,
          file_excludeJson
        );
        const excludeFileDir = dirname(excludeFilePath);
        await mkdir(excludeFileDir, { recursive: true });
        await writeFile(excludeFilePath, JSON.stringify({ external }));
      }
    )
  );
};

export const bundle = async (dir: string): Promise<void> => {
  const srcFunctionsPath = join(dir, path_serverless, path_functions);
  const buildFunctionsPath = join(
    dir,
    path_build,
    path_serverless,
    path_functions
  );
  if (existsSync(srcFunctionsPath)) {
    const functions = await readdir(srcFunctionsPath);
    await Promise.all(
      functions.map(async functionFileName => {
        const functionName = functionFileName.substring(
          0,
          functionFileName.length - 3
        );

        const exclude = await readJsonFileStore(
          join(buildFunctionsPath, functionName, file_excludeJson)
        );

        await esbuild({
          entryPoints: [join(srcFunctionsPath, functionFileName)],
          bundle: true,
          outfile: join(buildFunctionsPath, functionName, file_index_js),
          sourcemap: false,
          platform: "node",
          external: exclude.external as string[],
          minify: true,
          target: ["node14"]
        });
      })
    );
  }
};
