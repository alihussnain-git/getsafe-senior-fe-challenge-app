
export interface AgeStepData {
  age?: number;
}

export interface EmailStepData {
  email?: string;
}

export interface NameStepData {
  firstName?: string;
  lastName?: string;
}

export type BuyingFlowData = AgeStepData & EmailStepData & NameStepData

export enum StepIds {
  Name = 'name',
  Email = 'email',
  Age = 'age',
  Summary = 'summary',
}

export type BuyingFlowStep =
  | BuyingFlowAgeStep
  | BuyingFlowEmailStep
  | SummaryStep
  | BuyingFlowNameStep

export interface BuyingFlowAgeStep {
  stepId: StepIds.Age;
  min?: number;
  max?: number;
}

export interface BuyingFlowEmailStep {
  stepId: StepIds.Email;
}

export interface BuyingFlowNameStep {
  stepId: StepIds.Name;
}

export interface SummaryStep {
  stepId: StepIds.Summary;
}

export interface PreviousStep {
  onPre?: () => void;
}