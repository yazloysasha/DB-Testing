import { Sex } from "@types";
import { QueryFunction } from "@services";

/**
 * Добавить прародителей всего рода человеческого
 */
export const addAncestorsQueryFunction: QueryFunction = async (sql) => {
  // Получить случайную нерождённую женщину и случайного нерождённого мужчину
  const result = await Promise.all([
    sql`SELECT id FROM people WHERE alive IS NULL AND sex = ${Sex.FEMALE} ORDER BY RANDOM() LIMIT 1`,
    sql`SELECT id FROM people WHERE alive IS NULL AND sex = ${Sex.MALE} ORDER BY RANDOM() LIMIT 1`,
  ]);

  const woman = result[0][0] as { id: number };
  const man = result[1][0] as { id: number };

  if (!woman) {
    throw Error(
      `Table "people" with NULL alive and "${Sex.FEMALE}" sex is empty`
    );
  }
  if (!man) {
    throw Error(
      `Table "people" with NULL alive and "${Sex.MALE}" sex is empty`
    );
  }

  return sql`
    UPDATE people SET
    name = CASE WHEN (sex = ${Sex.MALE}) THEN 'Адам' ELSE 'Ева' END,
    alive = FALSE
    WHERE id IN (${man.id}, ${woman.id})
    RETURNING *
  `;
};
