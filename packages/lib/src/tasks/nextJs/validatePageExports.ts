import { listFiles } from "nodejs-file-utils";
import { existsSync } from "fs";
import { join } from "path";
import { path_pages, path_pagesData, path_ui } from "../../utils/constants";
import { get as getExports } from "../../utils/exports";
import ErrorSet from "../../utils/ErrorSet";
import { IContext } from "somod-types";

export const validatePageExports = async (context: IContext): Promise<void> => {
  const errors: Error[] = [];
  const pagesDir = join(context.dir, path_ui, path_pages);
  if (existsSync(pagesDir)) {
    const pages = await listFiles(pagesDir, ".tsx");

    pages.forEach(page => {
      const exports = getExports(join(pagesDir, page));
      if (!exports.default) {
        errors.push(
          new Error(
            `${path_ui}/${path_pages}/${page} must have a default export`
          )
        );
      }
      if (exports.named.length > 0) {
        errors.push(
          new Error(
            `${path_ui}/${path_pages}/${page} must not contain named exports. All data-fetching methods must be defined under ${path_ui}/${path_pagesData}`
          )
        );
      }
    });
  }

  if (errors.length > 0) {
    throw new ErrorSet(errors);
  }
};
