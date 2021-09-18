import { existsSync } from "fs";
import { writeFile } from "fs/promises";
import { uniq } from "lodash";
import { join } from "path";
import {
  file_index_dts,
  file_index_js,
  path_build
} from "../../utils/constants";
import { get as getExports } from "../../utils/exports";

/**
 *
 * @param dir
 * @param modules modules to be included in index , relative to ./build directory , default module "lib" is included
 */
export const generateIndex = async (
  dir: string,
  modules: string[] = []
): Promise<void> => {
  const statements: string[] = [];

  const defaultModules = ["lib/index"];

  const _modules = uniq([...defaultModules, ...modules]);

  _modules.forEach(module => {
    const modulePath = join(dir, path_build, module + ".js");
    if (existsSync(modulePath)) {
      const exports = getExports(modulePath);
      if (exports.named.length > 0) {
        // re-export only named exports
        if (module.endsWith("/index")) {
          module = module.substring(0, module.lastIndexOf("/index"));
        }
        statements.push(`export * from "./${module}";`);
      }
    }
  });

  if (statements.length > 0) {
    const indexContent = statements.join("\n");
    await Promise.all([
      writeFile(join(dir, path_build, file_index_js), indexContent),
      writeFile(join(dir, path_build, file_index_dts), indexContent)
    ]);
  }
};
