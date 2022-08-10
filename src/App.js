import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import Popup from "./components/Popup";

const App = () => {
    const [show, setShow] = React.useState(true)

    return (
        <>
            { show && <Popup set={setShow}/> }
            <Header set={setShow}/>
            <Home />
            <Footer />
        </>
    )
}

export default App
