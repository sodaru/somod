import { CommonOptions, taskRunner, Command, Option } from "nodejs-cli-runner";
import { file_templateYaml, findRootDir, samDeploy } from "somod-lib";
import { BuildAction } from "./build";
import { PrepareAction } from "./prepare";

type DeployOptions = CommonOptions & {
  guided: boolean;
};

export const DeployAction = async ({
  verbose,
  guided
}: DeployOptions): Promise<void> => {
  const dir = findRootDir();

  await BuildAction({ verbose, ui: false, serverless: true });

  await PrepareAction({ verbose, ui: false, serverless: true });

  await taskRunner(
    `Deploying ${file_templateYaml}`,
    samDeploy,
    { verbose, progressIndicator: false },
    dir,
    verbose,
    guided
  );
};

const deployCommand = new Command("deploy");

deployCommand.action(DeployAction);

deployCommand.addOption(
  new Option(
    "-g, --guided",
    "guided will assist in configuring backend parameters in apply state"
  )
);

export default deployCommand;
