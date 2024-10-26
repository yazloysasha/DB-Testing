import {
  getRandomJob,
  getRandomShift,
  getRandomInteger,
  getRandomSurname,
  getRandomSexAndGender,
} from "@utils";
import { TableFunction } from "@services";

/**
 * Персонал
 */
export const staffTableFunction: TableFunction = async (sql) => {
  // Получить случайную палату
  const [ward]: [{ hospitalId: number; number: number }] =
    await sql`SELECT "hospitalId", number FROM wards ORDER BY RANDOM() LIMIT 1`;

  if (!ward) throw Error('Table "wards" is empty');

  const sexAndGender = getRandomSexAndGender();

  return {
    hospitalId: String(ward.hospitalId),
    wardNumber: String(ward.number),
    surname: getRandomSurname(sexAndGender.gender),
    job: getRandomJob(),
    shift: getRandomShift(),
    salary: String(getRandomInteger(0, 20000)),
  };
};
