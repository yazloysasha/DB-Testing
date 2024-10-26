import { getRandomInteger } from "@utils";
import { TableFunction } from "@services";

/**
 * Размещения
 */
export const placementsTableFunction: TableFunction = async (sql) => {
  // Получить случайную палату и случайного пациента
  const result = await Promise.all([
    sql`SELECT "hospitalId", number FROM wards ORDER BY RANDOM() LIMIT 1`,
    sql`SELECT "registrationNumber" FROM patients ORDER BY RANDOM() LIMIT 1`,
  ]);

  const ward = result[0][0] as { hospitalId: number; number: number };
  const patient = result[1][0] as { registrationNumber: number };

  if (!ward) throw Error('Table "wards" is empty');
  if (!patient) throw Error('Table "patients" is empty');

  return {
    hospitalId: String(ward.hospitalId),
    wardNumber: String(ward.number),
    bedNumber: String(getRandomInteger(0, 20)),
    patientRegistrationNumber: String(patient.registrationNumber),
  };
};
