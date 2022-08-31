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
import { Pagination, Table, Title } from './components/bottom'
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
                <Table>
                    <thead>
                        <tr>
                            <th className="first">Asset</th>
                            <th className="adaptive">Direction</th>
                            <th>Open</th>
                            <th>Close</th>
                            <th>Chart</th>
                            <th className="last">Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        {array.map((item) => (
                            <tr className="row">
                                <td className="first_td">
                                    <img
                                        src="/images/home/bitcoin.svg"
                                        alt=""
                                    />
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
                                </td>
                                <td className="adaptive">
                                    <svg
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
                                </td>
                                <td>$19,2587.45</td>
                                <td>00:47</td>
                                <td>
                                    <img src="/images/home/Chart.png" alt="" />
                                </td>
                                <td className="green last">+266.454</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

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

export default Home
