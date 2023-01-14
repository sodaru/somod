import { childProcess, ChildProcessError } from "nodejs-cli-runner";
import { IContext } from "somod-types";
import { file_tsConfigSomodJson } from "../../utils/constants";

export const compileTypeScript = async (
  context: IContext,
  noEmit = false
): Promise<void> => {
  const args = ["tsc", "--project", file_tsConfigSomodJson];
  if (noEmit) {
    args.push("--noEmit");
  }
  try {
    await childProcess(
      context.dir,
      process.platform === "win32" ? "npx.cmd" : "npx",
      args,
      { show: "off", return: "on" },
      { show: "off", return: "on" }
    );
  } catch (e) {
    if (
      !(
        e instanceof ChildProcessError &&
        e.result.stdout.startsWith(
          "error TS18003: No inputs were found in config file"
        )
      )
    ) {
      throw e;
    }
  }
};
