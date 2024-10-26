import { getRandomInteger } from "./helpers";

/**
 * Получить случайный день рождения
 */
export const getRandomBirthday = (): string => {
  const year = String(getRandomInteger(1800, 2021)).padStart(4, "0");
  const month = String(getRandomInteger(1, 13)).padStart(4, "0");
  const day = String(getRandomInteger(1, 32)).padStart(4, "0");

  return `${year}-${month}-${day}`;
};
