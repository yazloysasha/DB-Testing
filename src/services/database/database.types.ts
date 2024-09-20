import { Row, RowList, Sql } from "postgres";

export type TableFunction = (sql: Sql<{}>) => Promise<Columns>;
export type QueryFunction = (sql: Sql<{}>) => Promise<RowList<Row[]>>;

export type Columns = {
  [Property in string]: string;
};

export type Tables = {
  [Property in string]: TableFunction;
};

export interface IQuery {
  description: string;
  query: QueryFunction;
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
