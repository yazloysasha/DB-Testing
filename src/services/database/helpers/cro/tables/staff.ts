import { TableFunction } from "@services";

/**
 * Сотрудники
 */
export const staffTableFunction: TableFunction = async (sql) => {
  // Получить случайного человека и случайное отделение
  const result = await Promise.all([
    sql`SELECT id FROM people ORDER BY RANDOM() LIMIT 1`,
    sql`SELECT id FROM offices ORDER BY RANDOM() LIMIT 1`,
  ]);

  const person = result[0][0] as { id: number };
  const office = result[1][0] as { id: number };

  if (!person) throw Error('Table "people" is empty');
  if (!office) throw Error('Table "offices" is empty');

  return {
    personId: String(person.id),
    officeId: String(office.id),
  };
};
