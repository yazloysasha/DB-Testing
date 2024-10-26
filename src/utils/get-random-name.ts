import { Gender } from "@types";
import { names } from "@consts";
import { getRandomItem } from "./helpers";

/**
 * Получить случайное имя
 */
export const getRandomName = (
  gender: Gender.MASCULINE | Gender.FEMININE
): string => {
  const name = getRandomItem(names);
  const word = name[gender];

  return word;
};
