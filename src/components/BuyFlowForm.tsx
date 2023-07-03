import React, { ReactNode, useRef } from 'react'

type Props = {
  onNext(): void;
  nextButtonText?: string;
  children: ReactNode;
}

export const BuyFlowForm: React.FC<Props> = ({
  onNext,
  nextButtonText = 'Next',
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
      <button type="submit" name="nextBtn">
        {nextButtonText}
      </button>
    </form>
  )
}
