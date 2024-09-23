import { warnings } from "@consts";
import { getRandomItem } from "@utils";

/**
 * Получить случайное предупреждение
 */
export const getRandomWarning = (): string => {
  const warning = getRandomItem(warnings);

  return warning;
};
