import { TableFunction } from "@services";
import { getRandomSexAndGender } from "@utils";

/**
 * Люди
 */
export const peopleTableFunction: TableFunction = async () => {
  const sexAndGender = getRandomSexAndGender();

  return {
    sex: sexAndGender.sex,
  };
};
