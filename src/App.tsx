import React, { useEffect, useMemo, useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Nav from './components/Nav'
import AboutPage from './pages/AboutPage'
import EarnPage from './pages/EarnPage'
import HomePage from './pages/HomePage'
import { SupplyPage } from './pages/SupplyPage'

const App = () => {
    const [isBurger, setIsBurger] = React.useState(false)

    const appRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (isBurger) return appRef?.current?.classList.add('App_active')

        appRef?.current?.classList.remove('App_active')
    }, [isBurger])

    return (
        <div className="App" id="app" ref={appRef}>
            <Nav isBurger={isBurger} setIsBurger={setIsBurger} />
            <div className="main_container">
                <Header setIsBurger={setIsBurger} />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/supply" element={<SupplyPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/earn" element={<EarnPage />} />
                </Routes>
            </div>
            <Footer />
        </div>
    )
}

export default App
