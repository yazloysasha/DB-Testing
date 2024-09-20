import { getRandomInteger } from "./helpers";

/**
 * Получить случайное время
 */
export const getRandomTime = (): string => {
  const hour = getRandomInteger(0, 24);
  const minute = getRandomInteger(0, 60);

  return `${hour}:${minute}`;
};
