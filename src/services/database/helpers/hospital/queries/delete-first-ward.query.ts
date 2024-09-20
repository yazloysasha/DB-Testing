import { QueryFunction } from "@services";

/**
 * Удалить первую палату
 */
export const deleteFirstWardQueryFunction: QueryFunction = async (sql) => {
  // Получить первую палату
  const [ward]: [{ hospitalId: number; number: number }] =
    await sql`SELECT "hospitalId", number FROM wards LIMIT 1`;

  if (!ward) throw Error('Table "wards" is empty');

  return sql`
    DELETE FROM wards WHERE "hospitalId" = ${ward.hospitalId} AND number = ${ward.number}
    RETURNING *
  `;
};
