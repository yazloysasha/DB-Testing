export interface IAppConfig {
  MEDICINE_DATABASE_URL?: string;
  CRO_DATABASE_URL?: string;
}

export enum CommandName {
  FILL_TABLE = "fill",
  TEST_QUERY = "test",
  RUN_QUERY = "run",
}

export interface ICommandArgument {
  name: string;
  required: boolean;
  type: "string" | "number";
}

export interface ICommandContractItem {
  name: CommandName;
  args: ICommandArgument[];
}

export enum Gender {
  MASCULINE = "masculine",
  FEMININE = "feminine",
  NEUTER = "neuter",
}

export enum Sex {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

export enum Job {
  NURSE = "NURSE",
  NANNY = "NANNY",
  CAREGIVER = "CAREGIVER",
  ORDERLY = "ORDERLY",
}

export enum Shift {
  MORNING = "MORNING",
  EVENING = "EVENING",
  NIGHT = "NIGHT",
}

export enum ApplicationType {
  BIRTH = "BIRTH",
  MARRIAGE = "MARRIAGE",
  DIVORCE = "DIVORCE",
  NAME_CHANGE = "NAME_CHANGE",
  FILIATION = "FILIATION",
  ADOPTION = "ADOPTION",
  DEATH = "DEATH",
}

export enum ApplicationStatus {
  WAITING = "WAITING",
  REJECTED = "REJECTED",
  SATISFIED = "SATISFIED",
}

export interface ISexAndGender {
  sex: Sex;
  gender: Gender.MASCULINE | Gender.FEMININE;
}
