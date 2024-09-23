import {
  getRandomNumber,
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
    registrationNumber: getRandomNumber(0, 1000),
    surname: getRandomSurname(sexAndGender.gender),
    address: getRandomAddress(),
    birthday: getRandomBirthday(),
    sex: sexAndGender.sex,
    medicalPolicyNumber: getRandomNumber(0, 1000),
  };
};
