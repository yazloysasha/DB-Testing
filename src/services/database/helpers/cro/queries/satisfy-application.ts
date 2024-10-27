import { QueryFunction } from "@services";
import { getRandomAltDate } from "@utils";
import { ApplicationStatus } from "@types";

/**
 * Удовлетворить заявление
 */
export const satisfyApplicationQueryFunction: QueryFunction = async (sql) => {
  // Получить случайное заявление и случайного сотрудника
  const result = await Promise.all([
    sql`SELECT id FROM applications WHERE status = ${ApplicationStatus.WAITING} ORDER BY RANDOM() LIMIT 1`,
    sql`SELECT "personId" FROM staff ORDER BY RANDOM() LIMIT 1`,
  ]);

  const application = result[0][0] as { id: number };
  const employee = result[1][0] as { personId: number };

  if (!application) throw Error('Table "applications" is empty');
  if (!employee) throw Error('Table "staff" is empty');

  return sql`
    UPDATE applications SET
    status = ${ApplicationStatus.SATISFIED},
    "considerationEmployeeId" = ${employee.personId},
    "considerationDate" = ${getRandomAltDate("now")}
    WHERE id = ${application.id}
    RETURNING *
  `;
};
