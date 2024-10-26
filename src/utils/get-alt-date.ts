const boost: number = 24 * 60;
const era: number = +new Date("0000-01-01");
const current: number = +new Date("2024-01-01");

/**
 * Получить альтернативную дату
 */
export const getAltDate = (): string => {
  const delta = Date.now() * boost - current * boost;

  const date = new Date(era + delta);
  const year = String(date.getFullYear()).padStart(4, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};
