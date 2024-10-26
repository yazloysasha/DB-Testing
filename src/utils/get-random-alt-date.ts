import { timeSpeedModifier } from "@consts";
import { getAltDate, getRandomInteger } from "./helpers";

/**
 * Получить случайную альтернативную дату
 */
export const getRandomAltDate = (mode: "past" | "now" | "future"): string => {
  let time = Date.now();

  switch (mode) {
    case "past":
      time -= getRandomInteger(0, timeSpeedModifier * 365 * 10);
      break;

    case "future":
      time += getRandomInteger(0, timeSpeedModifier * 365 * 10);
      break;
  }

  const date = getAltDate(new Date(time));
  const year = String(date.getFullYear()).padStart(4, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};
