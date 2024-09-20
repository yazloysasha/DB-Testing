import { QueryFunction } from "@services";

/**
 * Получить все больницы
 */
export const getAllHospitalsQueryFunction: QueryFunction = async (sql) => {
  return sql`SELECT * FROM hospitals`;
};
