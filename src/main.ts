import "dotenv/config";
import { IAppConfig } from "@types";

export const appConfig = process.env as IAppConfig;

import {
  setupDIContainer,
  connectToDatabases,
  setupConsoleReader,
} from "@config";

const setupApp = (): void => {
  setupDIContainer();

  connectToDatabases();

  setupConsoleReader();

  console.log("Testing system ready");
};

setupApp();
