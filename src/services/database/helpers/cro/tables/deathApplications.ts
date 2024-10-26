import { ApplicationType } from "@types";
import { TableFunction } from "@services";
import { getRandomAddress, getRandomAltDate } from "@utils";

/**
 * Заявления на смерть
 */
export const deathApplicationsTableFunction: TableFunction = async (sql) => {
  // Получить случайное заявление на смерть и случайного человека
  const result = await Promise.all([
    sql`SELECT id FROM applications WHERE type = ${ApplicationType.DEATH} ORDER BY RANDOM() LIMIT 1`,
    sql`SELECT id FROM people ORDER BY RANDOM() LIMIT 1`,
  ]);

  const application = result[0][0] as { id: number };
  const person = result[1][0] as { id: number };

  if (!application) {
    throw Error(
      `Table "applications" with "${ApplicationType.DEATH}" type is empty`
    );
  }
  if (!person) throw Error('Table "people" is empty');

  return {
    applicationId: String(application.id),
    personId: String(person.id),
    personDeathPlace: getRandomAddress(),
    personDeathDate: getRandomAltDate("now"),
  };
};
