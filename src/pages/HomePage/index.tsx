import React from 'react'
import styled from 'styled-components'
import {
    CurrencyWrapper,
    InputWrapper,
    SelectWrapper,
    Tab,
    TabContainer,
} from '../SupplyPage'
import { ReactComponent as USDCIcon } from '../../assets/usdc-icon.svg'
import { ReactComponent as ArrowIcon } from '../../assets/arrow-down-icon.svg'
import {
    Button,
    Buttons,
    Card,
    Column,
    Counter,
    Grid,
    Head,
    HelperRow,
    Left,
    Popup,
    PopupBottom,
    PopupButton,
    PopupContent,
    PopupTitle,
    Right,
    Row,
    StyledHome,
    Text,
} from './components/main'
import { Pagination, Title } from './components/bottom'
import { useOnClickOutside } from '../../lib/useOnClickOutside'
// import {
//     getPythProgramKeyForCluster,
//     PriceStatus,
//     PythConnection,
// } from '@pythnetwork/client'

const Home = () => {
    let array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    const [show, setShow] = React.useState<boolean>(false)
    let ref = React.useRef(null)

    useOnClickOutside(ref, () => setShow(false))

    // const pythConnection = new PythConnection(
    // solanaWeb3Connection,
    // getPythProgramKeyForCluster(solanaClusterName)
    // )
    // pythConnection.onPriceChange((product, price) => {
    // sample output:
    // Crypto.SRM/USD: $8.68725 ±$0.0131 Status: Trading
    //     console.log(
    //         `${product.symbol}: $${price.price} \xB1$${
    //             price.confidence
    //         } Status: ${PriceStatus[price.status]}`
    //     )
    // })

    // Start listening for price change events.
    // pythConnection.start()

    return (
        <StyledHome>
            <div className="container">
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
                <Row>
                    <Left></Left>
                    <Right>
                        <div className="content">
                            <Counter>86%</Counter>
                            <InputWrapper>
                                <div className="input-wrapper">
                                    <SelectWrapper>
                                        <CurrencyWrapper>
                                            <USDCIcon />
                                        </CurrencyWrapper>
                                        <span>USTC</span>
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            className="arrow"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M8 10L5 6L11 6L8 10Z"
                                                fill="#23272B"
                                            />
                                        </svg>
                                    </SelectWrapper>
                                    <input
                                        type="number"
                                        className="input"
                                        placeholder="Amount"
                                    />
                                </div>
                            </InputWrapper>
                            <HelperRow>
                                <Text>Balance: 263</Text>
                                <Text>$257 payout</Text>
                            </HelperRow>
                            <Grid>
                                <Card>10%</Card>
                                <Card>25%</Card>
                                <Card>50%</Card>
                                <Card>75%</Card>
                                <Card>Max</Card>
                            </Grid>
                            <Buttons>
                                <Button onClick={() => setShow(true)}>
                                    <svg
                                        width="32"
                                        height="32"
                                        viewBox="0 0 32 32"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M16 12L22 20H10L16 12Z"
                                            fill="#238069"
                                        />
                                    </svg>
                                </Button>
                                <Button red onClick={() => setShow(true)}>
                                    <svg
                                        width="32"
                                        height="32"
                                        viewBox="0 0 32 32"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M16 20L10 12L22 12L16 20Z"
                                            fill="#8C3045"
                                        />
                                    </svg>
                                </Button>
                            </Buttons>
                        </div>
                    </Right>
                </Row>
                <Title>Trade</Title>
                <div className="tab_container">
                    <TabContainer>
                        <Tab active>
                            <span>Active</span>
                        </Tab>
                        <Tab>
                            <span>Closed</span>
                        </Tab>
                        <Tab>
                            <span>
                                Uncollected <h3>3</h3>
                            </span>
                        </Tab>
                    </TabContainer>
                </div>

                <DataTable>
                    <DataHeader>
                        <span className="center mobile-display-none">
                            Asset
                        </span>
                        <span className="mobile-no-color">Direction</span>
                        <span className="">Open</span>
                        <span>Close</span>
                        <span className="mobile-display-none">Chart</span>
                        <span className="last">Result</span>
                    </DataHeader>
                    <DataContent>
                        {array.map((_, idx) => (
                            <DataContentItem>
                                <span className="center mobile-display-none">
                                    <img
                                        src="/images/home/bitcoin.svg"
                                        alt=""
                                    />
                                </span>
                                <span className="">
                                    <svg
                                        className="first_td_adaptive"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 32 32"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M16 12L22 20H10L16 12Z"
                                            fill="var(--green)"
                                        />
                                    </svg>
                                </span>
                                <span className="center">$19,2587.45</span>

                                <span className="center">00:47</span>
                                <span className="chart_td center mobile-display-none">
                                    <img src="/images/home/Chart.png" alt="" />
                                </span>
                                <span
                                    className={
                                        idx % 2 === 0
                                            ? 'price-increase last'
                                            : 'price-drop last'
                                    }
                                >
                                    +266.454
                                </span>
                            </DataContentItem>
                        ))}
                    </DataContent>
                </DataTable>

                <Pagination>
                    <img src="/images/home/pagination.svg" alt="" />
                    <img
                        src="/images/home/pagination.svg"
                        alt=""
                        style={{ transform: 'rotate(180deg)' }}
                    />
                </Pagination>

                <Popup show={show}>
                    <PopupContent ref={ref}>
                        <Head>
                            <PopupTitle>Trade result</PopupTitle>
                            <img
                                src="/images/home/close.svg"
                                alt=""
                                onClick={() => setShow(false)}
                            />
                        </Head>
                        <PopupBottom>
                            <Column>
                                <p>Asset</p>
                                <img src="/images/home/bitcoin.svg" alt="" />
                            </Column>
                            <Column>
                                <p>Direction</p>
                                <svg
                                    style={{
                                        position: 'relative',
                                        bottom: '-6px',
                                    }}
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M16 12L22 20H10L16 12Z"
                                        fill="var(--green)"
                                    />
                                </svg>
                            </Column>
                            <Column>
                                <p>Timeframe</p>
                                <span>15 min</span>
                            </Column>
                            <PopupButton>Claim $100</PopupButton>
                        </PopupBottom>
                    </PopupContent>
                </Popup>
            </div>
        </StyledHome>
    )
}

const DataTable = styled.div`
    span {
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .center {
        text-align: center;
    }
`

const DataHeader = styled.div`
    display: grid;
    grid-template-columns: 32px 51px 84px repeat(3, 1fr);
    gap: 32px;

    span {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 140%;
        text-align: center;
        color: #8a8f99;

        &.last {
            justify-content: flex-end;
        }
    }

    @media screen and (max-width: 768px) {
        gap: 24px;

        grid-template-columns: 32px 32px 84px repeat(3, 1fr);

        .mobile-no-color {
            color: transparent;
        }
    }

    @media screen and (max-width: 480px) {
        padding: 0 16px 0 8px;
        grid-template-columns: repeat(4, 1fr);

        .mobile-display-none {
            display: none;
        }
    }
`

const DataContent = styled.div`
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    row-gap: 36px;

    span {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 140%;
        text-align: center;
        color: ${({ theme }) => theme.faqColor};

        &.last {
            justify-content: flex-end;
        }

        &.price-increase {
            color: var(--green);
        }

        &.price-drop {
            color: var(--pink);
        }
    }
`

const DataContentItem = styled.div`
    display: grid;
    gap: 32px;
    grid-template-columns: 32px 51px 84px repeat(3, 1fr);

    @media screen and (max-width: 768px) {
        gap: 24px;
        grid-template-columns: 32px 32px 84px repeat(3, 1fr);
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: repeat(4, 1fr);
        padding: 0 16px 0 8px;

        .mobile-display-none {
            display: none;
        }
    }
`

export default Home
