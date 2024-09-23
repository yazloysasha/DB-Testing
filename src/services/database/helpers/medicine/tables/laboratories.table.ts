import { Gender } from "@types";
import { TableFunction } from "@services";
import { getRandomPlaceName, getRandomAddress } from "@utils";

/**
 * Лаборатории
 */
export const laboratoriesTableFunction: TableFunction = async () => {
  return {
    name: getRandomPlaceName("лаборатория", Gender.FEMININE),
    address: getRandomAddress(),
  };
};
