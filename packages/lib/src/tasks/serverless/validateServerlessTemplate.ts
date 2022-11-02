import { KeywordDefinition } from "somod-types";
import { existsSync } from "fs";
import { join } from "path";
import { file_templateYaml, path_serverless } from "../../utils/constants";
import { ModuleHandler } from "../../utils/moduleHandler";
import { validateServerlessTemplate as _validateServerlessTemplate } from "../../utils/serverless/serverlessTemplate/validate";

export const validateServerlessTemplate = async (
  dir: string,
  pluginKeywords: KeywordDefinition[] = []
): Promise<void> => {
  const templateYamlPath = join(dir, path_serverless, file_templateYaml);
  if (existsSync(templateYamlPath)) {
    const moduleHandler = ModuleHandler.getModuleHandler();
    const moduleNodes = await moduleHandler.listModules();
    const rootModuleName = moduleNodes[0].module.name;
    await _validateServerlessTemplate(dir, rootModuleName, pluginKeywords);
  }
};
