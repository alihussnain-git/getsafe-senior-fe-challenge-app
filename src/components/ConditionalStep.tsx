import React from 'react'

interface ConditionalStepProps {
  shouldRender: boolean
  stepComponent: React.ReactNode
}

const ConditionalStep: React.FC<ConditionalStepProps> = ({
  shouldRender,
  stepComponent,
}) => {
  if (!shouldRender) {
    return null
  }

  return <>{stepComponent}</>
}

export default ConditionalStep
