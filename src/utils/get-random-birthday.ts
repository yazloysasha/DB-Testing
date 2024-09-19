import { getRandomInteger } from "./helpers";

export const getRandomBirthday = (): string => {
  const year = getRandomInteger(1800, 2021);
  const month = getRandomInteger(0, 12);
  const day = getRandomInteger(0, 31);

  return `${year}-${month}-${day}`;
};
