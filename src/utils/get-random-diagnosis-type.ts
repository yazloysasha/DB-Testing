import { getRandomItem } from "./helpers";
import { typesOfDiagnoses } from "@consts";

/**
 * Получить случайный тип диагноза
 */
export const getRandomDiagnosisType = (): string => {
  const diagnosisType = getRandomItem(typesOfDiagnoses);

  return diagnosisType;
};
