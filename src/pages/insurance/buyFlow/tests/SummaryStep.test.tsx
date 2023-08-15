import React from 'react'
import { render, screen } from '@testing-library/react'
import SummaryStep from '../components/SummaryStep'

describe('SummaryStep', () => {
  test('renders SummaryStep correctly', () => {
    const onNext = jest.fn()
    const data = {
      age: 25,
      email: 'test@example.com',
      firstName: 'Test First Name',
      lastName: 'Test Last Name',
    }

    render(<SummaryStep data={data} onNext={onNext} />)

    expect(screen.getByText('age:')).toBeInTheDocument()
    expect(screen.getByText('email:')).toBeInTheDocument()
    expect(screen.getByText('firstName:')).toBeInTheDocument()
    expect(screen.getByText('lastName:')).toBeInTheDocument()

    expect(screen.getByText(25)).toBeInTheDocument()
    expect(screen.getByText('test@example.com')).toBeInTheDocument()
    expect(screen.getByText('Test First Name')).toBeInTheDocument()
    expect(screen.getByText('Test Last Name')).toBeInTheDocument()
  })

  test('calls onNext when pressing Buy Now', () => {
    const onNext = jest.fn()
    const data = {
      age: 25,
      email: 'test@example.com',
      firstName: 'Test First Name',
      lastName: 'Test Last Name',
    }

    render(<SummaryStep data={data} onNext={onNext} />)

    const buyNowButton = screen.getByText('Buy')
    buyNowButton.click()

    expect(onNext).toHaveBeenCalled()
  })
})
