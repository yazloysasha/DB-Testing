import { Gender } from "@types";

/**
 * Отчества
 */
export const patronymics: {
  [Property in Gender.MASCULINE | Gender.FEMININE]: string;
}[] = [
  {
    [Gender.MASCULINE]: "Михайлович",
    [Gender.FEMININE]: "Михайловна",
  },
  {
    [Gender.MASCULINE]: "Александрович",
    [Gender.FEMININE]: "Александровна",
  },
  {
    [Gender.MASCULINE]: "Максимович",
    [Gender.FEMININE]: "Максимовна",
  },
  {
    [Gender.MASCULINE]: "Артёмович",
    [Gender.FEMININE]: "Артёмовна",
  },
  {
    [Gender.MASCULINE]: "Маркович",
    [Gender.FEMININE]: "Марковна",
  },
  {
    [Gender.MASCULINE]: "Львович",
    [Gender.FEMININE]: "Львовна",
  },
  {
    [Gender.MASCULINE]: "Иванович",
    [Gender.FEMININE]: "Ивановна",
  },
  {
    [Gender.MASCULINE]: "Матвеевич",
    [Gender.FEMININE]: "Матвеевна",
  },
  {
    [Gender.MASCULINE]: "Даниилович",
    [Gender.FEMININE]: "Данииловна",
  },
  {
    [Gender.MASCULINE]: "Дмитриевич",
    [Gender.FEMININE]: "Дмитриевна",
  },
  {
    [Gender.MASCULINE]: "Тимофеевич",
    [Gender.FEMININE]: "Тимофеевна",
  },
  {
    [Gender.MASCULINE]: "Романович",
    [Gender.FEMININE]: "Романовна",
  },
  {
    [Gender.MASCULINE]: "Миронович",
    [Gender.FEMININE]: "Мироновна",
  },
  {
    [Gender.MASCULINE]: "Мухаммадович",
    [Gender.FEMININE]: "Мухаммадовна",
  },
  {
    [Gender.MASCULINE]: "Кириллович",
    [Gender.FEMININE]: "Кирилловна",
  },
  {
    [Gender.MASCULINE]: "Егорович",
    [Gender.FEMININE]: "Егоровна",
  },
  {
    [Gender.MASCULINE]: "Ильич",
    [Gender.FEMININE]: "Ильинична",
  },
  {
    [Gender.MASCULINE]: "Алексеевич",
    [Gender.FEMININE]: "Алексеевна",
  },
  {
    [Gender.MASCULINE]: "Константинович",
    [Gender.FEMININE]: "Константиновна",
  },
  {
    [Gender.MASCULINE]: "Фёдорович",
    [Gender.FEMININE]: "Фёдоровна",
  },
];
