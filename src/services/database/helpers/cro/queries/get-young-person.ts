import { QueryFunction } from "@services";

/**
 * Получить самого молодого человека
 */
export const getYoungPersonQueryFunction: QueryFunction = async (sql) => {
  return sql`
    WITH "peopleWithBirthDate" AS (
      SELECT name, surname, patronymic, (
        SELECT "birthDate" FROM "peopleDataLogs"
        JOIN acts
        ON acts."applicationId" = "peopleDataLogs"."applicationId"
        WHERE "birthDate" IS NOT NULL AND id = "peopleDataLogs"."personId"
        ORDER BY acts."signingDate" DESC
        LIMIT 1
      ) AS "birthDate"
      FROM people
    )
    SELECT name, surname, patronymic, "birthDate"
    FROM "peopleWithBirthDate"
    WHERE "birthDate" IS NOT NULL
    ORDER BY "birthDate" DESC
    LIMIT 1
  `;
};
