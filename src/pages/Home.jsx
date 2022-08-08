import React from 'react'
import styled from 'styled-components'
import Container from '../common/Container'
import Banner from '../components/Banner'
import Faq from '../components/Faq'
import Offer from '../components/Offer'
import Work from '../components/Work'

const Home = () => {
  return (
    <StyledHome>
        <Container>
          <Offer />
          <Work />
          <Faq />
        </Container>
        <Banner />
    </StyledHome>
  )
}

export default Home

const StyledHome = styled.div`
  
`