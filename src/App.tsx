import React from 'react'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import logo from './logo.svg'
import './App.css'

import BuyFlow, { ProductIds } from './buyFlow/Buyflow'


const App: React.FC = () => {

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Routes>
          <Route
            path="/buy/insurance_dev"
            element={<BuyFlow productId={ProductIds.devIns} />}
          />
          <Route path="/" element={<>
            <p>Welcome to Getsafe's Developer Insurance</p>
            <Link to="/buy/insurance_dev">Get started!</Link>
          </>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
