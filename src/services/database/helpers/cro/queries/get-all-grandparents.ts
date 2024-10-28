import { QueryFunction } from "@services";

/**
 * Получить всех биологических бабушек и дедушек человека
 */
export const getAllGrandparentsQueryFunction: QueryFunction = async (sql) => {
  const personId = 316;

  return sql`
    WITH grandparents AS (
      WITH parents AS (
        SELECT "motherId", "fatherId"
        FROM "birthApplications"
        JOIN acts
        ON acts."applicationId" = "birthApplications"."applicationId"
        WHERE "birthApplications"."childId" = ${personId} AND acts."signingDate" IS NOT NULL
      )
      SELECT "motherId", "fatherId"
      FROM "birthApplications"
      JOIN acts
      ON acts."applicationId" = "birthApplications"."applicationId"
      WHERE (
        "birthApplications"."childId" IN (
          SELECT "motherId" FROM parents
        ) OR "birthApplications"."childId" IN (
          SELECT "fatherId" FROM parents
        )
      ) AND acts."signingDate" IS NOT NULL
    )
    SELECT name, surname, patronymic FROM people WHERE id IN (
      SELECT "motherId" FROM grandparents
    ) OR id IN (
      SELECT "fatherId" FROM grandparents
    )
  `;
};
