import { Gender } from "@types";

/**
 * Цвета
 */
export const colors: { [Property in Gender]: string }[] = [
  {
    [Gender.MASCULINE]: "Красный",
    [Gender.FEMININE]: "Красная",
    [Gender.NEUTER]: "Красное",
  },
  {
    [Gender.MASCULINE]: "Оранжевый",
    [Gender.FEMININE]: "Оранжевая",
    [Gender.NEUTER]: "Оранжевое",
  },
  {
    [Gender.MASCULINE]: "Жёлтый",
    [Gender.FEMININE]: "Жёлтая",
    [Gender.NEUTER]: "Жёлтое",
  },
  {
    [Gender.MASCULINE]: "Зелёный",
    [Gender.FEMININE]: "Зелёная",
    [Gender.NEUTER]: "Зелёное",
  },
  {
    [Gender.MASCULINE]: "Голубой",
    [Gender.FEMININE]: "Голубая",
    [Gender.NEUTER]: "Голубое",
  },
  {
    [Gender.MASCULINE]: "Синий",
    [Gender.FEMININE]: "Синяя",
    [Gender.NEUTER]: "Синее",
  },
  {
    [Gender.MASCULINE]: "Фиолетовый",
    [Gender.FEMININE]: "Фиолетовая",
    [Gender.NEUTER]: "Фиолетовое",
  },
];
