import { ApplicationType } from "@types";
import { TableFunction } from "@services";

/**
 * Заявители и заявления
 */
export const citizensAndApplicationsTableFunction: TableFunction = async (
  sql
) => {
  // Получить случайное заявление
  const [application]: [{ id: number; type: ApplicationType }] =
    await sql`SELECT id, type FROM applications ORDER BY RANDOM() LIMIT 1`;

  if (!application) {
    throw Error('Table "applications" is empty');
  }

  let citizenId: number;

  switch (application.type) {
    case ApplicationType.MARRIAGE:
      // Получить дополнение к заявлению на заключение брака
      const [marriageApplication]: [{ wifeId: number; husbandId: number }] =
        await sql`SELECT "wifeId", "husbandId" FROM "marriageApplications" WHERE "applicationId" = ${application.id}`;

      if (!marriageApplication) throw Error("The application is not completed");

      citizenId =
        Math.random() < 0.5
          ? marriageApplication.wifeId
          : marriageApplication.husbandId;
      break;

    case ApplicationType.DIVORCE:
      // Получить дополнение к заявлению на расторжение брака
      const [divorceApplication]: [{ wifeId: number; husbandId: number }] =
        await sql`SELECT "wifeId", "husbandId" FROM "divorceApplications" WHERE "applicationId" = ${application.id}`;

      if (!divorceApplication) throw Error("The application is not completed");

      citizenId =
        Math.random() < 0.5
          ? marriageApplication.wifeId
          : marriageApplication.husbandId;
      break;

    case ApplicationType.NAME_CHANGE:
      // Получить дополнение к заявлению на смену имени
      const [nameChangeApplication]: [{ personId: number }] =
        await sql`SELECT "personId" FROM "nameChangeApplications" WHERE "applicationId" = ${application.id}`;

      if (!nameChangeApplication) {
        throw Error("The application is not completed");
      }

      citizenId = nameChangeApplication.personId;
      break;

    case ApplicationType.FILIATION:
      // Получить дополнение к заявлению на установление отцовства
      const [filiationApplication]: [{ fatherId: number }] =
        await sql`SELECT "fatherId" FROM "filiationApplications" WHERE "applicationId" = ${application.id}`;

      if (!filiationApplication) {
        throw Error("The application is not completed");
      }

      citizenId = filiationApplication.fatherId;
      break;

    case ApplicationType.ADOPTION:
      // Получить дополнение к заявлению на усыновление/удочерение
      const [adoptionApplication]: [{ motherId: number; fatherId: number }] =
        await sql`SELECT "motherId", "fatherId" FROM "adoptionApplications" WHERE "applicationId" = ${application.id}`;

      if (!adoptionApplication) throw Error("The application is not completed");

      citizenId =
        Math.random() < 0.5
          ? adoptionApplication.motherId || adoptionApplication.fatherId
          : adoptionApplication.fatherId || adoptionApplication.motherId;
      break;

    case ApplicationType.BIRTH:
    case ApplicationType.DEATH:
      // Получить случайного гражданина
      const [citizen]: [{ personId: number }] =
        await sql`SELECT "personId" FROM citizens ORDER BY RANDOM() LIMIT 1`;

      if (!citizen) throw Error('Table "citizens" is empty');

      citizenId = citizen.personId;
      break;
  }

  return {
    citizenId: String(citizenId),
    applicationId: String(application.id),
  };
};
