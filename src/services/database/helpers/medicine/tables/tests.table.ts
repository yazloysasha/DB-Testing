import {
  getRandomTime,
  getRandomNumber,
  getRandomFutureDate,
  getRandomAnalysisType,
  getRandomAnalysisStatus,
} from "@utils";
import { TableFunction } from "@services";

/**
 * Анализы
 */
export const testsTableFunction: TableFunction = async (sql) => {
  // Получить случайного пациента и случайную лабораторию
  const result = await Promise.all([
    sql`SELECT "registrationNumber" FROM patients ORDER BY RANDOM() LIMIT 1`,
    sql`SELECT id FROM laboratories ORDER BY RANDOM() LIMIT 1`,
  ]);

  const patient = result[0][0] as { registrationNumber: number };
  const laboratory = result[1][0] as { id: number };

  if (!patient) throw Error('Table "patients" is empty');
  if (!laboratory) throw Error('Table "laboratories" is empty');

  return {
    patientRegistrationNumber: String(patient.registrationNumber),
    laboratoryId: String(laboratory.id),
    type: getRandomAnalysisType(),
    appointedDate: getRandomFutureDate(),
    appointedTime: getRandomTime(),
    referralNumber: getRandomNumber(0, 1000),
    status: getRandomAnalysisStatus(),
  };
};
