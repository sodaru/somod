import { existsSync } from "fs";
import { mkdir, readdir, readFile, writeFile } from "fs/promises";
import { join } from "path";
import { chdir } from "process";
import { layerLibraries } from "./index";
import rimraf from "rimraf";

const deleteDir = (dir: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    rimraf(dir, err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

export const generate = async () => {
  chdir(join(__dirname, ".."));
  await mkdir("./layers", { recursive: true });
  const rootPackageJsonStr = await readFile("./package.json", {
    encoding: "utf8"
  });

  const rootPackageJson = JSON.parse(rootPackageJsonStr);

  for (const layer in layerLibraries) {
    const dependencies = {};
    layerLibraries[layer]["libraries"].forEach((dependency: string) => {
      const dependencyVersion = rootPackageJson.peerDependencies[dependency];
      if (!dependencyVersion) {
        throw new Error(
          `Dependency ${dependency} in layer ${layer} is not found in root package.json's peerDependencies`
        );
      }
      dependencies[dependency] = dependencyVersion;
    });
    const packageJSON = {
      name: `slplayer-${layer.toLowerCase()}`,
      version: "1.0.0",
      description: "Function layer generated by @somod/common-layers",
      dependencies: dependencies
    };
    await mkdir(`./layers/${layer}/nodejs`, { recursive: true });
    await writeFile(
      `./layers/${layer}/nodejs/package.json`,
      JSON.stringify(packageJSON, null, 2)
    );
  }
};

export const removeBaseLayerLibraries = async (
  layerName: string
): Promise<void> => {
  chdir(join(__dirname, ".."));
  const baseLayerNodeModulesPath = `./layers/base/nodejs/node_modules`;
  const layerNodeModulesPath = `./layers/${layerName}/nodejs/node_modules`;
  const dirs = await readdir(layerNodeModulesPath);
  const scopes: string[] = [];
  const libraries = dirs.filter(dir => {
    if (dir.startsWith("@")) {
      scopes.push(dir);
      return false;
    }
    return true;
  });

  await Promise.all(
    scopes.map(async scope => {
      const scopedLibraries = await readdir(`${layerNodeModulesPath}/${scope}`);
      libraries.push(...scopedLibraries.map(l => `${scope}/${l}`));
    })
  );

  await Promise.all(
    libraries.map(async lib => {
      if ([".bin", ".package-lock.json"].includes(lib)) {
        return;
      }
      if (existsSync(`${baseLayerNodeModulesPath}/${lib}`)) {
        const packageJsonStrList = await Promise.all([
          readFile(`${baseLayerNodeModulesPath}/${lib}/package.json`, {
            encoding: "utf8"
          }),
          readFile(`${layerNodeModulesPath}/${lib}/package.json`, {
            encoding: "utf8"
          })
        ]);
        const [baseLayerLibVersion, layerLibVersion] = packageJsonStrList.map(
          p => JSON.parse(p).version
        );
        if (baseLayerLibVersion == layerLibVersion) {
          await deleteDir(`${layerNodeModulesPath}/${lib}`);
        }
      }
    })
  );
};
