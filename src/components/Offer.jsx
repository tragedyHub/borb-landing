import React from 'react'
import styled from 'styled-components'

const Offer = () => {
    return (
        <StyledOffer>
            <Column>
                <Title>Bullishor Bearish?</Title>
                <Text>
                    Predict if the price will
                    <br /> go up or down & earn{' '}
                    <Span>
                        <img src="/assets/span_circle.svg" alt="" /> 85%
                    </Span>
                </Text>
                <Button>Launch dApp</Button>
            </Column>
            <img src="/assets/offer_bg.png" />
        </StyledOffer>
    )
}

export default Offer

const StyledOffer = styled.div`
    margin-top: 184px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Column = styled.div``

const Title = styled.h2`
    font-size: 90px;
    font-weight: 600;
`

const Text = styled.p`
    margin: 20px 0 40px;
    font-size: 28px;
    font-weight: 400;
`

const Button = styled.button`
    padding: 14px 40px;
    background: #00e9be;
    border-radius: 8px;
    font-size: 18px;
`

const Image = styled.img``

const Span = styled.span`
    position: relative;
    font-size: 28px;
    font-weight: 600;
    margin-left: 15px;

    img {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
    }
`
