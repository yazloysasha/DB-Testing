import { CommandName, ICommandContractItem } from "@types";

/**
 * Регистрация команд
 */
export namespace CommandContract {
  /**
   * Заполнить таблицу данными
   */
  export const FillTableCommand: ICommandContractItem = {
    name: CommandName.FILL_TABLE,
    args: [
      {
        name: "database",
        required: true,
        type: "string",
      },
      {
        name: "table",
        required: true,
        type: "string",
      },
      {
        name: "count",
        required: false,
        type: "number",
      },
    ],
  };

  /**
   * Выполнить заранее подготовленный запрос
   */
  export const TestTableCommand: ICommandContractItem = {
    name: CommandName.TEST_QUERY,
    args: [
      {
        name: "database",
        required: true,
        type: "string",
      },
    ],
  };

  /**
   * Выполнить любой запрос
   */
  export const RunQueryCommand: ICommandContractItem = {
    name: CommandName.RUN_QUERY,
    args: [
      {
        name: "database",
        required: true,
        type: "string",
      },
    ],
  };
}
