import { getRandomItem } from "@utils";
import { complications } from "@consts";

/**
 * Получить случайное осложнение
 */
export const getRandomComplication = (): string => {
  const complication = getRandomItem(complications);

  return complication;
};
