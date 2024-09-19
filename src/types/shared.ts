export enum CommandName {
  FILL_TABLE = "fill",
  TEST_QUERY = "test",
  RUN_QUERY = "run",
}

export interface ICommandArgument {
  name: string;
  required: boolean;
  type: "string" | "number";
}

export interface ICommandContractItem {
  name: CommandName;
  args: ICommandArgument[];
}
