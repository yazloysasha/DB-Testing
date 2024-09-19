import { shifts } from "@consts";
import { getRandomItem } from "./helpers";

/**
 * Получить случайную смену
 */
export const getRandomShift = (): string => {
  const shift = getRandomItem(shifts);

  return shift;
};
