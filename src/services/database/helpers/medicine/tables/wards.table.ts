import { Gender } from "@types";
import { TableFunction } from "@services";
import { getRandomInteger, getRandomPlaceName } from "@utils";

/**
 * Палаты
 */
export const wardsTableFunction: TableFunction = async (sql) => {
  // Получить случайную больницу
  const [hospital]: [{ id: number }] =
    await sql`SELECT id FROM hospitals ORDER BY RANDOM() LIMIT 1`;

  if (!hospital) throw Error('Table "hospitals" is empty');

  return {
    hospitalId: String(hospital.id),
    number: String(getRandomInteger(0, 10)),
    name: getRandomPlaceName("палата", Gender.FEMININE),
    countOfBeds: String(getRandomInteger(0, 10)),
  };
};
