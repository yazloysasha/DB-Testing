import { TableFunction } from "@services";
import { getRandomPhoneNumber } from "@utils";

/**
 * Номера телефонов лабораторий
 */
export const laboratoriesPhoneNumbersTableFunction: TableFunction = async (
  sql
) => {
  // Получить случайную лабораторию
  const [laboratory]: [{ id: number }] =
    await sql`SELECT id FROM laboratories ORDER BY RANDOM() LIMIT 1`;

  if (!laboratory) throw Error('Table "laboratories" is empty');

  return {
    laboratoryId: String(laboratory.id),
    phoneNumber: getRandomPhoneNumber(),
  };
};
