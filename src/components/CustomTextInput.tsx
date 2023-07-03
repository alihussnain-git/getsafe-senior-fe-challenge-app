import React, { InputHTMLAttributes } from 'react'

export interface Props {
  label: string;
  id: string;
  value?: string;
}

export const CustomTextInput: React.FC<Props & InputHTMLAttributes<HTMLInputElement>> = ({
  label,
  id,
  value,
  onChange,
  required,
  min,
  max,
  type,
  autoFocus,
}) => {
  return (
    <div>
      <label htmlFor={id}>
        {label}
      </label>
      <input
        onChange={onChange}
        required={required}
        min={min}
        max={max}
        id={id}
        value={value || ''}
        type={type}
        autoFocus={autoFocus}
      />
    </div>
  )
}
