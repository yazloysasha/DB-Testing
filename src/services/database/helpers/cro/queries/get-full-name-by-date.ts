import { QueryFunction } from "@services";

/**
 * Получить ФИО гражданина в определённую дату
 */
export const getFullNameByDateQueryFunction: QueryFunction = async (sql) => {
  const personId = 314;
  const date = "1184-05-02"; // 1184-04-18

  return sql`
    WITH logs AS (
      SELECT name, surname, patronymic FROM "peopleDataLogs"
      JOIN acts
      ON acts."applicationId" = "peopleDataLogs"."applicationId"
      WHERE "peopleDataLogs"."personId" = ${personId} AND acts."signingDate" < ${date}
      ORDER BY acts."signingDate" DESC
    )
    SELECT
    (SELECT name FROM logs WHERE name IS NOT NULL LIMIT 1) AS name,
    (SELECT surname FROM logs WHERE surname IS NOT NULL LIMIT 1) AS surname,
    (SELECT patronymic FROM logs WHERE patronymic IS NOT NULL LIMIT 1) AS patronymic
  `;
};
