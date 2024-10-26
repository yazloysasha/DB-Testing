import {
  getRandomName,
  getGenderBySex,
  getSurnameData,
  getRandomAddress,
  getRandomAltDate,
  getPatronymicData,
} from "@utils";
import { TableFunction } from "@services";
import { ApplicationType, Gender, Sex } from "@types";

/**
 * Заявления на усыновление/удочерение
 */
export const adoptionApplicationsTableFunction: TableFunction = async (sql) => {
  // Получить случайное заявление на усыновление/удочерение и случайного ребёнка
  const result = await Promise.all([
    sql`SELECT id FROM applications WHERE type = ${ApplicationType.ADOPTION} ORDER BY RANDOM() LIMIT 1`,
    sql`SELECT id, sex FROM people ORDER BY RANDOM() LIMIT 1`,
  ]);

  const application = result[0][0] as { id: number };
  const child = result[1][0] as { id: number; sex: Sex };

  if (!application) {
    throw Error(
      `Table "applications" with "${ApplicationType.ADOPTION}" type is empty`
    );
  }
  if (!child) throw Error('Table "people" is empty');

  let mother: { id: number; surname: string };
  let father: { id: number; name: string; surname: string };

  // С шансом 80% получить случайную мать
  if (Math.random() < 0.8) {
    const result =
      await sql`SELECT id, surname FROM people WHERE sex = ${Sex.FEMALE} ORDER BY RANDOM() LIMIT 1`;

    mother = result[0] as typeof mother;
  }

  // С шансом 80% получить случайного отца
  if (Math.random() < 0.8) {
    const result =
      await sql`SELECT id, name, surname FROM people WHERE sex = ${Sex.MALE} ORDER BY RANDOM() LIMIT 1`;

    father = result[0] as typeof father;
  }

  const gender = getGenderBySex(child.sex);

  return {
    applicationId: String(application.id),
    childId: String(child.id),
    motherId: mother ? String(mother.id) : null,
    fatherId: father ? String(father.id) : null,
    childName: Math.random() < 0.5 ? getRandomName(gender) : null,
    childSurname: father
      ? getSurnameData(father.surname, Gender.MASCULINE)[gender]
      : mother
      ? getSurnameData(mother.surname, Gender.FEMININE)[gender]
      : null,
    childPatronymic: father ? getPatronymicData(father.name)[gender] : null,
    childBirthPlace: Math.random() < 0.2 ? getRandomAddress() : null,
    childBirthDate: Math.random() < 0.2 ? getRandomAltDate("past") : null,
  };
};
