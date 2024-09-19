import { Gender } from "@types";
import { surnames } from "@consts";
import { getRandomItem } from "./helpers";

/**
 * Получить случайную фамилию
 */
export const getRandomSurname = (
  gender: Gender.MASCULINE | Gender.FEMININE
): string => {
  const surname = getRandomItem(surnames);
  const word = surname[gender];

  return word;
};
