import { ISexAndGender } from "@types";
import { sexesAndGenders } from "@consts";

/**
 * Получить случайное целое число в заданном интервале
 */
export const getRandomInteger = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min)) + min;
};

/**
 * Получить случайный индекс массива
 */
export const getRandomIndex = <T>(array: T[]): number => {
  return getRandomInteger(0, array.length);
};

/**
 * Получить случайный элемент массива
 */
export const getRandomItem = <T>(array: T[]): T => {
  return array[getRandomIndex(array)];
};

/**
 * Получить случайный пол с родом
 */
export const getRandomSexAndGender = (): ISexAndGender => {
  return getRandomItem(sexesAndGenders);
};
