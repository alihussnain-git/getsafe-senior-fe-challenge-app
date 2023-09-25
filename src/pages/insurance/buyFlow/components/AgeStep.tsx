import React, { useState } from 'react'
import { BuyFlowForm } from '../../../../components/BuyFlowForm'
import { CustomTextInput } from '../../../../components/CustomTextInput'
import { BuyingFlowAgeStep, BaseStep } from '../types'

interface Props extends BaseStep {
  value?: number
}

const AgeStep: React.FC<Props & Omit<BuyingFlowAgeStep, 'stepId'>> = ({
  value,
  onNext,
  onPre,
  min,
  max,
}) => {
  const [age, setAge] = useState(value)

  return (
    <BuyFlowForm onNext={() => onNext({ age })} onPre={onPre}>
      <CustomTextInput
        label="Age"
        id="age"
        type="number"
        onChange={({ target: { value } }) => setAge(Number(value))}
        required
        value={String(age)}
        autoFocus
        min={min}
        max={max}
      />
    </BuyFlowForm>
  )
}

export default AgeStep
