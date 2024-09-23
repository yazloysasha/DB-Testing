import {
  getRandomSurname,
  getRandomSpecialty,
  getRandomSexAndGender,
} from "@utils";
import { TableFunction } from "@services";

/**
 * Врачи
 */
export const doctorsTableFunction: TableFunction = async (sql) => {
  // Получить случайную больницу
  const [hospital]: [{ id: number }] =
    await sql`SELECT id FROM hospitals ORDER BY RANDOM() LIMIT 1`;

  if (!hospital) throw Error('Table "hospitals" is empty');

  const sexAndGender = getRandomSexAndGender();

  return {
    hospitalId: String(hospital.id),
    surname: getRandomSurname(sexAndGender.gender),
    specialty: getRandomSpecialty(),
  };
};
