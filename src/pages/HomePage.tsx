import React from 'react'
import { Link } from 'react-router-dom'

const HomePage: React.FC = () => {
    return (
        <>
            <h1>Welcome to Getsafe's Developer Insurance</h1>
            <p>INSURANCE MADE EASY</p>
            <Link to="/buy/insurance_dev">Get started!</Link>
        </>
    )
}

export default HomePage
