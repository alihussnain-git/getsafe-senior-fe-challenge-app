import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../../routes/routes'
import { getBuyStepById } from '../../../utils/getBuyStepById'
import { ProductIds } from '../../../utils/productIds'
import {
  findPreviousStepWithCondition,
  getNextStepIndex,
} from '../../../utils/stepUtils'
import BuyFlowStepRenderer from './components/BuyFlowStepRenderer'
import { BuyingFlowData } from './types'

interface Props {
  productId: ProductIds
}

const BuyFlow: React.FC<Props> = ({ productId }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [collectedData, setCollectedData] = useState<BuyingFlowData>({})
  const navigate = useNavigate()
  const steps = getBuyStepById(productId)

  const handleSuccessfulPurchase = useCallback(() => {
    navigate(ROUTES.INSURANCE.SUCCESSFULLY_BOUGHT)
  }, [navigate])

  const onPressNext = useCallback(
    (updatedData: BuyingFlowData) => {
      setCollectedData((prevData) => ({ ...prevData, ...updatedData }))

      const nextStepIndex = getNextStepIndex(
        currentStepIndex,
        productId,
        updatedData
      )
      setCurrentStepIndex(nextStepIndex)
    },
    [currentStepIndex, productId]
  )

  const onPressPre = useCallback(() => {
    const prevStepIndex = findPreviousStepWithCondition(
      steps,
      currentStepIndex,
      collectedData
    )
    setCurrentStepIndex(prevStepIndex)
  }, [collectedData, currentStepIndex, steps])

  if (!steps) {
    return <div>Error: No steps found for this product ID</div>
  }

  const currentStep = steps[currentStepIndex]

  return (
    <BuyFlowStepRenderer
      step={currentStep}
      data={collectedData}
      onNext={onPressNext}
      onPre={currentStepIndex ? onPressPre : undefined}
      onPressBuy={handleSuccessfulPurchase}
    />
  )
}

export default BuyFlow
