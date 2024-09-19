import { jobs } from "@consts";
import { getRandomItem } from "./helpers";

/**
 * Получить случайную профессию
 */
export const getRandomJob = (): string => {
  const job = getRandomItem(jobs);

  return job;
};
