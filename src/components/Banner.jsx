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
    margin: 100px 0 80px;
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
    @media screen and (max-width: 1000px) {
        margin: 100px 0;
    }
`

const Title = styled.h3`
    color: var(--black);
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 26px;

    @media screen and (max-width: 1000px) {
        font-size: 36px;
        margin-bottom: 25px;
    }
`

const Button = styled.button`
    padding: 14px 0;
    border-radius: 8px;
    background: var(--green);
    font-size: 16px;
    font-weight: 400;
    width: 170px;
    cursor: pointer;
  transition: .2s all ease;
    @media screen and (max-width: 1000px) {
        font-size: 16px;
    }
  &:hover, &:active {
    color: #fff;
  }
`
