import { TableFunction } from "@services";

/**
 * Больницы и лаборатории
 */
export const hospitalsAndLaboratoriesTableFunction: TableFunction = async (
  sql
) => {
  // Получить случайную больницу и случайную лабораторию
  const result = await Promise.all([
    sql`SELECT id FROM hospitals ORDER BY RANDOM() LIMIT 1`,
    sql`SELECT id FROM laboratories ORDER BY RANDOM() LIMIT 1`,
  ]);

  const hospital = result[0][0] as { id: number };
  const laboratory = result[1][0] as { id: number };

  if (!hospital) throw Error('Table "hospitals" is empty');
  if (!laboratory) throw Error('Table "laboratories" is empty');

  return {
    hospitalId: String(hospital.id),
    laboratoryId: String(laboratory.id),
  };
};
