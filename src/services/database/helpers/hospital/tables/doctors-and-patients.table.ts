import { TableFunction } from "@services";

/**
 * Врачи и пациенты
 */
export const doctorsAndPatientsTableFunction: TableFunction = async (sql) => {
  // Получить случайного врача и случайного пациента
  const result = await Promise.all([
    sql`SELECT id FROM doctors ORDER BY RANDOM() LIMIT 1`,
    sql`SELECT "registrationNumber" FROM patients ORDER BY RANDOM() LIMIT 1`,
  ]);

  const doctor = result[0][0] as { id: number };
  const patient = result[1][0] as { registrationNumber: number };

  if (!doctor) throw Error('Table "doctors" is empty');
  if (!patient) throw Error('Table "patients" is empty');

  return {
    doctorId: String(doctor.id),
    patientRegistrationNumber: String(patient.registrationNumber),
  };
};
