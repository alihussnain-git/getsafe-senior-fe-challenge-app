import React, { ReactNode, useRef } from 'react'
import { PreviousStep } from '../pages/insurance/buyFlow/types';

interface Props extends PreviousStep {
  onNext(): void;
  preButtonText?: string;
  nextButtonText?: string;
  children: ReactNode;
}

export const BuyFlowForm: React.FC<Props> = ({
  onNext,
  onPre,
  nextButtonText = 'Next',
  preButtonText = 'Previous',
  children,
}) => {
  const ref = useRef<HTMLFormElement>(null)

  return (
    <form
      ref={ref}
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current?.reportValidity()) onNext();
      }}
    >
      {children}
      {!!onPre && (
        <button type="button" name="preBtn" onClick={onPre}>
          {preButtonText}
        </button>
      )}
      <button type="submit" name="nextBtn">
        {nextButtonText}
      </button>
    </form>
  )
}
