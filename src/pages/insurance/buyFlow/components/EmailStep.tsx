import React, { useState } from 'react'
import { BuyFlowForm } from '../../../../components/BuyFlowForm'
import { CustomTextInput } from '../../../../components/CustomTextInput'
import {  BaseStep } from '../types'

interface Props extends BaseStep {
  value?: string
}

const EmailStep: React.FC<Props> = ({ value, onNext, onPre }) => {
  const [email, setEmail] = useState(value)

  return (
    <BuyFlowForm onNext={() => onNext({ email })} onPre={onPre}>
      <CustomTextInput
        label="Email"
        id="email"
        type="email"
        onChange={({ target: { value } }) => setEmail(value)}
        required
        value={email}
        autoFocus
      />
    </BuyFlowForm>
  )
}

export default EmailStep
