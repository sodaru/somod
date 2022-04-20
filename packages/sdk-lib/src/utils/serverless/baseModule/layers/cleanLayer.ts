import { findReferences } from "../../keywords/ref";
import { OriginalSLPTemplate, ServerlessTemplate } from "../../types";
import { getAllLayersSLPResource } from "./commonLayer";
import { layerLibraries } from "@somod/common-layers";
import { somod_slp_module } from "../../../constants";
export const getBaseModuleOriginalSLPTemplate =
  async (): Promise<OriginalSLPTemplate> => {
    const baseModule = {
      Resources: await getAllLayersSLPResource()
    };
    return baseModule;
  };

export const cleanUnusedLayer = (
  moduleName: string,
  layerName: string,
  serverlessTemplate: ServerlessTemplate
) => {
  const layerReferences = findReferences(serverlessTemplate, {
    module: moduleName,
    resource: layerName
  });
  if (Object.keys(layerReferences).length == 0) {
    delete serverlessTemplate[moduleName].Resources[layerName];
  }
};

/**
 * delete the layer object which is not refernced by any resources in template.yaml's
 * @param serverlessTemplate : Group of template.yaml, main template.yml and dependent template.yaml's
 */
export const cleanUpBaseModule = (serverlessTemplate: ServerlessTemplate) => {
  Object.keys(layerLibraries).forEach(async layer => {
    cleanUnusedLayer(
      somod_slp_module,
      layerLibraries[layer]["name"],
      serverlessTemplate
    );
  });
};
