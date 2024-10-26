import { getSurnameData } from "@utils";
import { TableFunction } from "@services";
import { ApplicationType, Gender, Sex } from "@types";

/**
 * Заявления на заключение брака
 */
export const marriageApplicationsTableFunction: TableFunction = async (sql) => {
  // Получить случайное заявление на заключение брака, случайную жену и случайного мужа
  const result = await Promise.all([
    sql`SELECT id FROM applications WHERE type = ${ApplicationType.MARRIAGE} ORDER BY RANDOM() LIMIT 1`,
    sql`SELECT id, surname FROM people WHERE sex = ${Sex.FEMALE} ORDER BY RANDOM() LIMIT 1`,
    sql`SELECT id, surname FROM people WHERE sex = ${Sex.MALE} ORDER BY RANDOM() LIMIT 1`,
  ]);

  const application = result[0][0] as { id: number };
  const wife = result[1][0] as { id: number; surname: string };
  const husband = result[2][0] as { id: number; surname: string };

  if (!application) {
    throw Error(
      `Table "applications" with "${ApplicationType.MARRIAGE}" type is empty`
    );
  }
  if (!wife) throw Error(`Table "people" with "${Sex.FEMALE}" sex is empty`);
  if (!husband) throw Error(`Table "people" with "${Sex.MALE}" sex is empty`);

  return {
    applicationId: String(application.id),
    wifeId: String(wife.id),
    husbandId: String(husband.id),
    wifeSurname:
      Math.random() < 0.8
        ? getSurnameData(husband.surname, Gender.MASCULINE)[Gender.FEMININE]
        : null,
    husbandSurname:
      Math.random() < 0.8
        ? null
        : getSurnameData(wife.surname, Gender.FEMININE)[Gender.MASCULINE],
  };
};
