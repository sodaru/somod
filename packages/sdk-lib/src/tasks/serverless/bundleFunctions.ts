import { existsSync } from "fs";
import { join } from "path";
import { file_templateYaml, path_serverless } from "../../utils/constants";
import { ModuleHandler } from "../../utils/moduleHandler";
import { bundleFunctions as _bundleFunctions } from "../../utils/serverless/bundleFunctions";
import { loadServerlessTemplate } from "../../utils/serverless/serverlessTemplate/serverlessTemplate";

export const bundleFunctions = async (dir: string, verbose = false) => {
  const templateYamlPath = join(dir, path_serverless, file_templateYaml);
  if (existsSync(templateYamlPath)) {
    const moduleHandler = ModuleHandler.getModuleHandler();
    const rootModuleNode = await moduleHandler.getRoodModuleNode();
    const rootModuleTemplate = await loadServerlessTemplate(
      rootModuleNode.module
    );
    await _bundleFunctions(dir, rootModuleTemplate, verbose);
  }
};
