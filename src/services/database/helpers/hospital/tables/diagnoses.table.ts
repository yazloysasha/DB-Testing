import {
  getRandomWarning,
  getRandomComplication,
  getRandomDiagnosisType,
} from "@utils";
import { TableFunction } from "@services";

/**
 * Диагнозы
 */
export const diagnosesTableFunction: TableFunction = async (sql) => {
  // Получить случайного пациента
  const [patient]: [{ registrationNumber: number }] =
    await sql`SELECT "registrationNumber" FROM patients ORDER BY RANDOM() LIMIT 1`;

  if (!patient) throw Error('Table "patients" is empty');

  return {
    patientRegistrationNumber: String(patient.registrationNumber),
    type: getRandomDiagnosisType(),
    complications: getRandomComplication(),
    warning: getRandomWarning(),
  };
};
