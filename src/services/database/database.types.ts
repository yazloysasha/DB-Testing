import { Row, RowList, Sql } from "postgres";

export type Columns = {
  [Property in string]: string;
};

export type Tables = {
  [Property in string]: (sql: Sql<{}>) => Promise<Columns>;
};

export interface IQuery {
  description: string;
  query: (sql: Sql<{}>) => Promise<RowList<Row[]>>;
}

export type Queries = {
  [Property in string]: IQuery;
};

export interface IDatabase {
  name: string;
  url: string;
  tables: Tables;
  queries: Queries;
}
