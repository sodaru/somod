import {
  parse,
  AST_NODE_TYPES,
  TSESTree
} from "@typescript-eslint/typescript-estree";

import { existsSync, readFileSync } from "fs";
import { join, normalize, dirname } from "path";

export type Exports = {
  default: boolean;
  named: string[];
};

const getExportsFromBindingName = (
  bindingName: TSESTree.BindingName
): string[] => {
  const namedExports: string[] = [];
  switch (bindingName.type) {
    case AST_NODE_TYPES.Identifier:
      namedExports.push(bindingName.name);
      break;
    case AST_NODE_TYPES.ObjectPattern:
      bindingName.properties.forEach(property => {
        /* istanbul ignore else  */
        if (property.value) {
          /* istanbul ignore else  */
          if (
            property.value.type == AST_NODE_TYPES.Identifier ||
            property.value.type == AST_NODE_TYPES.ObjectPattern ||
            property.value.type == AST_NODE_TYPES.ArrayPattern
          ) {
            namedExports.push(...getExportsFromBindingName(property.value));
          }
        }
      });
      break;
    case AST_NODE_TYPES.ArrayPattern:
      bindingName.elements.forEach(element => {
        /* istanbul ignore else  */
        if (
          element.type == AST_NODE_TYPES.Identifier ||
          element.type == AST_NODE_TYPES.ObjectPattern ||
          element.type == AST_NODE_TYPES.ArrayPattern
        ) {
          namedExports.push(...getExportsFromBindingName(element));
        }
      });
      break;
  }

  return namedExports;
};

const getExportsFromExportDeclaration = (
  declaration: TSESTree.ExportDeclaration
): string[] => {
  const exports = [];
  switch (declaration.type) {
    case AST_NODE_TYPES.ClassDeclaration:
      exports.push((declaration as TSESTree.ClassDeclaration).id.name);
      break;
    /* istanbul ignore next */
    case AST_NODE_TYPES.ClassExpression:
      exports.push((declaration as TSESTree.ClassExpression).id.name);
      break;
    case AST_NODE_TYPES.FunctionDeclaration:
      exports.push((declaration as TSESTree.FunctionDeclaration).id.name);
      break;
    case AST_NODE_TYPES.TSTypeAliasDeclaration:
      exports.push((declaration as TSESTree.TSTypeAliasDeclaration).id.name);
      break;
    /* istanbul ignore next */
    case AST_NODE_TYPES.TSDeclareFunction:
      exports.push((declaration as TSESTree.TSDeclareFunction).id.name);
      break;
    case AST_NODE_TYPES.TSEnumDeclaration:
      exports.push((declaration as TSESTree.TSEnumDeclaration).id.name);
      break;
    case AST_NODE_TYPES.TSInterfaceDeclaration:
      exports.push((declaration as TSESTree.TSInterfaceDeclaration).id.name);
      break;
    case AST_NODE_TYPES.VariableDeclaration:
      (declaration as TSESTree.VariableDeclaration).declarations.forEach(
        decl => {
          exports.push(...getExportsFromBindingName(decl.id));
        }
      );
      break;
    case AST_NODE_TYPES.TSModuleDeclaration:
      {
        const id = (declaration as TSESTree.TSModuleDeclaration)
          .id as TSESTree.Identifier;
        exports.push(id.name);
      }
      break;
  }
  return exports;
};

const getExportsFromExportAllDeclaration = (
  statement: TSESTree.ExportAllDeclaration,
  file: string
): string[] => {
  const exports: string[] = [];
  if (statement.exported) {
    exports.push(statement.exported.name);
  } else {
    const source = (statement.source as TSESTree.Literal).value as string;
    if (!source.startsWith(".")) {
      throw new Error("export * from module is not supported");
    } else {
      const currentDir = dirname(file);
      const sourceTsFilePath = normalize(join(currentDir, source + ".ts"));
      const sourceTsxFilePath = normalize(join(currentDir, source + ".tsx"));
      let sourceFile = null;
      if (existsSync(sourceTsFilePath)) {
        sourceFile = sourceTsFilePath;
      } else if (existsSync(sourceTsxFilePath)) {
        sourceFile = sourceTsxFilePath;
      } else {
        throw new Error("export * is supported only from .ts or .tsx files");
      }
      const sourceExports = getExports(sourceFile);
      exports.push(...sourceExports.named);
    }
  }

  return exports;
};

const getExportsFromStatement = (
  statement: TSESTree.ProgramStatement,
  file: string
): Exports => {
  const exports: Exports = { default: false, named: [] };
  if (statement.type == AST_NODE_TYPES.ExportNamedDeclaration) {
    if (statement.declaration) {
      exports.named.push(
        ...getExportsFromExportDeclaration(statement.declaration)
      );
    } else {
      exports.named.push(
        ...statement.specifiers.map(specifier => specifier.exported.name)
      );
    }
  } else if (statement.type == AST_NODE_TYPES.ExportDefaultDeclaration) {
    exports.default = true;
  } else if (statement.type == AST_NODE_TYPES.ExportAllDeclaration) {
    exports.named.push(...getExportsFromExportAllDeclaration(statement, file));
  } else if (statement.type == AST_NODE_TYPES.TSExportAssignment) {
    throw new Error(`export assignment is not allowed`);
  } else {
    /* istanbul ignore if */
    if (statement.type == AST_NODE_TYPES.TSNamespaceExportDeclaration) {
      throw new Error(`export namespace is not allowed`);
    }
  }
  if (exports.named.includes("default")) {
    exports.default = true;
    exports.named = exports.named.filter(
      namedExport => namedExport != "default"
    );
  }
  return exports;
};

const getExports = (file: string): Exports => {
  const fileContent = readFileSync(file, { encoding: "utf8" });
  const ast = parse(fileContent, { jsx: true });
  const exports: Exports = { default: false, named: [] };
  try {
    ast.body.forEach(statement => {
      const statementExports = getExportsFromStatement(statement, file);
      exports.default = exports.default || statementExports.default;
      exports.named.push(...statementExports.named);
    });
  } catch (e) {
    throw new Error(e.message + " in " + file);
  }
  return exports;
};

export const get = getExports;

export const generateExportStatement = (
  file: string,
  prefix: string,
  exports: Exports
): string => {
  const _exports: string[] = [];
  if (exports.default) {
    _exports.push(`default as ${prefix}`);
  }
  exports.named.forEach(exportName => {
    _exports.push(`${exportName} as ${prefix}${exportName}`);
  });
  return `export { ${_exports.join(", ")} } from "${file}";`;
};
