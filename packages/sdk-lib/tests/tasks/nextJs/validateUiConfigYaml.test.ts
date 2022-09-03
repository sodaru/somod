import {
  createFiles,
  createTempDir,
  deleteDir,
  mockedFunction
} from "@sodev/test-utils";
import { validate } from "../../../src/utils/nextJs/config";
import { validateUiConfigYaml } from "../../../src";

jest.mock("../../../src/utils/nextJs/config", () => {
  return {
    __esModule: true,
    validate: jest.fn()
  };
});

describe("test Task validateUiConfigYaml", () => {
  let dir: string = null;

  beforeEach(async () => {
    dir = createTempDir();
    mockedFunction(validate).mockReset();
  });

  afterEach(() => {
    deleteDir(dir);
  });

  test("for no config.yaml", async () => {
    await expect(validateUiConfigYaml(dir)).resolves.toBeUndefined();
    expect(validate).toHaveBeenCalledTimes(0);
  });

  test("for valid config.yaml", async () => {
    createFiles(dir, { "ui/config.yaml": "" });
    await expect(validateUiConfigYaml(dir)).resolves.toBeUndefined();
    expect(validate).toHaveBeenCalledTimes(1);
    expect(validate).toHaveBeenCalledWith(dir, []);
  });
});
