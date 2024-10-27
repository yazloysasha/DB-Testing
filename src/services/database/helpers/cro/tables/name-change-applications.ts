import {
  getRandomName,
  getGenderBySex,
  getRandomSurname,
  getRandomPatronymic,
} from "@utils";
import { TableFunction } from "@services";
import { ApplicationType, Sex } from "@types";

/**
 * Заявления на смену имени
 */
export const nameChangeApplicationsTableFunction: TableFunction = async (
  sql
) => {
  // Получить случайное заявление на смену имени и случайного человека
  const result = await Promise.all([
    sql`SELECT id FROM applications WHERE type = ${ApplicationType.NAME_CHANGE} ORDER BY RANDOM() LIMIT 1`,
    sql`SELECT id, sex FROM people ORDER BY RANDOM() LIMIT 1`,
  ]);

  const application = result[0][0] as { id: number };
  const person = result[1][0] as { id: number; sex: Sex };

  if (!application) {
    throw Error(
      `Table "applications" with "${ApplicationType.NAME_CHANGE}" type is empty`
    );
  }
  if (!person) throw Error('Table "people" is empty');

  const gender = getGenderBySex(person.sex);

  return {
    applicationId: String(application.id),
    personId: String(person.id),
    personName: Math.random() < 0.8 ? getRandomName(gender) : null,
    personSurname: Math.random() < 0.8 ? getRandomSurname(gender) : null,
    personPatronymic: Math.random() < 0.8 ? getRandomPatronymic(gender) : null,
  };
};
