import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <StyledHeader>
            <HeaderContainer>
                <div className="logo">
                    <img src="/assets/logo.svg" alt=" " />
                    <h4>BorB</h4>
                </div>
                <div className="right">
                    <img src="/assets/lang.svg" alt="" />
                    <div className="line"></div>
                    <button>Launch dApp</button>
                </div>
            </HeaderContainer>
        </StyledHeader>
    )
}

export default Header

const StyledHeader = styled.header`
    height: 40px;
    margin-top: 30px;
    img {
        cursor: pointer;
    }
    .logo {
        display: flex;
        align-items: center;
    }
    .logo img {
        margin-right: 8px;
    }
    h4 {
        font-size: 32px;
        font-weight: 600;
    }
    .right {
        display: flex;
        align-items: center;
    }
    .line {
        height: 24px;
        width: 1px;
        background: var(--line);
        margin: 0 32px;
    }
    button {
        padding: 8px 32px;
        border: 1px solid #00e9be;
        border-radius: 8px;
        font-weight: 400;
        cursor: pointer;
    }
`

const HeaderContainer = styled.div`
    padding: 0 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`