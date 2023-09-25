import React, { useState } from 'react'
import { BuyFlowForm } from '../../../../components/BuyFlowForm'
import { CustomTextInput } from '../../../../components/CustomTextInput'
import { BaseStep, NameStepData } from '../types'

interface Props extends BaseStep {
  value: NameStepData
}

const NameStep: React.FC<Props> = ({ value, onNext, onPre }) => {
  const [name, setName] = useState(value)

  return (
    <BuyFlowForm onPre={onPre} onNext={() => onNext(name)}>
      <CustomTextInput
        label="First Name"
        id="firstName"
        onChange={({ target: { value } }) =>
          setName({ ...name, firstName: value })
        }
        value={name.firstName}
        required
        autoFocus
      />
      <CustomTextInput
        label="Last Name"
        id="lastName"
        onChange={({ target: { value } }) =>
          setName({ ...name, lastName: value })
        }
        value={name.lastName}
        required
      />
    </BuyFlowForm>
  )
}

export default NameStep
