import { timeSpeedModifier } from "@consts";
import { getAltDate, getRandomInteger } from "./helpers";

const altYear = (1000 * 60 * 60 * 24 * 365) / timeSpeedModifier;

/**
 * Получить случайную альтернативную дату
 */
export const getRandomAltDate = (
  mode: "past" | "now" | "future",
  isRandom = true,
  years: number = 0
): string => {
  let time = Date.now();
  const delta = altYear * years;

  switch (mode) {
    case "past":
      time -= isRandom ? getRandomInteger(0, delta) : delta;
      break;

    case "future":
      time += isRandom ? getRandomInteger(0, delta) : delta;
      break;
  }

  const date = getAltDate(new Date(time));
  const year = String(date.getFullYear()).padStart(4, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};
