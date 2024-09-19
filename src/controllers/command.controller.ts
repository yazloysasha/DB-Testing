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

  const { db, t, c } = command.args;

  switch (command.name) {
    case CommandContract.FillTableCommand.name:
      await databaseService.fillTable({
        database: db,
        table: t,
        count: c ? Number(c) : undefined,
      });
      break;

    case CommandContract.TestQueryCommand.name:
      await databaseService.testQuery({ database: db });
      break;

    case CommandContract.RunQueryCommand.name:
      await databaseService.runQuery({ database: db });
      break;
  }
};
