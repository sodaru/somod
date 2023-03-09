import { createFiles, createTempDir, deleteDir } from "../../utils";
import {
  savePackageJson,
  updateSodaruModuleKeyInPackageJson
} from "../../../src";
import { existsSync } from "fs";
import { join } from "path";
import { readJsonFileStore, updateJsonFileStore } from "nodejs-file-utils";
import { readFile } from "fs/promises";
import { IContext } from "somod-types";

describe("Test Task savePackageJson", () => {
  let dir: string = null;

  beforeEach(() => {
    dir = createTempDir("test-somod-lib");
  });

  afterEach(() => {
    deleteDir(dir);
  });

  test("for no packageJson", async () => {
    await expect(savePackageJson({ dir } as IContext)).resolves.toBeUndefined();
    expect(existsSync(join(dir, "package.json"))).toBeFalsy();
  });

  test("for packageJson with out update", async () => {
    createFiles(dir, {
      "package.json": JSON.stringify({
        name: "some-package"
      })
    });
    await expect(savePackageJson({ dir } as IContext)).resolves.toBeUndefined();
  });

  test("for packageJson with update", async () => {
    createFiles(dir, {
      "package.json": JSON.stringify({
        name: "some-package"
      })
    });
    const packageJsonPath = join(dir, "package.json");
    const packageJsonContent = await readJsonFileStore(packageJsonPath);
    packageJsonContent.version = "1.0.0";
    updateJsonFileStore(packageJsonPath, packageJsonContent);
    await expect(savePackageJson({ dir } as IContext)).resolves.toBeUndefined();
    await expect(
      readFile(packageJsonPath, { encoding: "utf8" })
    ).resolves.toEqual(
      JSON.stringify({ name: "some-package", version: "1.0.0" }, null, 2) + "\n"
    );
  });

  test("for setSomod and save", async () => {
    createFiles(dir, {
      "package.json": JSON.stringify({
        name: "some-package"
      })
    });
    const packageJsonPath = join(dir, "package.json");
    await updateSodaruModuleKeyInPackageJson(dir);
    await expect(savePackageJson({ dir } as IContext)).resolves.toBeUndefined();
    const result = await readFile(packageJsonPath, { encoding: "utf8" });
    expect(JSON.parse(result)).toEqual({
      name: "some-package",
      somod: expect.stringMatching(/^[0-9]+\.[0-9]+\.[0-9]+$/)
    });
  });
});
