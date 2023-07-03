import React from 'react'
import { BuyFlowForm } from '../../../../components/BuyFlowForm'
import { BuyingFlowData } from '../types'

interface Props {
  data: BuyingFlowData;
}

interface DataItemProps {
  label: string;
  value: string | number;
}

const SummaryStep: React.FC<Props> = ({
  data,
}) => {


  const DataItem = ({ label, value }: DataItemProps) => {
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
    return (<>
      {Object.entries(data).map(([key, value]) => {
        const label = `${(key)}: `
        return (
          <DataItem key={key} label={label} value={value} />
        )
      })}</>)
  }

  return (
    <BuyFlowForm nextButtonText='Submit' onNext={() => { }}>
      {renderCollectedData()}
    </BuyFlowForm>
  )
}

export default SummaryStep
