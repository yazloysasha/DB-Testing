import { Gender } from "@types";

/**
 * Имена
 */
export const names: {
  [Property in Gender.MASCULINE | Gender.FEMININE]: string;
}[] = [
  {
    [Gender.MASCULINE]: "Михаил",
    [Gender.FEMININE]: "София",
  },
  {
    [Gender.MASCULINE]: "Александр",
    [Gender.FEMININE]: "Анна",
  },
  {
    [Gender.MASCULINE]: "Максим",
    [Gender.FEMININE]: "Мария",
  },
  {
    [Gender.MASCULINE]: "Артём",
    [Gender.FEMININE]: "Ева",
  },
  {
    [Gender.MASCULINE]: "Марк",
    [Gender.FEMININE]: "Виктория",
  },
  {
    [Gender.MASCULINE]: "Лев",
    [Gender.FEMININE]: "Полина",
  },
  {
    [Gender.MASCULINE]: "Иван",
    [Gender.FEMININE]: "Алиса",
  },
  {
    [Gender.MASCULINE]: "Матвей",
    [Gender.FEMININE]: "Варвара",
  },
  {
    [Gender.MASCULINE]: "Даниил",
    [Gender.FEMININE]: "Василиса",
  },
  {
    [Gender.MASCULINE]: "Дмитрий",
    [Gender.FEMININE]: "Александра",
  },
  {
    [Gender.MASCULINE]: "Тимофей",
    [Gender.FEMININE]: "Елизавета",
  },
  {
    [Gender.MASCULINE]: "Роман",
    [Gender.FEMININE]: "Арина",
  },
  {
    [Gender.MASCULINE]: "Мирон",
    [Gender.FEMININE]: "Ксения",
  },
  {
    [Gender.MASCULINE]: "Мухаммад",
    [Gender.FEMININE]: "Екатерина",
  },
  {
    [Gender.MASCULINE]: "Кирилл",
    [Gender.FEMININE]: "Дарья",
  },
  {
    [Gender.MASCULINE]: "Егор",
    [Gender.FEMININE]: "Милана",
  },
  {
    [Gender.MASCULINE]: "Илья",
    [Gender.FEMININE]: "Анастасия",
  },
  {
    [Gender.MASCULINE]: "Алексей",
    [Gender.FEMININE]: "Мирослава",
  },
  {
    [Gender.MASCULINE]: "Константин",
    [Gender.FEMININE]: "Вероника",
  },
  {
    [Gender.MASCULINE]: "Фёдор",
    [Gender.FEMININE]: "Кира",
  },
];
