import "dotenv/config";

export const appConfig = process.env as IAppConfig;

import {
  setupDIContainer,
  connectToDatabases,
  setupConsoleReader,
} from "@config";
import { IAppConfig } from "@types";

const setupApp = (): void => {
  setupDIContainer();

  connectToDatabases();

  setupConsoleReader();

  console.log("Testing system ready");
};

setupApp();
