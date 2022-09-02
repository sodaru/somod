import { ModuleHandler, NamespaceLoader } from "../moduleHandler";
import {
  getNodeRuntimeVersion,
  getParameterNameFromSAMOutputName,
  getSAMOutputName,
  getSAMResourceLogicalId
} from "../../utils/serverless/utils";
import { KeywordDefinition } from "../keywords/types";

export type Mode = { ui: boolean; serverless: boolean };

export type Plugin = {
  tsconfig?: {
    compilerOptions?: Record<string, unknown>;
    include?: string[];
  };
  ignorePatterns?: {
    git?: string[];
    eslint?: string[];
    prettier?: string[];
  };
  namespaceLoader?: NamespaceLoader;
  keywords?: {
    uiConfig?: KeywordDefinition[];
    serverless?: KeywordDefinition[];
  };
  prebuild?: (
    dir: string,
    moduleHandler: ModuleHandler,
    mode: Mode
  ) => Promise<void>;
  build?: (
    dir: string,
    moduleHandler: ModuleHandler,
    mode: Mode
  ) => Promise<void>;
  preprepare?: (
    dir: string,
    moduleHandler: ModuleHandler,
    mode: Mode
  ) => Promise<void>;
  prepare?: (
    dir: string,
    moduleHandler: ModuleHandler,
    mode: Mode,
    utils: {
      getNodeRuntimeVersion: typeof getNodeRuntimeVersion;
      getParameterNameFromSAMOutputName: typeof getParameterNameFromSAMOutputName;
      getSAMOutputName: typeof getSAMOutputName;
      getSAMResourceLogicalId: typeof getSAMResourceLogicalId;
    }
  ) => Promise<void>;
};
