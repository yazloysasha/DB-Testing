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
        name: "db",
        required: true,
        type: "string",
      },
      {
        name: "t",
        required: true,
        type: "string",
      },
      {
        name: "c",
        required: false,
        type: "number",
      },
    ],
  };

  /**
   * Выполнить заранее подготовленный запрос
   */
  export const TestQueryCommand: ICommandContractItem = {
    name: CommandName.TEST_QUERY,
    args: [
      {
        name: "db",
        required: true,
        type: "string",
      },
      {
        name: "n",
        required: true,
        type: "number",
      },
    ],
  };
}
