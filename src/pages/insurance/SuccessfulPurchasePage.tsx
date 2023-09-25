import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../routes/routes'

const SuccessfulPurchasePage = () => {
  return (
    <div>
      <h1>Insurance Successfully Bought 🎉</h1>
      <p>Thank you for purchasing the insurance!</p>
      <p>
        Your policy details and documents will be sent to your email shortly.
      </p>
      <p>If you have any questions, please contact our customer support.</p>
      <Link to={ROUTES.HOME}>To the home page</Link>
    </div>
  )
}

export default SuccessfulPurchasePage
