import readline from "readline";
import { di } from "./awilix-manager";
import { CommandService } from "@services";
import { commandController } from "@controllers";

/**
 * Подключиться к консоли для чтения команд
 */
export const setupConsoleReader = (): void => {
  const commandService: CommandService = di.container.resolve(
    CommandService.name
  );

  const readlineInterface = readline.createInterface({
    input: process.stdin,
  });

  readlineInterface.on("line", async (input) => {
    try {
      const command = commandService.getCommandFromLine(input);

      commandService.validateCommandArgs(command);

      await commandController(command);
    } catch (err) {
      console.error((err as Error).message);
    }
  });
};
