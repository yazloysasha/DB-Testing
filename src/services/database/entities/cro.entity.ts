import { appConfig } from "@main";
import {
  actsTableFunction,
  staffTableFunction,
  peopleTableFunction,
  officesTableFunction,
  citizensTableFunction,
  applicationsTableFunction,
  getYoungPersonQueryFunction,
  birthApplicationsTableFunction,
  deathApplicationsTableFunction,
  rejectApplicationQueryFunction,
  getFullNameByDateQueryFunction,
  satisfyApplicationQueryFunction,
  getAllGrandparentsQueryFunction,
  divorceApplicationsTableFunction,
  supportingDocumentsTableFunction,
  marriageApplicationsTableFunction,
  adoptionApplicationsTableFunction,
  filiationApplicationsTableFunction,
  getPopularApplicationQueryFunction,
  nameChangeApplicationsTableFunction,
  citizensAndApplicationsTableFunction,
} from "@services/database/helpers/cro";
import { IDatabase } from "@services/database";

export const cro: IDatabase = {
  name: "cro",
  url: appConfig.CRO_DATABASE_URL as string,
  tables: {
    offices: officesTableFunction,
    people: peopleTableFunction,
    citizens: citizensTableFunction,
    staff: staffTableFunction,
    applications: applicationsTableFunction,
    birthApplications: birthApplicationsTableFunction,
    marriageApplications: marriageApplicationsTableFunction,
    divorceApplications: divorceApplicationsTableFunction,
    nameChangeApplications: nameChangeApplicationsTableFunction,
    filiationApplications: filiationApplicationsTableFunction,
    adoptionApplications: adoptionApplicationsTableFunction,
    deathApplications: deathApplicationsTableFunction,
    citizensAndApplications: citizensAndApplicationsTableFunction,
    supportingDocuments: supportingDocumentsTableFunction,
    acts: actsTableFunction,
  },
  queries: {
    0: {
      description: "Отклонить случайное заявление",
      query: rejectApplicationQueryFunction,
    },
    1: {
      description: "Удовлетворить случайное заявление",
      query: satisfyApplicationQueryFunction,
    },
    2: {
      description: "Получить ФИО человека в указанную дату",
      query: getFullNameByDateQueryFunction,
    },
    3: {
      description: "Получить всех бабушек и дедушек человека",
      query: getAllGrandparentsQueryFunction,
    },
    4: {
      description: "Получить самого молодого человека",
      query: getYoungPersonQueryFunction,
    },
    5: {
      description: "Получить самое популярное заявление за указанный период",
      query: getPopularApplicationQueryFunction,
    },
  },
};
