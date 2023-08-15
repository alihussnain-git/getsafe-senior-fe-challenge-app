import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import EmailStep from '../components/EmailStep'

describe('EmailStep', () => {
  test('renders EmailStep correctly', () => {
    const onNext = jest.fn()
    const onPre = jest.fn()
    const email = 'test@test.com'

    render(<EmailStep onNext={onNext} onPre={onPre} value={email} />)

    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByDisplayValue('test@test.com')).toBeInTheDocument()
  })

  test('calls onNext with email data when pressing Next', () => {
    const onNext = jest.fn()
    const onPre = jest.fn()
    const email = 'test@test.com'

    render(<EmailStep onNext={onNext} onPre={onPre} value={email} />)

    const emailInput = screen.getByLabelText('Email')
    const nextButton = screen.getByText('Next')

    fireEvent.change(emailInput, { target: { value: 'test@test.com' } })
    fireEvent.click(nextButton)

    expect(onNext).toHaveBeenCalledWith({ email: 'test@test.com' })
  })

  test('calls onPre when pressing Previous', () => {
    const onNext = jest.fn()
    const onPre = jest.fn()
    const email = 'test@test.com'

    render(<EmailStep onNext={onNext} onPre={onPre} value={email} />)

    const previousButton = screen.getByText('Previous')

    fireEvent.click(previousButton)

    expect(onPre).toHaveBeenCalled()
  })
})
