import React, { useState } from 'react'
import { BuyFlowForm } from '../../../../components/BuyFlowForm'
import { AgeStepData } from '../types'


interface Props {
  value?: number;
  onNext(data: AgeStepData): void;
}

const AgeStep: React.FC<Props> = ({
  value,
  onNext,
}) => {
  const [age, setAge] = useState(value)

  return (
    <BuyFlowForm onNext={() => onNext({ age })} >
      <div>
        <label htmlFor={'age'} >
          Age
        </label>
        <input
          required
          autoFocus
          onChange={({ target: { value } }) => setAge(Number(value))}
          type="number"
          id="age"
          value={age} />
      </div>
    </BuyFlowForm>
  )
}

export default AgeStep