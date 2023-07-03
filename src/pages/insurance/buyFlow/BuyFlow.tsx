import React, { useState } from 'react'
import { ProductIds, PRODUCT_IDS_TO_NAMES } from '../InsurancePage'
import AgeStep from './components/AgeStep'
import EmailStep from './components/EmailStep'
import SummaryStep from './components/SummaryStep'

interface BuyFlowProps {
  productId: ProductIds
}

const BuyFlow: React.FC<BuyFlowProps> = (props) => {
  const [currentStep, setStep] = useState('email')
  const [collectedData, updateData] = useState({
    email: '',
    age: 0,
  })
  const getStepCallback = (nextStep: string) => (field: string, value: any) => {
    updateData({ ...collectedData, [field]: value })
    setStep(nextStep)
  }
  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[props.productId]}</h4>
      {(currentStep === 'email' && <EmailStep cb={getStepCallback('age')} />) ||
        (currentStep === 'age' && (
          <AgeStep cb={getStepCallback('summary')} />
        )) ||
        (currentStep === 'summary' && (
          <SummaryStep collectedData={collectedData} />
        ))}
    </>
  )
}

export default BuyFlow
