import React, { useCallback } from 'react'
import {
  BuyingFlowAgeStep,
  BuyingFlowData,
  BuyingFlowStep,
  BaseStep,
  StepIds,
} from '../types'
import AgeStep from './AgeStep'
import EmailStep from './EmailStep'
import NameStep from './NameStep'
import ParentNameStep from './ParentNameStep'
import SummaryStep from './SummaryStep'

interface Props extends BaseStep {
  step: BuyingFlowStep
  data: BuyingFlowData
  onPressBuy(data: BuyingFlowData): void
  children?: React.ReactNode
}

const BuyFlowStepRenderer: React.FC<Props> = ({
  step,
  onNext,
  onPre,
  data,
  onPressBuy,
}) => {
  const renderStep = () => {
    const stepComponents = {
      [StepIds.Name]: (
        <NameStep
          value={{ firstName: data.firstName, lastName: data.lastName }}
          onNext={onNext}
          onPre={onPre}
        />
      ),
      [StepIds.Email]: (
        <EmailStep value={data.email} onNext={onNext} onPre={onPre} />
      ),
      [StepIds.Age]: (
        <AgeStep
          value={data.age}
          onNext={onNext}
          max={(step as BuyingFlowAgeStep)?.max}
          min={(step as BuyingFlowAgeStep)?.min}
          onPre={onPre}
        />
      ),
      [StepIds.ParentName]: (
        <ParentNameStep
          value={{
            parentFirstName: data.parentFirstName,
            parentLastName: data.parentLastName,
          }}
          onNext={onNext}
          onPre={onPre}
        />
      ),
      [StepIds.Summary]: <SummaryStep onNext={buyInsurance} data={data} />,
    }

    return (
      stepComponents[step.stepId] || <div>Error: Buying step not found</div>
    )
  }

  const buyInsurance = useCallback(() => onPressBuy(data), [data, onPressBuy])

  return renderStep()
}

export default BuyFlowStepRenderer
