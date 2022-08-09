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
            <img src="/assets/offer_bg.png" className="offer_image" />
        </StyledOffer>
    )
}

export default Offer

const StyledOffer = styled.div`
    margin-top: 184px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 1500px) {
        margin-top: 100px;
        .offer_image {
            width: 38vw;
            max-width: 583px;
        }
    }
    @media screen and (max-width: 768px) {
        flex-direction: column;
        .offer_image {
            width: 70%;
            margin-top: 60px;
        }
    }
`

const Column = styled.div`
    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`

const Title = styled.h2`
    font-size: 90px;
    font-weight: 600;

    @media screen and (max-width: 1000px) {
        font-size: 60px;
    }
    @media screen and (max-width: 768px) {
        text-align: center;
    }
`

const Text = styled.p`
    margin: 20px 0 40px;
    font-size: 28px;
    font-weight: 400;
    @media screen and (max-width: 1000px) {
        font-size: 20px;
        margin: 20px 0;
    }
    @media screen and (max-width: 768px) {
        text-align: center;
        line-height: 170%;
    }
`

const Button = styled.button`
    padding: 14px 40px;
    background: #00e9be;
    border-radius: 8px;
    font-size: 18px;
    @media screen and (max-width: 1000px) {
        font-size: 16px;
    }
    @media screen and (max-width: 768px) {
        text-align: center;
        margin: 0 auto;
    }
`

const Span = styled.span`
    position: relative;
    font-size: 28px;
    font-weight: 600;
    margin-left: 15px;

    @media screen and (max-width: 1000px) {
        font-size: 20px;
        margin-left: 10px;
        img {
            width: 70px;
        }
    }

    img {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
    }
`
