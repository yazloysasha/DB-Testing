import { Gender } from "@types";
import { patronymics } from "@consts";
import { getRandomItem } from "./helpers";

/**
 * Получить случайное отчество
 */
export const getRandomPatronymic = (
  gender: Gender.MASCULINE | Gender.FEMININE
): string => {
  const name = getRandomItem(patronymics);
  const word = name[gender];

  return word;
};
