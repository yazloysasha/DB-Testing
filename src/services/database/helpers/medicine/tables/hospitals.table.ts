import { Gender } from "@types";
import { TableFunction } from "@services";
import { getRandomAddress, getRandomPlaceName } from "@utils";

/**
 * Больницы
 */
export const hospitalsTableFunction: TableFunction = async () => {
  return {
    name: getRandomPlaceName("больница", Gender.FEMININE),
    address: getRandomAddress(),
  };
};
