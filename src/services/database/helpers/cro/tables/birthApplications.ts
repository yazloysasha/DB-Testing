import {
  getAltDate,
  getRandomName,
  getGenderBySex,
  getSurnameData,
  getRandomSurname,
  getRandomAddress,
  getPatronymicData,
} from "@utils";
import { TableFunction } from "@services";
import { ApplicationType, Gender, Sex } from "@types";

/**
 * Заявления на рождение
 */
export const birthApplicationsTableFunction: TableFunction = async (sql) => {
  const result = await Promise.all([
    // Получить случайное заявление на рождение
    sql`SELECT id FROM applications WHERE type = ${ApplicationType.BIRTH} ORDER BY RANDOM() LIMIT 1`,

    // Получить случайного нерождённого ребёнка
    sql`SELECT id, sex FROM people WHERE alive IS NULL ORDER BY RANDOM() LIMIT 1`,
  ]);

  const application = result[0][0] as { id: number };
  const child = result[1][0] as { id: number; sex: Sex };

  if (!application) {
    throw Error(
      `Table "applications" with "${ApplicationType.BIRTH}" type is empty`
    );
  }
  if (!child) throw Error('Table "people" with NULL alive is empty');

  let mother: { id: number; surname: string };
  let father: { id: number; name: string; surname: string };

  // С шансом 80% получить случайную мать
  if (Math.random() < 0.8) {
    const result =
      await sql`SELECT id, surname FROM people WHERE sex = ${Sex.FEMALE} ORDER BY RANDOM() LIMIT 1`;

    mother = result[0] as { id: number; surname: string };
  }

  // С шансом 80% получить случайного отца
  if (Math.random() < 0.8) {
    const result =
      await sql`SELECT id, name, surname FROM people WHERE sex = ${Sex.MALE} ORDER BY RANDOM() LIMIT 1`;

    father = result[0] as { id: number; name: string; surname: string };
  }

  const gender = getGenderBySex(child.sex);

  return {
    applicationId: String(application.id),
    childId: String(child.id),
    motherId: mother ? String(mother.id) : null,
    fatherId: father ? String(father.id) : null,
    childName: getRandomName(gender),
    childSurname: father
      ? getSurnameData(father.surname, Gender.MASCULINE)[gender]
      : mother
      ? getSurnameData(mother.surname, Gender.FEMININE)[gender]
      : getRandomSurname(gender),
    childPatronymic: father ? getPatronymicData(father.name)[gender] : null,
    childBirthPlace: getRandomAddress(),
    childBirthDate: getAltDate(),
  };
};
