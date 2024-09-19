import { Gender } from "@types";

/**
 * Фамилии
 */
export const surnames: {
  [Property in Gender.MASCULINE | Gender.FEMININE]: string;
}[] = [
  {
    [Gender.MASCULINE]: "Смирнов",
    [Gender.FEMININE]: "Смирнова",
  },
  {
    [Gender.MASCULINE]: "Иванов",
    [Gender.FEMININE]: "Иванова",
  },
  {
    [Gender.MASCULINE]: "Кузнецов",
    [Gender.FEMININE]: "Кузнецова",
  },
  {
    [Gender.MASCULINE]: "Попов",
    [Gender.FEMININE]: "Попова",
  },
  {
    [Gender.MASCULINE]: "Соколов",
    [Gender.FEMININE]: "Соколова",
  },
  {
    [Gender.MASCULINE]: "Лебедев",
    [Gender.FEMININE]: "Лебедева",
  },
  {
    [Gender.MASCULINE]: "Козлов",
    [Gender.FEMININE]: "Козлова",
  },
  {
    [Gender.MASCULINE]: "Новиков",
    [Gender.FEMININE]: "Новикова",
  },
  {
    [Gender.MASCULINE]: "Морозов",
    [Gender.FEMININE]: "Морозова",
  },
  {
    [Gender.MASCULINE]: "Петров",
    [Gender.FEMININE]: "Петрова",
  },
  {
    [Gender.MASCULINE]: "Волков",
    [Gender.FEMININE]: "Волкова",
  },
  {
    [Gender.MASCULINE]: "Соловьёв",
    [Gender.FEMININE]: "Соловьёва",
  },
  {
    [Gender.MASCULINE]: "Васильев",
    [Gender.FEMININE]: "Васильева",
  },
  {
    [Gender.MASCULINE]: "Зайцев",
    [Gender.FEMININE]: "Зайцева",
  },
  {
    [Gender.MASCULINE]: "Павлов",
    [Gender.FEMININE]: "Павлова",
  },
  {
    [Gender.MASCULINE]: "Семёнов",
    [Gender.FEMININE]: "Семёнова",
  },
  {
    [Gender.MASCULINE]: "Голубев",
    [Gender.FEMININE]: "Голубева",
  },
  {
    [Gender.MASCULINE]: "Виноградов",
    [Gender.FEMININE]: "Виноградова",
  },
  {
    [Gender.MASCULINE]: "Богданов",
    [Gender.FEMININE]: "Богданова",
  },
  {
    [Gender.MASCULINE]: "Воробьёв",
    [Gender.FEMININE]: "Воробьёва",
  },
];
