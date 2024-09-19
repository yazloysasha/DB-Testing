import { setupConsoleReader, setupDIContainer } from "@config";

const setupApp = (): void => {
  setupDIContainer();

  setupConsoleReader();

  console.log("Testing system ready");
};

setupApp();
