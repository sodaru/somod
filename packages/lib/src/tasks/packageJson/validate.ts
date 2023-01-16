import { JSONSchema7 } from "json-schema";
import {
  cli_version_regex,
  file_index_dts,
  file_index_js,
  file_packageJson,
  key_files,
  key_jsnextMain,
  key_main,
  key_module,
  key_sideEffects,
  key_somod,
  key_somodPlugins,
  key_type,
  key_typings,
  path_build,
  path_lib
} from "../../utils/constants";
import { somodModuleNamePattern } from "somod-schema";
import { read } from "../../utils/packageJson";
import { validate as validateJson, Violation } from "decorated-ajv";
import { IContext } from "somod-types";

const packageJsonSchema: JSONSchema7 = {
  type: "object",
  required: [
    "name",
    "version",
    "description",
    key_module,
    key_typings,
    key_files,
    key_sideEffects,
    key_somod
  ],
  properties: {
    name: somodModuleNamePattern,
    version: {
      type: "string"
    },
    description: {
      type: "string"
    },
    [key_module]: {
      const: `${path_build}/${path_lib}/${file_index_js}`,
      errorMessage: `must be ${path_build}/${path_lib}/${file_index_js}`
    },
    [key_typings]: {
      const: `${path_build}/${path_lib}/${file_index_dts}`,
      errorMessage: `must be ${path_build}/${path_lib}/${file_index_dts}`
    },
    [key_files]: {
      type: "array",
      items: { type: "string" },
      contains: {
        const: `${path_build}`
      },
      errorMessage: {
        contains: `must contain ${path_build}`
      }
    },
    [key_sideEffects]: {
      const: false,
      errorMessage: {
        const: "must be false"
      }
    },
    [key_somod]: {
      type: "string",
      pattern: cli_version_regex.source
    },
    [key_somodPlugins]: {
      type: "array",
      items: {
        type: "string",
        errorMessage: {
          type: "must be a valid plugin package name"
        }
      },
      errorMessage: {
        type: "must be array of plugin package names"
      }
    }
  }
};

const schemaValidate = async (packageJson: Record<string, unknown>) => {
  const violations = await validateJson(packageJsonSchema, packageJson);
  if (violations.length > 0) {
    throw new Error(
      `${file_packageJson} has following errors\n${violations
        .map(v => " " + (v.path + " " + v.message).trim())
        .join("\n")}`
    );
  }
};

const validateInvalidKeys = (packageJson: Record<string, unknown>) => {
  const invalidKeys = [key_main, key_jsnextMain, key_type];

  const violations: Violation[] = [];
  invalidKeys.forEach(key => {
    if (packageJson[key] !== undefined) {
      violations.push({
        path: key,
        message: "must not exist",
        context: { params: {} }
      });
    }
  });

  if (violations.length > 0) {
    throw new Error(
      `${file_packageJson} has following errors\n${violations
        .map(v => " " + (v.path + " " + v.message).trim())
        .join("\n")}`
    );
  }
};

export const validate = async (context: IContext): Promise<void> => {
  const packageJson = await read(context.dir);

  await schemaValidate(packageJson);
  validateInvalidKeys(packageJson);
};
