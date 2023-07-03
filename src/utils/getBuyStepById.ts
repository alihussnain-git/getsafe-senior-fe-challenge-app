import { BuyingFlowStep, StepIds } from '../pages/insurance/buyFlow/types'
import { ProductIds } from './productIds'

export const getBuyStepById = (productId: ProductIds): BuyingFlowStep[] => {
  switch (productId) {
    case ProductIds.DeveloperInsurance:
      return [
        { stepId: StepIds.Email },
        { stepId: StepIds.Age, min: 12, max: 80 },
        { stepId: StepIds.Summary },
      ]
    case ProductIds.DesignerInsurance:
      return [
        { stepId: StepIds.Name },
        { stepId: StepIds.Email },
        { stepId: StepIds.Age, min: 12, max: 80 },
        { stepId: StepIds.Summary },
      ]
    // Add cases for other ProductIds as needed
    default:
      throw new Error(`Unsupported productId: ${productId}`)
  }
}
