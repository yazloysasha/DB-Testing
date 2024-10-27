import { TableFunction } from "@services";
import { getRandomAltDate, getRandomInteger } from "@utils";

/**
 * Акты
 */
export const actsTableFunction: TableFunction = async (sql) => {
  // Получить случайное заявление и случайного сотрудника
  const result = await Promise.all([
    sql`SELECT id FROM applications ORDER BY RANDOM() LIMIT 1`,
    sql`SELECT "personId" FROM staff ORDER BY RANDOM() LIMIT 1`,
  ]);

  const application = result[0][0] as { id: number };
  const employee = result[1][0] as { personId: number };

  if (!application) throw Error('Table "applications" is empty');
  if (!employee) throw Error('Table "staff" is empty');

  return {
    applicationId: String(application.id),
    employeeId: String(employee.personId),
    signingDate: getRandomAltDate("now"),
    documentNumber: String(getRandomInteger(0, 1000)),
  };
};
