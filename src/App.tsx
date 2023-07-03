import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'

import Header from './components/Header'
import HomePage from './pages/HomePage'
import BuyFlow from './pages/insurance/buyFlow/BuyFlow'
import { ProductIds } from './pages/insurance/InsurancePage'
import { ROUTES } from './routes/routes'


const App: React.FC = () => {

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path={ROUTES.INSURANCE.DEVELOPER_INSURANCE}
            element={<BuyFlow productId={ProductIds.devIns} />}
          />
          <Route path={ROUTES.HOME} element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
