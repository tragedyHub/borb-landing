import React from 'react'
import Container from '../common/Container'
import Banner from '../components/Banner'
import Faq from '../components/Faq'
import Offer from '../components/Offer'
import Work from '../components/Work'

const Home = () => {
    return (
        <>
            <Container>
                <Offer />
                <Work />
                <Faq />
            </Container>
            <Banner />
        </>
    )
}

export default Home