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
  const year = String(date.getFullYear()).padStart(4, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};
