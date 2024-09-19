import { getRandomInteger } from "./helpers";

/**
 * Получить случайное число для БД
 */
export const getRandomNumber = (min: number, max: number): string => {
  return String(getRandomInteger(min, max));
};
