import {
  getRandomName,
  getSurnameData,
  getGenderBySex,
  getPatronymicData,
} from "@utils";
import { TableFunction } from "@services";
import { ApplicationType, Gender, Sex } from "@types";

/**
 * Заявления на установление отцовства
 */
export const filiationApplicationsTableFunction: TableFunction = async (
  sql
) => {
  // Получить случайное заявление на установление отцовства, случайного ребёнка и случайного отца
  const result = await Promise.all([
    sql`SELECT id FROM applications WHERE type = ${ApplicationType.FILIATION} ORDER BY RANDOM() LIMIT 1`,
    sql`SELECT id, sex FROM people ORDER BY RANDOM() LIMIT 1`,
    sql`SELECT id, name, surname FROM people WHERE sex = ${Sex.MALE} ORDER BY RANDOM() LIMIT 1`,
  ]);

  const application = result[0][0] as { id: number };
  const child = result[1][0] as { id: number; sex: Sex };
  const father = result[2][0] as { id: number; name: string; surname: string };

  if (!application) {
    throw Error(
      `Table "applications" with "${ApplicationType.FILIATION}" type is empty`
    );
  }
  if (!child) throw Error('Table "people" is empty');
  if (!father) throw Error(`Table "people" with "${Sex.MALE}" sex is empty`);

  const gender = getGenderBySex(child.sex);

  return {
    applicationId: String(application.id),
    childId: String(child.id),
    fatherId: String(father.id),
    childName: Math.random() < 0.5 ? getRandomName(gender) : null,
    childSurname: father.surname
      ? getSurnameData(father.surname, Gender.MASCULINE)[gender]
      : null,
    childPatronymic: getPatronymicData(father.name)[gender],
  };
};
