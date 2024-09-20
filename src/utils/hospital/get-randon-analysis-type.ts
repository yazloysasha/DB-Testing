import { getRandomItem } from "@utils";
import { typesOfAnalysis } from "@consts";

/**
 * Получить случайный тип анализа
 */
export const getRandomAnalysisType = (): string => {
  const analysisType = getRandomItem(typesOfAnalysis);

  return analysisType;
};
