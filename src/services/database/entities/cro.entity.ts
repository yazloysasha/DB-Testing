import { appConfig } from "@main";
import {
  actsTableFunction,
  staffTableFunction,
  peopleTableFunction,
  officesTableFunction,
  citizensTableFunction,
  applicationsTableFunction,
  birthApplicationsTableFunction,
  deathApplicationsTableFunction,
  rejectApplicationQueryFunction,
  getFullNameByDateQueryFunction,
  getYoungestPersonQueryFunction,
  satisfyApplicationQueryFunction,
  getAllGrandparentsQueryFunction,
  getLongestMarriageQueryFunction,
  divorceApplicationsTableFunction,
  supportingDocumentsTableFunction,
  marriageApplicationsTableFunction,
  adoptionApplicationsTableFunction,
  filiationApplicationsTableFunction,
  nameChangeApplicationsTableFunction,
  citizensAndApplicationsTableFunction,
  getMostPopularApplicationQueryFunction,
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
      description: "Получить всех биологических бабушек и дедушек человека",
      query: getAllGrandparentsQueryFunction,
    },
    4: {
      description: "Получить самого молодого человека",
      query: getYoungestPersonQueryFunction,
    },
    5: {
      description: "Получить самое популярное заявление за указанный период",
      query: getMostPopularApplicationQueryFunction,
    },
    6: {
      description: "Получить супругов самого длительного брака за всё время",
      query: getLongestMarriageQueryFunction,
    },
  },
};
