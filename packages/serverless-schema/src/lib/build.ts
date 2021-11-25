import { AnySchemaObject } from "ajv";
import { readFile, writeFile } from "fs/promises";
import { getModuleFromUri, parseSchema } from "./common";

const correctUriReference = (input: string, base: string): string => {
  let _input = input;
  if (_input.indexOf("/node_modules/")) {
    const baseModuleName = getModuleFromUri(base) as string;
    const replacement = baseModuleName.startsWith(`@`) ? "/../../" : "/../";
    _input = _input.replace("/node_modules/", replacement);
  }
  return _input;
};

const correctReferences = (schema: string): string => {
  const schemaObj: AnySchemaObject = JSON.parse(schema);

  parseSchema(schemaObj, (id, ref) => {
    return correctUriReference(ref, id);
  });

  return JSON.stringify(schemaObj, null, 2);
};

export const buildSchema = async (file: string): Promise<void> => {
  const schema = await readFile(file, { encoding: "utf8" });
  const correctedSchema = correctReferences(schema);
  await writeFile(file, correctedSchema);
};
