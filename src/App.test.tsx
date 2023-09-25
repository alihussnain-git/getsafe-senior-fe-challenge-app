import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import App from './App'
import { ROUTES } from './routes/routes'

describe('App', () => {
  test('renders home page by default', () => {
    render(
      <MemoryRouter initialEntries={[ROUTES.HOME]}>
        <App />
      </MemoryRouter>
    )

    const homePageElement = screen.getByText(
      /Welcome to Getsafe's Insurance Services/i
    )
    expect(homePageElement).toBeInTheDocument()
  })

  test('navigates to developer insurance page', () => {
    render(
      <MemoryRouter initialEntries={[ROUTES.INSURANCE.DEVELOPER_INSURANCE]}>
        <App />
      </MemoryRouter>
    )

    const developerInsurancePageElement = screen.getByText(
      /Buying developer insurance/i
    )
    expect(developerInsurancePageElement).toBeInTheDocument()
  })

  test('navigates to designer insurance page', () => {
    render(
      <MemoryRouter initialEntries={[ROUTES.INSURANCE.DESIGNER_INSURANCE]}>
        <App />
      </MemoryRouter>
    )

    const designerInsurancePageElement = screen.getByText(
      /Buying designer insurance/i
    )
    expect(designerInsurancePageElement).toBeInTheDocument()
  })

  test('renders insurance successful purchase', () => {
    render(
      <MemoryRouter initialEntries={[ROUTES.INSURANCE.SUCCESSFULLY_BOUGHT]}>
        <App />
      </MemoryRouter>
    )

    const homePageElement = screen.getByText(/Insurance Successfully Bought/i)
    expect(homePageElement).toBeInTheDocument()
  })
})
