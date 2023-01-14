import { unixStylePath } from "nodejs-file-utils";
import { IContext } from "somod-types";
import { writeFile } from "fs/promises";
import { join, relative } from "path";
import { file_dotenv, file_nextConfigJs } from "../../utils/constants";
import { Config, generateCombinedConfig } from "../../utils/nextJs/config";

const generateDotEnvFile = async (
  dir: string,
  config: Config
): Promise<void> => {
  const envLines: string[] = [];
  Object.keys(config.env || {}).forEach(envName => {
    envLines.push(`${envName}=${JSON.stringify(config.env[envName])}`);
  });
  await writeFile(join(dir, file_dotenv), envLines.join("\n"));
};

const generateNextConfigJs = async (
  dir: string,
  config: Config
): Promise<void> => {
  /**
   * NOTE: This code will be part of somod cli (dist/index.js)
   * Assumed structure of somod
   * ```
   *    bin
   *      - somod.js
   *    dist
   *      - index.js
   *    scripts
   *      - withNextConfigOverride.js
   * ```
   *
   * So the withNextConfigOverridePath is calculated in relative to dist/index.js
   */
  const withNextConfigOverridePath = join(
    __dirname,
    "../scripts/withNextConfigOverride.js"
  );

  const relativePath = unixStylePath(relative(dir, withNextConfigOverridePath));

  const withBaseConfigRelativePath =
    relativePath.startsWith("../") || // already relative path
    relativePath.startsWith("/") || // absolute path in UNIX or IOS
    /^[A-Z]:\//.test(relativePath) // absolute path in Win
      ? relativePath
      : "./" + relativePath;

  const nextConfigJsContent = `/* eslint-disable */

const config = {
  images: {
    domains: [${config.imageDomains.map(d => `"${d}"`).join(", ")}]
  },
  publicRuntimeConfig: ${JSON.stringify(config.publicRuntimeConfig)},
  serverRuntimeConfig: ${JSON.stringify(config.serverRuntimeConfig)}
};

const withNextConfigOverride = require("${withBaseConfigRelativePath}");

module.exports = withNextConfigOverride(__dirname, config);
`;

  await writeFile(join(dir, file_nextConfigJs), nextConfigJsContent);
};

export const generateNextConfig = async (context: IContext): Promise<void> => {
  const config = await generateCombinedConfig(context);

  await generateDotEnvFile(context.dir, config);
  await generateNextConfigJs(context.dir, config);
};
