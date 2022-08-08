import React from 'react'
import styled from 'styled-components'

const Work = () => {
    return (
        <StyledWork>
            <img src="/assets/phone.png" alt="" />
            <Column>
                <Title>How it works</Title>
                <Row>
                    <Span>1</Span>
                    <Text>Choose a timeframe</Text>
                </Row>
                <Row>
                    <Span>2</Span>
                    <Text>Enter amount</Text>
                </Row>
                <Row>
                    <Span>3</Span>
                    <Text>Go up or down</Text>
                </Row>
            </Column>
        </StyledWork>
    )
}

export default Work

const StyledWork = styled.div`
    margin: 257px 0 200px;
    display: flex;
    align-items: center;
    img {
        margin-right: 150px;
    }
`

const Column = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 64px 64px 64px;
    grid-gap: 32px;
`
const Title = styled.h3`
    font-size: 48px;
    font-weight: 600;
    margin-bottom: 58px;
`
const Text = styled.p`
    margin-left: 24px;
    font-size: 28px;
    font-weight: 400;
`
const Span = styled.div`
    background: #ffffff;
    box-shadow: 0px 6px 16px rgba(197, 200, 207, 0.3);
    border-radius: 100px;
    display: grid;
    place-content: center;
    font-weight: 400;
    font-size: 28px;
    color: #00e9be;
    width: 64px;
    height: 64px;
`
const Row = styled.div`
    display: flex;
    align-items: center;
`
