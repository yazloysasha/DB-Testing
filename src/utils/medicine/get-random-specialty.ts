import { specialties } from "@consts";
import { getRandomItem } from "@utils";

/**
 * Получить случайную специальность
 */
export const getRandomSpecialty = (): string => {
  const specialty = getRandomItem(specialties);

  return specialty;
};
