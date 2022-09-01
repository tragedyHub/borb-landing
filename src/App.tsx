import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import Footer from './components/Footer'
import Header from './components/Header'
import Nav from './components/Nav'
import AboutPage from './pages/AboutPage'
import EarnPage from './pages/EarnPage'
import HomePage from './pages/HomePage'
import { SupplyPage } from './pages/SupplyPage'
import axios from 'axios'

//@ts-ignore
import isEqual from 'lodash.isequal'

export const lightTheme = {
    backgroundContent: '#ffffff',
    titleColor: '#23272B',
    borderColor: '#e9ecf2',
    subtitleColor: ' #8A8F99',
    tabBorderColor: '#E9ECF2',
    selectColor: '#23272B',
    inputPlaceholderColor: '#C2C5CC',
    navbarBg: '#fff',
    inputWrapperColor: '#ffffff',
    inputWrapperDisabledColor: '#F6F8FC',
    inputBorderColor: '#E9ECF2',
    inputDisabledBorderColor: '#F6F8FC',
    arrowBackgroundColor: '#23272B',
    faqColor: '#23272B',
    faqBorderColor: '#E9ECF2',
    faqCrossColor: '#23272B',
    homePageButton: '#E9ECF2',
    navbarBottom: '#C2C5CC',
    walletBorder: '#E9ECF2',
    navbarHoverFill: '#23272B',
    navbarHover: '#F6F8FC',
}

export const darkTheme = {
    backgroundContent: '#23272B',
    borderColor: '#3D424D',
    titleColor: '#F6F8FC',
    subtitleColor: '#8A8F99',
    tabBorderColor: '#3D424D',
    selectColor: '#F6F8FC',
    inputPlaceholderColor: '#8A8F99',
    navbarBg: '#16191C',
    inputWrapperColor: '#16191C',
    inputBorderColor: '#3D424D',
    inputDisabledBorderColor: '#30373C',
    inputWrapperDisabledColor: '#30373C',
    arrowBackgroundColor: '#F6F8FC',
    faqColor: '#F6F8FC',
    faqBorderColor: '#3D424D',
    faqCrossColor: '#8A8F99',
    homePageButton: '#3D424D',
    navbarBottom: '#3D424D',
    walletBorder: '#3D424D',
    navbarHover: '#30373C',
    navbarHoverFill: '#F6F8FC',
}

const App = () => {
    const [isBurger, setIsBurger] = useState(false)

    const [appTheme, setAppTheme] = useState(
        localStorage.getItem('appTheme') === 'light' ? lightTheme : darkTheme
    )

    const appRef = useRef<HTMLDivElement | null>(null)

    const changeTheme = () => {
        setAppTheme((prev) =>
            isEqual(prev, lightTheme) ? darkTheme : lightTheme
        )
    }

    useEffect(() => {
        if (isBurger) {
            document.body.style.overflow = 'hidden'
            return appRef?.current?.classList.add('App_active')
        } else { 
            document.body.style.overflow = 'scroll'
        }

        appRef?.current?.classList.remove('App_active')
    }, [isBurger])

    useEffect(() => {
        localStorage.setItem(
            'appTheme',
            appTheme.backgroundContent === '#ffffff' ? 'light' : 'dark'
        )
    }, [appTheme])

    return (
        <ThemeProvider theme={appTheme}>
            <div className="App" id="app" ref={appRef}>
                <Nav isBurger={isBurger} setIsBurger={setIsBurger} />
                <MainContainer>
                    <Header
                        theme={
                            appTheme.backgroundContent === '#ffffff'
                                ? 'light'
                                : 'dark'
                        }
                        setIsBurger={setIsBurger}
                        changeTheme={changeTheme}
                    />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/supply" element={<SupplyPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/earn" element={<EarnPage />} />
                    </Routes>
                </MainContainer>
                <Footer />
            </div>
        </ThemeProvider>
    )
}

const MainContainer = styled.div`
    overflow: hidden;
    padding: 0 90px;
    display: flex;
    flex-direction: column;
    height: 100%;
    background: ${(props) => props.theme.backgroundContent};

    transition: background-color 0.3s ease;
    @media screen and (max-width: 1280px) {
        padding: 0;
    }
`

export default App
