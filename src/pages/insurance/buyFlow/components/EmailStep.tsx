import React, { useState } from 'react'
import { BuyFlowForm } from '../../../../components/BuyFlowForm'
import { CustomTextInput } from '../../../../components/CustomTextInput';
import { EmailStepData, PreviousStep } from '../types'

interface Props extends PreviousStep{
  value?: string;
  onNext(data: EmailStepData): void;
}

const EmailStep: React.FC<Props> = ({
  value,
  onNext,
  onPre
}) => {
  const [email, setEmail] = useState(value)

  return (
    <BuyFlowForm onNext={() => onNext({ email })} onPre={onPre} >
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
