import React, { useState } from 'react'
import { BuyFlowForm } from '../../../../components/BuyFlowForm'
import { EmailStepData } from '../types'

interface Props {
  value?: string;
  onNext(data: EmailStepData): void;
}

const EmailStep: React.FC<Props> = ({
  value,
  onNext,
}) => {
  const [email, setEmail] = useState(value)

  return (
    <BuyFlowForm onNext={() => onNext({ email })} >
      <div>
        <label htmlFor={'email'} >
          Email
        </label>
        <input
          id="email"
          type="email"
          onChange={({ target: { value } }) => setEmail(value)}
          value={email}
          required
          autoFocus />
      </div>
    </BuyFlowForm>
  )
}

export default EmailStep
