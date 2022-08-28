import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import AboutPage from './pages/AboutPage'
import EarnPage from './pages/EarnPage'
import { SupplyPage } from './pages/SupplyPage'

const App = () => {
    return (
        <div className="App">
            <Nav />
            <Routes>
                <Route path="/" element={<div>home page</div>} />
                <Route path="/supply" element={<SupplyPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/earn" element={<EarnPage />} />
            </Routes>
        </div>
    )
}

export default App
