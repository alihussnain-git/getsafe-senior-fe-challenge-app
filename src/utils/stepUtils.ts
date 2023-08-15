import {
  BuyingFlowData,
  BuyingFlowStep,
} from '../pages/insurance/buyFlow/types'
import { getBuyStepById } from './getBuyStepById'
import { ProductIds } from './productIds'

export const getNextStepIndex = (
  currentStepIndex: number,
  productId: ProductIds,
  collectedData: BuyingFlowData
): number => {
  const stepConfig = getBuyStepById(productId)
  const nextIndex = currentStepIndex + 1

  if (nextIndex >= stepConfig.length) {
    return nextIndex - 1 // Stay on the last step
  }

  const nextStep = stepConfig[nextIndex]
  const { condition } = nextStep

  if (condition && !condition(collectedData)) {
    return nextIndex + 1 // Skip the next step if condition is not met
  }

  return nextIndex
}

export function findPreviousStepWithCondition(
  steps: BuyingFlowStep[],
  currentIndex: number,
  collectedData: BuyingFlowData
): number {
  for (let i = currentIndex - 1; i >= 0; i--) {
    const step = steps[i]
    if (!step.condition || step.condition(collectedData)) {
      return i
    }
  }
  return currentIndex - 1
}
