import { cities, streets } from "@consts";
import { getRandomItem } from "./helpers";
import { getRandomNumber } from "./get-random-number";

/**
 * Получить случайный адрес для БД
 */
export const getRandomAddress = (): string => {
  const city = getRandomItem(cities);
  const street = getRandomItem(streets);
  const number = getRandomNumber(1, 101);

  return `г. ${city}, ул. ${street}, д. ${number}`;
};
