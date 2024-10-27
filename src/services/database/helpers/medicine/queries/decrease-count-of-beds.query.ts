import { QueryFunction } from "@services";

/**
 * Уменьшить количество кроватей в первой палате
 */
export const decreaseCountOfBedsQueryFunction: QueryFunction = async (sql) => {
  // Получить первую палату
  const [ward]: [{ hospitalId: number; number: number }] =
    await sql`SELECT "hospitalId", number FROM wards LIMIT 1`;

  if (!ward) throw Error('Table "wards" is empty');

  return sql`
    UPDATE wards
    SET "countOfBeds" = "countOfBeds" - 1
    WHERE "hospitalId" = ${ward.hospitalId} AND number = ${ward.number}
    RETURNING *
  `;
};
