import {
  getRandomInteger,
  getRandomAddress,
  getRandomSurname,
  getRandomBirthday,
  getRandomSexAndGender,
} from "@utils";
import { TableFunction } from "@services";

/**
 * Пациенты
 */
export const patientsTableFunction: TableFunction = async () => {
  const sexAndGender = getRandomSexAndGender();

  return {
    registrationNumber: String(getRandomInteger(0, 1000)),
    surname: getRandomSurname(sexAndGender.gender),
    address: getRandomAddress(),
    birthday: getRandomBirthday(),
    sex: sexAndGender.sex,
    medicalPolicyNumber: String(getRandomInteger(0, 1000)),
  };
};
