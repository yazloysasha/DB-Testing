import { Gender } from "@types";
import { colors } from "@consts";
import { getRandomItem } from "./helpers";

/**
 * Получить случайное название места
 */
export const getRandomPlaceName = (place: string, gender: Gender): string => {
  const color = getRandomItem(colors);
  const adjective = color[gender];

  return `${adjective} ${place}`;
};
