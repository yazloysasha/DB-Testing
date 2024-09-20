import { getRandomInteger } from "./helpers";

export const getRandomBirthday = (): string => {
  const year = getRandomInteger(1800, 2021);
  const month = getRandomInteger(1, 13);
  const day = getRandomInteger(1, 32);

  return `${year}-${month}-${day}`;
};
