import { TableFunction } from "@services";

/**
 * Граждане
 */
export const citizensTableFunction: TableFunction = async (sql) => {
  // Получить случайного человека
  const [person]: [{ id: number }] =
    await sql`SELECT id FROM people ORDER BY RANDOM() LIMIT 1`;

  if (!person) throw Error('Table "people" is empty');

  return {
    personId: String(person.id),
  };
};
