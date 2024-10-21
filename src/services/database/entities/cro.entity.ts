import { appConfig } from "@main";
import { IDatabase } from "@services/database";

export const cro: IDatabase = {
  name: "medicine",
  url: appConfig.CRO_DATABASE_URL as string,
  tables: {},
  queries: {},
};
