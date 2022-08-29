export type ServerlessResource = Readonly<
  {
    Type: string;
    Properties: Record<string, unknown>;
  } & Record<string, unknown>
>;

export type ServerlessTemplate = {
  readonly Resources: Readonly<Record<string, ServerlessResource>>;
};

export type ModuleServerlessTemplate = Readonly<{
  module: string;
  packageLocation: string;
  template: ServerlessTemplate;
  root?: boolean;
}>;

export type ModuleServerlessTemplateMap = Readonly<
  Record<string, ModuleServerlessTemplate>
>;

export type SAMTemplate = {
  Resources: Record<string, ServerlessResource>;
};
