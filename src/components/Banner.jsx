import React from 'react'
import styled from 'styled-components'

const Banner = () => {
    return (
        <StyledBanner>
            <Title>Trade on the future</Title>
            <Button>Start trading</Button>
            {/*<img src="/assets/bg.png" alt="" />*/}
        </StyledBanner>
    )
}

export default Banner

const StyledBanner = styled.div`
    margin: 160px 0 120px;
    height: 380px;
    background: var(--light-grey);
    border-radius: 16px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    img {
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
    }
`

const Title = styled.h3`
    color: var(--black);
    font-size: 48px;
    font-weight: 600;
    margin-bottom: 35px;
`

const Button = styled.button`
    padding: 14px 0;
    border-radius: 8px;
    background: var(--green);
    font-size: 18px;
    font-weight: 400;
    width: 188px;
    cursor: pointer;
`
