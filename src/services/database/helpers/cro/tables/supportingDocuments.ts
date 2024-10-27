import { TableFunction } from "@services";
import { getRandomAltDate } from "@utils";

/**
 * Подтверждающие документы
 */
export const supportingDocumentsTableFunction: TableFunction = async (sql) => {
  // Получить случайное заявление, случайного гражданина и случайного сотрудника
  const result = await Promise.all([
    sql`SELECT id FROM applications ORDER BY RANDOM() LIMIT 1`,
    sql`SELECT "personId" FROM citizens ORDER BY RANDOM() LIMIT 1`,
    sql`SELECT "personId" FROM staff ORDER BY RANDOM() LIMIT 1`,
  ]);

  const application = result[0][0] as { id: number };
  const citizen = result[1][0] as { personId: number };
  const employee = result[2][0] as { personId: number };

  if (!application) throw Error('Table "applications" is empty');
  if (!citizen) throw Error('Table "citizens" is empty');
  if (!employee) throw Error('Table "staff" is empty');

  return {
    applicationId: String(application.id),
    citizenId: String(citizen.personId),
    employeeId: String(employee.personId),
    title: "Документ такой-то",
    content: "Содержание такое-то",
    receiptDate: getRandomAltDate("now"),
  };
};
