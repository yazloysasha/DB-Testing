import { specialties } from "@consts";
import { getRandomItem } from "./helpers";

/**
 * Получить случайную специальность
 */
export const getRandomSpecialty = (): string => {
  const specialty = getRandomItem(specialties);

  return specialty;
};
