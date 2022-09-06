import React from 'react'
import { useLocation } from 'react-router'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { useOnClickOutside } from '../lib/useOnClickOutside'
import { SelectBodyHead } from '../pages/HomePage'
let data = [
    {
        name: 'Bitcoin',
        ticker: 'btc',
        img: '/images/home/bitcoin.svg',
    },
    {
        name: 'Ethereum',
        ticker: 'eth',
        img: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=023',
    },
    {
        name: 'Solana',
        ticker: 'sol',
        img: 'https://bitbill.oss-accelerate.aliyuncs.com/pics/coins/solana-plain.svg',
    },
    {
        name: 'BNB',
        ticker: 'bnb',
        img: 'https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=023',
    },
    {
        name: 'Cardano',
        ticker: 'ada',
        img: 'https://cryptologos.cc/logos/cardano-ada-logo.svg?v=023',
    },
    {
        name: 'Polkadot',
        ticker: 'dot',
        img: 'https://cryptologos.cc/logos/polkadot-new-dot-logo.svg?v=023',
    },
    {
        name: 'Polygon',
        ticker: 'matic',
        img: 'https://cryptologos.cc/logos/polygon-matic-logo.svg?v=023',
    },
    {
        name: 'Dogecoin',
        ticker: 'doge',
        img: 'https://cryptologos.cc/logos/dogecoin-doge-logo.svg?v=023',
    },
    {
        name: 'Cosmos',
        ticker: 'atom',
        img: 'https://cryptologos.cc/logos/cosmos-atom-logo.svg?v=023',
    },
    {
        name: 'Avalanche',
        ticker: 'avax',
        img: 'https://cryptologos.cc/logos/avalanche-avax-logo.svg?v=023',
    },
]
const Header = (props) => {
    const [trueLocation, setTrueLocation] = React.useState(false)
    const [itemId2, setItemId2] = React.useState(0)
    const [secondPopup, setSecondPopup] = React.useState(false)
    let ref = React.useRef(null)
    useOnClickOutside(ref, () => setSecondPopup(false))
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
                <div className="btc_wrapper">
                    <div className="btc" onClick={() => setSecondPopup(true)}>
                        <img
                            src={data[itemId2].img}
                            alt=""
                            className="currency"
                        />
                        <h4>{data[itemId2].ticker}</h4>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 15L7.5 9L16.5 9L12 15Z"
                                fill="#23272B"
                            />
                        </svg>
                    </div>{' '}
                    {secondPopup && (
                        <SelectBodyHead ref={ref}>
                            {data.map((item, index) => (
                                <div
                                    className="select_card"
                                    onClick={() => {
                                        setItemId2(index)
                                        setSecondPopup(false)
                                    }}
                                >
                                    <img src={item.img} alt="" />
                                    <p>{item.name}</p>
                                </div>
                            ))}
                        </SelectBodyHead>
                    )}
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
                {props.theme === 'light' && (
                    <svg
                        style={{ marginRight: '24px', cursor: 'pointer' }}
                        onClick={props.changeTheme}
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clip-path="url(#clip0_184_578)">
                            <path
                                d="M19 10.8108C18.8424 12.5166 18.2022 14.1423 17.1543 15.4975C16.1065 16.8528 14.6944 17.8816 13.0832 18.4636C11.4719 19.0456 9.72832 19.1566 8.05629 18.7838C6.38426 18.411 4.85298 17.5697 3.64164 16.3584C2.43031 15.147 1.589 13.6157 1.21618 11.9437C0.843359 10.2717 0.954435 8.52805 1.53641 6.91685C2.11839 5.30564 3.1472 3.8935 4.50246 2.84567C5.85772 1.79783 7.48337 1.15764 9.18919 1C8.19048 2.35113 7.7099 4.01585 7.83485 5.69137C7.95979 7.36689 8.68197 8.94191 9.87003 10.13C11.0581 11.318 12.6331 12.0402 14.3086 12.1652C15.9842 12.2901 17.6489 11.8095 19 10.8108V10.8108Z"
                                stroke={
                                    props.theme.light ? '#C2C5CC' : '#8A8F99'
                                }
                                stroke-width="1.4"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_184_578">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                )}
                {props.theme === 'dark' && (
                    <img
                        src="/images/primary/sun.svg"
                        alt=""
                        style={{ marginRight: '24px', cursor: 'pointer' }}
                        onClick={props.changeTheme}
                    />
                )}

                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="adaptive"
                    style={{cursor: "pointer"}}
                    onClick={() => props.setLangaugePopup(true)}
                >
                    <g clip-path="url(#clip0_184_577)">
                        <path
                            d="M19 10C19 12.3869 18.0518 14.6761 16.364 16.364C14.6761 18.0518 12.3869 19 10 19M19 10C19 7.61305 18.0518 5.32387 16.364 3.63604C14.6761 1.94821 12.3869 1 10 1M19 10H1M10 19C7.61305 19 5.32387 18.0518 3.63604 16.364C1.94821 14.6761 1 12.3869 1 10M10 19C11.657 19 13 14.97 13 10C13 5.03 11.657 1 10 1M10 19C8.343 19 7 14.97 7 10C7 5.03 8.343 1 10 1M10 1C7.61305 1 5.32387 1.94821 3.63604 3.63604C1.94821 5.32387 1 7.61305 1 10"
                            stroke={props.theme.light ? '#C2C5CC' : '#8A8F99'}
                            stroke-width="1.4"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_184_577">
                            <rect width="20" height="20" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

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
    position: relative;
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
            font-size: 36px; text-transform: uppercase;
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

        .btc_wrapper {
            display: none;
        }

        .adaptive {
            display: none;
            position: absolute;
        }
        img,
        svg {
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
    background: ${(props) => props.theme.walletBorder};
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
    border: 1px solid ${(props) => props.theme.walletBorder};
    display: grid;
    place-content: center;
    cursor: pointer;
    @media screen and (max-width: 768px) {
        margin-left: 20px;
    }
`
