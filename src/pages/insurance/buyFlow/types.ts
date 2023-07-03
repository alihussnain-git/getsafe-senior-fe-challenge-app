export interface AgeStepData {
  age?: number;
}

export interface EmailStepData {
  email?: string;
}

export type BuyingFlowData = AgeStepData & EmailStepData

export enum StepIds {
  Email = 'email',
  Age = 'age',
  Summary = 'summary',
}

export type BuyingFlowStep = BuyingFlowAgeStep | BuyingFlowEmailStep | SummaryStep

export interface BuyingFlowAgeStep {
  stepId: StepIds.Age;
}

export interface BuyingFlowEmailStep {
  stepId: StepIds.Email;
}

export interface SummaryStep {
  stepId: StepIds.Summary;
}
