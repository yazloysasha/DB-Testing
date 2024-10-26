import { getRandomItem } from "@utils";
import { applicationTypes } from "@consts";

/**
 * Получить случайный тип заявления
 */
export const getRandomApplicationType = (): string => {
  const applicationType = getRandomItem(applicationTypes);

  return applicationType;
};
