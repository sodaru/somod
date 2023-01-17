import { createTempDir, deleteDir, mockedFunction } from "../../utils";
import { generate } from "../../../src/utils/parameters/generate";
import { generateRootParameters } from "../../../src";
import { IContext } from "somod-types";

jest.mock("../../../src/utils/parameters/generate", () => {
  return {
    __esModule: true,
    generate: jest.fn()
  };
});

describe("test Task generateRootParameters", () => {
  let dir: string = null;

  beforeEach(async () => {
    dir = createTempDir("test-somod-lib");
    mockedFunction(generate).mockReset();
  });

  afterEach(() => {
    deleteDir(dir);
  });

  test("for no override", async () => {
    await expect(
      generateRootParameters({ dir } as IContext)
    ).resolves.toBeUndefined();
    expect(generate).toHaveBeenCalledTimes(1);
    expect(generate).toHaveBeenCalledWith({ dir }, false);
  });

  test("for override", async () => {
    await expect(
      generateRootParameters({ dir } as IContext, true)
    ).resolves.toBeUndefined();
    expect(generate).toHaveBeenCalledTimes(1);
    expect(generate).toHaveBeenCalledWith({ dir }, true);
  });
});
