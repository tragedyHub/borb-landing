import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <StyledFooter>
            <img src="/images/primary/twitter.svg" alt="" />
            <img src="/images/primary/github.svg" alt="" />
            <img src="/images/primary/redit.svg" alt="" />
            <p>© 2022 BorB | Privacy Policy</p>
        </StyledFooter>
    )
}

export default Footer

const StyledFooter = styled.footer`
    padding: 0 40px;
    margin-top: auto;
    height: 72px;
    display: none;
    align-items: center;
    box-shadow: 0px -1px 0px ${(props) => props.theme.borderColor};
    background: ${(props) => props.theme.backgroundContent};
    p {
        color: var(--grey80);
        margin-left: 24px;
        font-size: 12px;
    }
    img {
        cursor: pointer;
        &:not(:last-child) {
            margin-right: 16px;
        }
    }
    @media screen and (max-width: 1280px) {
        display: flex;
    }
    @media screen and (max-width: 1000px) {
        padding: 0 16px;
    }
`
