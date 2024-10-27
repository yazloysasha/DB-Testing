import { QueryFunction } from "@services";
import { getRandomAltDate } from "@utils";

/**
 * Получить супругов самого длительного брака за всё время
 */
export const getLongestMarriageQueryFunction: QueryFunction = async (sql) => {
  const altDate = getRandomAltDate("now");

  return sql`
    WITH marriage AS (
      WITH "marriagesWithDates" AS (
        SELECT "wifeId", "husbandId", "signingDate", (
          SELECT MIN("signingDate")
          FROM "divorceApplications"
          JOIN acts
          ON (
            acts."applicationId" = "divorceApplications"."applicationId"
          ) AND (
            acts."signingDate" >= "marriageActs"."signingDate"
          ) AND (
            "marriageApplications"."wifeId" = "divorceApplications"."wifeId"
          ) AND (
            "marriageApplications"."husbandId" = "divorceApplications"."husbandId"
          )
        ) AS "divorceDate"
        FROM "marriageApplications"
        JOIN acts "marriageActs"
        ON "marriageActs"."applicationId" = "marriageApplications"."applicationId"
      )
      SELECT "wifeId", "husbandId", (
        SELECT (
          CASE WHEN ("divorceDate" IS NULL) THEN ${altDate} ELSE "divorceDate" END
        ) - "signingDate"
      ) AS time
      FROM "marriagesWithDates"
      ORDER BY time DESC
      LIMIT 1
    )
    SELECT name, surname, patronymic
    FROM people
    WHERE id IN (
      SELECT "wifeId" FROM marriage
    ) OR id IN (
      SELECT "husbandId" FROM marriage
    )
  `;
};
