import { TableFunction } from "@services";
import { getRandomAltDate, getRandomApplicationType } from "@utils";

/**
 * Заявления
 */
export const applicationsTableFunction: TableFunction = async (sql) => {
  // Получить случайное отделение и случайного сотрудника
  const result = await Promise.all([
    sql`SELECT id FROM offices ORDER BY RANDOM() LIMIT 1`,
    sql`SELECT id FROM staff ORDER BY RANDOM() LIMIT 1`,
  ]);

  const office = result[0][0] as { id: number };
  const employee = result[1][0] as { id: number };

  if (!office) throw Error('Table "offices" is empty');
  if (!employee) throw Error('Table "staff" is empty');

  return {
    officeId: String(office.id),
    submissionEmployeeId: String(employee.id),
    submissionDate: getRandomAltDate("now"),
    type: getRandomApplicationType(),
  };
};
