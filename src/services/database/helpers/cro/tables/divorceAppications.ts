import { ApplicationType } from "@types";
import { TableFunction } from "@services";

/**
 * Заявления на расторжение брака
 */
export const divorceApplicationsTableFunction: TableFunction = async (sql) => {
  // Получить случайное заявление на расторжение брака и случайный брак
  const result = await Promise.all([
    sql`SELECT id FROM applications WHERE type = ${ApplicationType.DIVORCE} ORDER BY RANDOM() LIMIT 1`,
    sql`SELECT wifeId, husbandId FROM "marriageApplications" ORDER BY RANDOM() LIMIT 1`,
  ]);

  const application = result[0][0] as { id: number };
  const marriageApplication = result[1][0] as {
    wifeId: number;
    husbandId: number;
  };

  if (!application) {
    throw Error(
      `Table "applications" with "${ApplicationType.DIVORCE}" type is empty`
    );
  }
  if (!marriageApplication) {
    throw Error('Table "marriageApplications" is empty');
  }

  return {
    applicationId: String(application.id),
    wifeId: String(marriageApplication.wifeId),
    husbandId: String(marriageApplication.husbandId),
  };
};
