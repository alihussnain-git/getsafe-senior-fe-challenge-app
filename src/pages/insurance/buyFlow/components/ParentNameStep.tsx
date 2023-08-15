import React, { useState } from 'react'
import { BuyFlowForm } from '../../../../components/BuyFlowForm'
import { CustomTextInput } from '../../../../components/CustomTextInput'
import { BaseStep, ParentNameStepData } from '../types'

interface Props extends BaseStep {
  value: ParentNameStepData
}

const ParentNameStep: React.FC<Props> = ({ value, onNext, onPre }) => {
  const [parentName, setParentName] = useState(value)

  return (
    <BuyFlowForm onNext={() => onNext(parentName)} onPre={onPre}>
      <CustomTextInput
        label="Parent's First Name"
        id="parentFirstName"
        onChange={({ target: { value } }) =>
          setParentName({ ...parentName, parentFirstName: value })
        }
        value={parentName.parentFirstName}
        required
        autoFocus
      />
      <CustomTextInput
        label="Parent's Last Name"
        id="parentLastName"
        onChange={({ target: { value } }) =>
          setParentName({ ...parentName, parentLastName: value })
        }
        value={parentName.parentLastName}
        required
      />
    </BuyFlowForm>
  )
}

export default ParentNameStep
