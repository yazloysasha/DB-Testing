import {
  getRandomJob,
  getRandomShift,
  getRandomNumber,
  getRandomAddress,
  getRandomSurname,
  getRandomBirthday,
  getRandomPlaceName,
  getRandomSpecialty,
  getRandomPhoneNumber,
  getRandomSexAndGender,
  getRandomDiagnosisType,
} from "@utils";
import { Gender } from "@types";
import { appConfig } from "@main";
import { IDatabase } from "@services";

export const hospital: IDatabase = {
  name: "hospital",
  url: appConfig.MEDICINE_DATABASE_URL as string,
  tables: {
    hospitals: async () => {
      return {
        name: getRandomPlaceName("больница", Gender.FEMININE),
        address: getRandomAddress(),
      };
    },

    wards: async (sql) => {
      // Получить случайную больницу
      const [hospital]: [{ id: number }] =
        await sql`SELECT id FROM hospitals ORDER BY RANDOM() LIMIT 1`;

      if (!hospital) throw Error('Table "hospitals" is empty');

      return {
        hospitalId: String(hospital.id),
        number: getRandomNumber(0, 10),
        name: getRandomPlaceName("палата", Gender.FEMININE),
        countOfBeds: getRandomNumber(0, 10),
      };
    },

    staff: async (sql) => {
      // Получить случайную палату
      const [ward]: [{ hospitalId: number; number: number }] =
        await sql`SELECT "hospitalId", number FROM wards ORDER BY RANDOM() LIMIT 1`;

      if (!ward) throw Error('Table "wards" is empty');

      const sexAndGender = getRandomSexAndGender();

      return {
        hospitalId: String(ward.hospitalId),
        wardNumber: String(ward.number),
        surname: getRandomSurname(sexAndGender.gender),
        job: getRandomJob(),
        shift: getRandomShift(),
        salary: getRandomNumber(0, 20000),
      };
    },

    doctors: async (sql) => {
      // Получить случайную больницу
      const [hospital]: [{ id: number }] =
        await sql`SELECT id FROM hospitals ORDER BY RANDOM() LIMIT 1`;

      if (!hospital) throw Error('Table "hospitals" is empty');

      const sexAndGender = getRandomSexAndGender();

      return {
        hospitalId: String(hospital.id),
        surname: getRandomSurname(sexAndGender.gender),
        specialty: getRandomSpecialty(),
      };
    },

    patients: async () => {
      const sexAndGender = getRandomSexAndGender();

      return {
        registrationNumber: getRandomNumber(0, 1000),
        surname: getRandomSurname(sexAndGender.gender),
        address: getRandomAddress(),
        birthday: getRandomBirthday(),
        sex: sexAndGender.sex,
        medicalPolicyNumber: getRandomNumber(0, 1000),
      };
    },

    diagnoses: async (sql) => {
      // Получить случайного пациента
      const [patient]: [{ registrationNumber: number }] =
        await sql`SELECT "registrationNumber" FROM patients ORDER BY RANDOM() LIMIT 1`;

      if (!patient) throw Error('Table "patients" is empty');

      return {
        patientRegistrationNumber: String(patient.registrationNumber),
        type: getRandomDiagnosisType(),
        complications: "TODO",
        warning: "TODO",
      };
    },

    laboratories: async () => {
      return {
        name: getRandomPlaceName("лаборатория", Gender.FEMININE),
        address: getRandomAddress(),
      };
    },

    tests: async (sql) => {
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
        type: "TODO",
        appointedDate: "TODO",
        appointedTime: "TODO",
        referralNumber: getRandomNumber(0, 1000),
        status: "TODO",
      };
    },

    hospitalsAndLaboratories: async (sql) => {
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
    },

    doctorsAndPatients: async (sql) => {
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
    },

    placements: async (sql) => {
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
        bedNumber: getRandomNumber(0, 20),
        patientRegistrationNumber: String(patient.registrationNumber),
      };
    },

    hospitalsPhoneNumbers: async (sql) => {
      // Получить случайную больницу
      const [hospital]: [{ id: number }] =
        await sql`SELECT id FROM hospitals ORDER BY RANDOM() LIMIT 1`;

      if (!hospital) throw Error('Table "hospitals" is empty');

      return {
        hospitalId: String(hospital.id),
        phoneNumber: getRandomPhoneNumber(),
      };
    },

    laboratoriesPhoneNumbers: async (sql) => {
      // Получить случайную лабораторию
      const [laboratory]: [{ id: number }] =
        await sql`SELECT id FROM laboratories ORDER BY RANDOM() LIMIT 1`;

      if (!laboratory) throw Error('Table "laboratories" is empty');

      return {
        laboratoryId: String(laboratory.id),
        phoneNumber: getRandomPhoneNumber(),
      };
    },
  },
  queries: {
    0: {
      description: "Получить все больницы",
      query: async (sql) => {
        return sql`SELECT * FROM hospitals`;
      },
    },

    1: {
      description: "Удалить первую палату",
      query: async (sql) => {
        // Получить первую палату
        const [ward]: [{ hospitalId: number; number: number }] =
          await sql`SELECT "hospitalId", number FROM wards LIMIT 1`;

        if (!ward) throw Error('Table "wards" is empty');

        return sql`
          DELETE FROM wards WHERE "hospitalId" = ${ward.hospitalId} AND number = ${ward.number}
          RETURNING *
        `;
      },
    },

    2: {
      description: "Уменьшить количество кроватей в первой палате на 1",
      query: async (sql) => {
        // Получить первую палату
        const [ward]: [{ hospitalId: number; number: number }] =
          await sql`SELECT "hospitalId", number FROM wards LIMIT 1`;

        if (!ward) throw Error('Table "wards" is empty');

        return sql`
          UPDATE wards
            SET "countOfBeds" = "countOfBeds" - 1
            WHERE "hospitalId" = ${ward.hospitalId} AND number = ${ward.number}
          RETURNING *
        `;
      },
    },
  },
};
