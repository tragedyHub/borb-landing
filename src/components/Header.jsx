import React from 'react'
import { useLocation } from 'react-router'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Header = (props) => {
    const [trueLocation, setTrueLocation] = React.useState(false)
    let location = useLocation()

    React.useEffect(() => {
        if (location.pathname === '/') {
            setTrueLocation(true)
        } else {
            setTrueLocation(false)
        }
    }, [location])

    return (
        <StyledHeader location={trueLocation}>
            {trueLocation && (
                <div className="btc">
                    <img
                        src="/images/home/bitcoin.svg"
                        alt=""
                        className="currency"
                    />
                    <h4>BTC</h4>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M12 15L7.5 9L16.5 9L12 15Z" fill="#23272B" />
                    </svg>
                </div>
            )}

            <div className="left">
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ cursor: 'pointer' }}
                    onClick={() => props.setIsBurger(true)}
                >
                    <rect y="9" width="10" height="2" rx="1" fill="#23272B" />
                    <rect y="1" width="20" height="2" rx="1" fill="#23272B" />
                    <rect y="17" width="20" height="2" rx="1" fill="#23272B" />
                </svg>
                <NavLink to="/">
                    <div className="logo">
                        <img src="/images/primary/Logo.png" alt="" />
                        <p>BorB</p>
                    </div>
                </NavLink>
            </div>
            <div className="right">
                <img
                    src="/images/primary/moon.svg"
                    alt=""
                    style={{ marginRight: '24px', cursor: 'pointer' }}
                    onClick={props.changeTheme}
                />
                <img
                    src="/images/primary/language.svg"
                    alt=""
                    className="adaptive"
                />
                <Line />
                <AccountName>0x257dhj8s…</AccountName>
                <Wallet>
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.44827 3.7931C2.44827 3.02621 3.04217 2.44827 3.72176 2.44827H13.7099C14.5471 2.44827 15.2687 3.15853 15.2687 4.08867V5.13793H3.72176C3.04217 5.13793 2.44827 4.55999 2.44827 3.7931ZM2.44827 6.26327C2.82618 6.46897 3.2587 6.5862 3.72176 6.5862H15.9928H17.5517V15.9586C17.5517 16.8487 16.8437 17.5517 15.9928 17.5517H4.00713C3.15632 17.5517 2.44827 16.8487 2.44827 15.9586V6.26327ZM17.6676 5.13793H16.717V4.08867C16.717 2.40701 15.3944 1 13.7099 1H3.72176C2.19483 1 1 2.27467 1 3.7931V15.9586C1 17.6281 2.33622 19 4.00713 19H15.9928C17.6638 19 19 17.6281 19 15.9586V5.86206V5.53103C19 5.1311 18.6758 4.80689 18.2758 4.80689C18.0208 4.80689 17.7966 4.93871 17.6676 5.13793ZM13.6207 10.7241C13.735 10.7241 13.8276 10.6315 13.8276 10.5172C13.8276 10.4029 13.735 10.3103 13.6207 10.3103C13.5064 10.3103 13.4138 10.4029 13.4138 10.5172C13.4138 10.6315 13.5064 10.7241 13.6207 10.7241ZM12.3793 10.5172C12.3793 9.83168 12.9351 9.27585 13.6207 9.27585C14.3062 9.27585 14.8621 9.83168 14.8621 10.5172C14.8621 11.2028 14.3062 11.7586 13.6207 11.7586C12.9351 11.7586 12.3793 11.2028 12.3793 10.5172Z"
                            fill="#3FE7BE"
                        />
                    </svg>
                </Wallet>
            </div>
        </StyledHeader>
    )
}

export default Header

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: ${(props) =>
        props.location ? 'space-between' : 'flex-start'};
    margin: ${(props) => (props.location ? '28px 0' : '28px 0 28px auto')};
    .left {
        display: none;
    }
    .right {
        display: flex;
        align-items: center;
    }
    .btc {
        display: flex;
        align-items: center;
        cursor: pointer;
        .currency {
            width: 32px;
            height: 32px;
            margin-right: 8px;
        }
        h4 {
            font-weight: 600;
            font-size: 36px;
            color: ${(props) => props.theme.arrowBackgroundColor};
        }
        path {
            fill: ${(props) => props.theme.arrowBackgroundColor};
        }
    }
    @media screen and (max-width: 1280px) {
        margin: 0 0 32px;
        padding: 0 40px;
        height: 56px;
        justify-content: space-between;
        box-shadow: 0px 1px 0px ${(props) => props.theme.borderColor};

        .btc {
            display: none;
        }

        .adaptive {
            display: none;
            position: absolute;
        }
        img {
            margin: 0 !important;
        }
        .left {
            display: flex;
            align-items: center;

            rect {
                fill: ${(props) => props.theme.arrowBackgroundColor};
            }
        }
        .logo {
            display: flex;
            align-items: center;
            margin-left: 24px;
            p {
                margin-left: 7px;
                font-weight: 600;
                font-size: 24px;
                color: ${(props) => props.theme.arrowBackgroundColor};
            }
        }
    }
    @media screen and (max-width: 1000px) {
        padding: 0 10px 0 20px;
    }
    @media screen and (max-width: 768px) {
        margin-bottom: 24px;
    }
`

const Line = styled.div`
    height: 20px;
    width: 1px;
    background: var(--grey95);
    margin: 0 24px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`

const AccountName = styled.p`
    max-width: 90px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${(props) => props.theme.arrowBackgroundColor};
    margin-right: 12px;
    font-weight: 400;
    font-size: 14px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`

const Wallet = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid var(--grey95);
    display: grid;
    place-content: center;
    cursor: pointer;
    @media screen and (max-width: 768px) {
        margin-left: 20px;
    }
`
