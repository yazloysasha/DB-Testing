import { getRandomItem } from "@utils";
import { statusesOfAnalysis } from "@consts";

/**
 * Получить случайный статус анализа
 */
export const getRandomAnalysisStatus = (): string => {
  const analysisStatus = getRandomItem(statusesOfAnalysis);

  return analysisStatus;
};
