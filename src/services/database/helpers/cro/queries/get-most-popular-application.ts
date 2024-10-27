import { QueryFunction } from "@services";

/**
 * Получить самый популярный тип заявлений за указанный период
 */
export const getMostPopularApplicationQueryFunction: QueryFunction = async (
  sql
) => {
  const startDate = "1184-04-25";
  const endDate = "1184-04-29";

  return sql`
    SELECT type, COUNT(type)::int FROM applications
    WHERE ${startDate} <= "submissionDate" AND "submissionDate" <= ${endDate}
    GROUP BY type
    ORDER BY COUNT(type) DESC
    LIMIT 1
  `;
};
