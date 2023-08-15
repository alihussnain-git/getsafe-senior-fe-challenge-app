export interface ParentNameStepData {
  parentFirstName?: string
  parentLastName?: string
}

export interface AgeStepData {
  age?: number
}

export interface EmailStepData {
  email?: string
}

export interface NameStepData {
  firstName?: string
  lastName?: string
}

export type BuyingFlowData = AgeStepData &
  EmailStepData &
  NameStepData &
  ParentNameStepData

export enum StepIds {
  Name = 'name',
  Email = 'email',
  Age = 'age',
  Summary = 'summary',
  ParentName = 'parentName',
}

export interface BuyingFlowStep {
  stepId: StepIds
  condition?: (data: BuyingFlowData) => boolean
}


export interface BuyingFlowAgeStep {
  stepId: StepIds.Age
  min?: number
  max?: number
}

export interface BuyingFlowEmailStep {
  stepId: StepIds.Email
}

export interface BuyingFlowNameStep {
  stepId: StepIds.Name
}

export interface ParentNameStep {
  stepId: StepIds.ParentName
}

export interface SummaryStep {
  stepId: StepIds.Summary
}



export interface BaseStep {
  onPre?: () => void
  onNext(data: BuyingFlowData): void
}
