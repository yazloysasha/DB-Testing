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
  satisfyApplicationQueryFunction,
  divorceApplicationsTableFunction,
  supportingDocumentsTableFunction,
  marriageApplicationsTableFunction,
  adoptionApplicationsTableFunction,
  filiationApplicationsTableFunction,
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
  },
};
