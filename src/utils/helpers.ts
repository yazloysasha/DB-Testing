import { Gender, ISexAndGender, Sex } from "@types";
import {
  altTimeStartDate,
  names,
  patronymics,
  realTimeStartDate,
  sexesAndGenders,
  surnames,
  timeSpeedModifier,
} from "@consts";

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
 * Получить альтернативную дату
 */
export const getAltDate = (realDate: Date): Date => {
  const delta =
    +realDate * timeSpeedModifier - +realTimeStartDate * timeSpeedModifier;

  return new Date(+altTimeStartDate + delta);
};

/**
 * Получить случайный пол с родом
 */
export const getRandomSexAndGender = (): ISexAndGender => {
  return getRandomItem(sexesAndGenders);
};

/**
 * Получить род по полу
 */
export const getSexByGender = (
  gender: Gender.MASCULINE | Gender.FEMININE
): Sex => {
  const sexAndGender = sexesAndGenders.find(
    (sexAndGender) => gender === sexAndGender.gender
  );

  return sexAndGender.sex;
};

/**
 * Получить пол по роду
 */
export const getGenderBySex = (
  sex: Sex
): Gender.MASCULINE | Gender.FEMININE => {
  const sexAndGender = sexesAndGenders.find(
    (sexAndGender) => sex === sexAndGender.sex
  );

  return sexAndGender.gender;
};

/**
 * Получить информацию о фамилии
 */
export const getSurnameData = (
  surname: string,
  gender: Gender.MASCULINE | Gender.FEMININE
) => {
  return surnames.find((surnameData) => surname === surnameData[gender]);
};

/**
 * Получить ифнормацию об отчестве
 */
export const getPatronymicData = (name: string) => {
  return patronymics[
    names.findIndex((nameData) => name === nameData[Gender.MASCULINE])
  ];
};
