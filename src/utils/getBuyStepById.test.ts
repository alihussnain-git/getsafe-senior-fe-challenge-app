import { getBuyStepById } from '../utils/getBuyStepById'
import { ProductIds } from '../utils/productIds'
import { StepIds } from '../pages/insurance/buyFlow/types'

describe('getBuyStepById', () => {
  test('returns correct steps for DeveloperInsurance', () => {
    const productId = ProductIds.DeveloperInsurance
    const steps = getBuyStepById(productId)

    expect(steps).toEqual([
      { stepId: StepIds.Age, min: 12, max: 80 },
      { stepId: StepIds.ParentName, condition: expect.any(Function) },
      { stepId: StepIds.Email },
      { stepId: StepIds.Summary },
    ])
  })

  test('returns correct steps for DesignerInsurance', () => {
    const productId = ProductIds.DesignerInsurance
    const steps = getBuyStepById(productId)

    expect(steps).toEqual([
      { stepId: StepIds.Age, min: 12, max: 80 },
      { stepId: StepIds.Email, condition: expect.any(Function) },
      { stepId: StepIds.ParentName, condition: expect.any(Function) },
      { stepId: StepIds.Name },
      { stepId: StepIds.Summary },
    ])
  })
})
