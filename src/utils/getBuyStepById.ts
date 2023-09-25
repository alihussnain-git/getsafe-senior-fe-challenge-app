import {
  BuyingFlowAgeStep,
  BuyingFlowStep,
  StepIds,
} from '../pages/insurance/buyFlow/types'
import { ProductIds } from './productIds'

const stepMapping: Record<ProductIds, BuyingFlowStep[]> = {
  [ProductIds.DeveloperInsurance]: [
    { stepId: StepIds.Age, min: 12, max: 80 } as BuyingFlowAgeStep,
    {
      stepId: StepIds.ParentName,
      condition: (data) => !!data.age && data.age < 18,
    },
    {
      stepId: StepIds.Email,
    },
    { stepId: StepIds.Summary },
  ],
  [ProductIds.DesignerInsurance]: [
    { stepId: StepIds.Age, min: 12, max: 80 } as BuyingFlowAgeStep,
    {
      stepId: StepIds.Email,
      condition: (data) => !!data.age && data.age >= 18,
    },
    {
      stepId: StepIds.ParentName,
      condition: (data) => !!data.age && data.age < 18,
    },
    {
      stepId: StepIds.Name,
    },
    { stepId: StepIds.Summary },
  ],
}

export const getBuyStepById = (productId: ProductIds): BuyingFlowStep[] =>
  stepMapping[productId]
