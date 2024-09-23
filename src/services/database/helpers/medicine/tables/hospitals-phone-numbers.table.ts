import { TableFunction } from "@services";
import { getRandomPhoneNumber } from "@utils";

/**
 * Номера телефонов больниц
 */
export const hospitalsPhoneNumbersTableFunction: TableFunction = async (
  sql
) => {
  // Получить случайную больницу
  const [hospital]: [{ id: number }] =
    await sql`SELECT id FROM hospitals ORDER BY RANDOM() LIMIT 1`;

  if (!hospital) throw Error('Table "hospitals" is empty');

  return {
    hospitalId: String(hospital.id),
    phoneNumber: getRandomPhoneNumber(),
  };
};
