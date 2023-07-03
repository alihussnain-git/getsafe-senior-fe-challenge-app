import { getBuyStepById } from '../utils/getBuyStepById'
import { ProductIds } from '../utils/productIds'
import { StepIds } from '../pages/insurance/buyFlow/types'

describe('getBuyStepById', () => {
  test('returns correct steps for DeveloperInsurance', () => {
    const productId = ProductIds.DeveloperInsurance
    const steps = getBuyStepById(productId)

    expect(steps).toEqual([
      { stepId: StepIds.Email },
      { stepId: StepIds.Age, min: 12, max: 80 },
      { stepId: StepIds.Summary },
    ])
  })

  test('returns correct steps for DesignerInsurance', () => {
    const productId = ProductIds.DesignerInsurance
    const steps = getBuyStepById(productId)

    expect(steps).toEqual([
      { stepId: StepIds.Name },
      { stepId: StepIds.Email },
      { stepId: StepIds.Age, min: 12, max: 80 },
      { stepId: StepIds.Summary },
    ])
  })

  test('throws an error for unsupported productId', () => {
    const unsupportedProductId = 'invalidProductId'

    expect(() => {
      getBuyStepById(unsupportedProductId as ProductIds)
    }).toThrowError('Unsupported productId: invalidProductId')
  })
})
