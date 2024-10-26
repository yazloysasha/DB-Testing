import { cities, streets } from "@consts";
import { getRandomInteger, getRandomItem } from "./helpers";

/**
 * Получить случайный адрес
 */
export const getRandomAddress = (): string => {
  const city = getRandomItem(cities);
  const street = getRandomItem(streets);
  const number = getRandomInteger(1, 101);

  return `г. ${city}, ул. ${street}, д. ${number}`;
};
