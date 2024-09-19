import { di } from "@config";
import { CommandContract } from "@contract";
import { DatabaseService, ICommand } from "@services";

/**
 * Обработчик для сообщений из консоли
 */

export const commandController = async (command: ICommand): Promise<void> => {
  const databaseService: DatabaseService = di.container.resolve(
    DatabaseService.name
  );

  const { database, table, count } = command.args;

  switch (command.name) {
    case CommandContract.FillTableCommand.name:
      await databaseService.fillTable({
        database,
        table,
        count: count ? Number(count) : undefined,
      });
      break;

    case CommandContract.TestTableCommand.name:
      await databaseService.testQuery({ database });
      break;

    case CommandContract.RunQueryCommand.name:
      await databaseService.runQuery({ database });
      break;
  }
};
