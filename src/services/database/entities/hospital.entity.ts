import { appConfig } from "@main";
import {
  wardsTableFunction,
  staffTableFunction,
  testsTableFunction,
  doctorsTableFunction,
  patientsTableFunction,
  hospitalsTableFunction,
  diagnosesTableFunction,
  placementsTableFunction,
  laboratoriesTableFunction,
  getAllHospitalsQueryFunction,
  deleteFirstWardQueryFunction,
  doctorsAndPatientsTableFunction,
  decreaseCountOfBedsQueryFunction,
  hospitalsPhoneNumbersTableFunction,
  hospitalsAndLaboratoriesTableFunction,
  laboratoriesPhoneNumbersTableFunction,
} from "@services/database/helpers";
import { IDatabase } from "@services/database";

export const hospital: IDatabase = {
  name: "hospital",
  url: appConfig.MEDICINE_DATABASE_URL as string,
  tables: {
    hospitals: hospitalsTableFunction,
    wards: wardsTableFunction,
    staff: staffTableFunction,
    doctors: doctorsTableFunction,
    patients: patientsTableFunction,
    diagnoses: diagnosesTableFunction,
    laboratories: laboratoriesTableFunction,
    tests: testsTableFunction,
    hospitalsAndLaboratories: hospitalsAndLaboratoriesTableFunction,
    doctorsAndPatients: doctorsAndPatientsTableFunction,
    placements: placementsTableFunction,
    hospitalsPhoneNumbers: hospitalsPhoneNumbersTableFunction,
    laboratoriesPhoneNumbers: laboratoriesPhoneNumbersTableFunction,
  },
  queries: {
    0: {
      description: "Получить все больницы",
      query: getAllHospitalsQueryFunction,
    },
    1: {
      description: "Удалить первую палату",
      query: deleteFirstWardQueryFunction,
    },
    2: {
      description: "Уменьшить количество кроватей в первой палате на 1",
      query: decreaseCountOfBedsQueryFunction,
    },
  },
};
