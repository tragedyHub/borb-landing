import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Nav from './components/Nav'
import AboutPage from './pages/AboutPage'
import EarnPage from './pages/EarnPage'
import Home from './pages/HomePage'
import { SupplyPage } from './pages/SupplyPage'

const App = () => {
    const [isBurger, setIsBurger] = React.useState(false)

    console.log(isBurger)

    return (
        <div className="App">
            <Nav isBurger={isBurger} setIsBurger={setIsBurger} />
            <div
                className="main_container"
                style={{ display: 'flex', flexDirection: 'column' }}
            >
                <Header setIsBurger={setIsBurger} />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/supply" element={<SupplyPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/earn" element={<EarnPage />} />
                    </Routes>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default App
