import { ICommand } from "./command.types";
import { CommandContract } from "@contract";
import { ICommandContractItem } from "@types";

/**
 * Сервис для работы с командами
 */
export class CommandService {
  /**
   * Доступные команды
   */
  private commands: ICommandContractItem[] = [
    CommandContract.RunQueryCommand,
    CommandContract.FillTableCommand,
    CommandContract.TestQueryCommand,
  ];

  /**
   * Распарсить строку в команду
   */
  getCommandFromLine(line: string): ICommand {
    const words = line.split(" ");

    const name: string = words[0];
    const args: { [Property in string]: string } = {};

    for (let i = 1; i < words.length; i++) {
      const [key, value] = words[i].split("=");
      if (!key || !value) continue;

      args[key] = value;
    }

    return {
      name,
      args,
    };
  }

  /**
   * Валидация аргументов для команды
   */
  validateCommandArgs(command: ICommand): void {
    const commandModel = this.commands.find(
      (commandModel) => command.name === commandModel.name
    );

    if (!commandModel) throw Error("Unknown command");

    for (const argModel of commandModel.args) {
      const value = command.args[argModel.name];

      if (argModel.required && !command.args[argModel.name]) {
        throw Error(`Argument required: ${argModel.name}`);
      }

      if (argModel.type === "number" && value && isNaN(Number(value))) {
        throw Error(`Argument must be a number: ${argModel.name}`);
      }
    }
  }
}
