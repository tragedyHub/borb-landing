import React, { useEffect, useMemo } from 'react'
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
    const appTag = useMemo(() => document.querySelector('#app'), [])

    useEffect(() => {
        if (isBurger) return appTag?.classList.add('App_active')

        console.log('qweqwe')

        appTag?.classList.remove('App_active')
    }, [isBurger, appTag])

    return (
        <div className="App" id="app">
            <Nav isBurger={isBurger} setIsBurger={setIsBurger} />
            <div className="main_container">
                <Header setIsBurger={setIsBurger} />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/supply" element={<SupplyPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/earn" element={<EarnPage />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default App
