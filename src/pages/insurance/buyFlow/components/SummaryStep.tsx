import React from 'react'
import { BuyFlowForm } from '../../../../components/BuyFlowForm'
import { BuyingFlowData } from '../types'

interface SummaryProps {
  data: BuyingFlowData
  onNext(): void
}

interface SummaryItemProps {
  label: string
  value: string | number
}

const SummaryStep: React.FC<SummaryProps> = ({ data, onNext }) => {
  const DataItem = ({ label, value }: SummaryItemProps) => {
    return (
      <div>
        <span>{label}</span>
        <span>
          <b>{value}</b>
        </span>
      </div>
    )
  }

  const renderCollectedData = () => {
    return (
      <>
        {Object.entries(data).map(([key, value]) => {
          const label = `${key}: `
          return <DataItem key={key} label={label} value={value} />
        })}
      </>
    )
  }

  return (
    <BuyFlowForm nextButtonText="Buy" onNext={onNext}>
      {renderCollectedData()}
    </BuyFlowForm>
  )
}

export default SummaryStep
