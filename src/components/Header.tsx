import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/logo.svg'
import { ROUTES } from '../routes/routes'

const Header: React.FC = () => {

    return (
        <header className="App-header">
            <Link to={ROUTES.HOME}>
                <img src={logo} className='App-logo' alt="logo" />
            </Link>
        </header>
    )
}

export default Header
