import React from 'react'
import styled from 'styled-components'
import {
    CurrencyWrapper,
    InputWrapper,
    SelectWrapper,
    SettingsTitle,
    Tab,
    TabContainer,
} from '../SupplyPage'
import { ReactComponent as USDCIcon } from '../../assets/usdc-icon.svg'
import { ReactComponent as ArrowIcon } from '../../assets/arrow-down-icon.svg'
import {
    Button,
    Buttons,
    Card,
    Counter,
    Grid,
    HelperRow,
    Left,
    Right,
    Row,
    StyledHome,
    Text,
} from './components/main'
import { Pagination, Table, Title } from './components/bottom'

const Home = () => {
    let array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

    return (
        <StyledHome>
            <Row>
                <Left></Left>
                <Right>
                    <div className="content">
                        <Counter>86%</Counter>
                        <InputWrapper>
                            <SettingsTitle margin="9px">Supply</SettingsTitle>
                            <div className="input-wrapper">
                                <SelectWrapper>
                                    <CurrencyWrapper>
                                        <USDCIcon />
                                    </CurrencyWrapper>
                                    <span>USTC</span>
                                    <ArrowIcon />
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
                            <Button>
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
                            <Button red>
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

            <Table>
                <thead>
                    <tr>
                        <th>Asset</th>
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
                            <td>
                                <img src="/images/home/bitcoin.svg" alt="" />
                            </td>
                            <td>
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
        </StyledHome>
    )
}

export default Home
