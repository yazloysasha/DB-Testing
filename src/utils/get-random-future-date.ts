import { getRandomInteger } from "./helpers";

/**
 * Получить случайную дату из будущего
 */
export const getRandomFutureDate = (): string => {
  const delta = getRandomInteger(
    24 * 60 * 60 * 1000,
    365 * 24 * 60 * 60 * 1000
  );

  const date = new Date(Date.now() + delta);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}-${month}-${day}`;
};
