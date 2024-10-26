import { Gender } from "@types";
import { TableFunction } from "@services";
import { getRandomAddress, getRandomPlaceName } from "@utils";

/**
 * Отделения
 */
export const officesTableFunction: TableFunction = async () => {
  return {
    name: getRandomPlaceName("отделение", Gender.NEUTER),
    address: getRandomAddress(),
  };
};
