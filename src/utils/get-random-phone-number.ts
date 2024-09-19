import { getRandomInteger } from "./helpers";

/**
 * Получить случайный номер телефона
 */
export const getRandomPhoneNumber = (): string => {
  let phoneNumber = "7";

  while (phoneNumber.length < 11) {
    phoneNumber += getRandomInteger(0, 10);
  }

  return phoneNumber;
};
