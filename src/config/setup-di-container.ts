import { asClass } from "awilix";
import { di } from "./awilix-manager";
import { CommandService, DatabaseService } from "@services";

/**
 * Установить зависимости в DI-контейнере
 */
export const setupDIContainer = (): void => {
  di.container.register({
    [CommandService.name]: asClass(CommandService).singleton(),
    [DatabaseService.name]: asClass(DatabaseService).singleton(),
  });
};
