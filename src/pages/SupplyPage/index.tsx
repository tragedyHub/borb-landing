import styled from 'styled-components'
import { ReactComponent as InfoIcon } from '../../assets/info-icon.svg'
import { ReactComponent as USDCIcon } from '../../assets/usdc-icon.svg'
import { ReactComponent as Arrow } from '../../assets/arrow-down-icon.svg'
import { Faq } from '../../components/Faq'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { useRef, useState } from 'react'
import { SelectBody } from '../HomePage'
import { useOnClickOutside } from '../../lib/useOnClickOutside'
let data = [
    {
        name: 'usdt',
        img: '/images/earn/usdt_logo.svg',
    },
    {
        name: 'usdc',
        img: '/images/earn/usdc_logo.svg',
    },
]
const SupplyPage = () => {
    const isMobile = useMediaQuery('(max-width: 768px)')
    const [popup, setPopup] = useState(false)
    const [itemId, setItemId] = useState(0)
    const reff = useRef(null)
    useOnClickOutside(reff, () => setPopup(false))

    return (
        <StyledSupply>
            <div className="container">
                <Title>Supply crypto and earn interest</Title>
                <Subtitle>
                    Supply your tokens and get Token+ while earning interest
                </Subtitle>
                <TabContainer>
                    <Tab active>
                        <span>Supply</span>
                    </Tab>
                    <Tab>
                        <span>Withdraw</span>
                    </Tab>
                </TabContainer>
                <InputContainer>
                    <InputWrapper>
                        <TitleContainer>
                            <SettingsTitle margin="9px">Supply</SettingsTitle>
                            {isMobile && (
                                <SettingsTitle>Balance: 263</SettingsTitle>
                            )}
                        </TitleContainer>
                        <div className="input-wrapper">
                            <SelectWrapper
                                onClick={() => {
                                    setPopup(true)
                                }}
                            >
                                <CurrencyWrapper>
                                    <img src={data[itemId].img} alt="" />
                                </CurrencyWrapper>
                                <span>{data[itemId].name}</span>
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
                            {popup && (
                                <SelectBody ref={reff}>
                                    {data.map((item, index) => (
                                        <div
                                            className="select_card"
                                            onClick={() => {
                                                setItemId(index)
                                                setPopup(false)
                                            }}
                                        >
                                            <img src={item.img} alt="" />
                                            <p>{item.name}</p>
                                        </div>
                                    ))}
                                </SelectBody>
                            )}

                            <input
                                type="number"
                                className="input"
                                placeholder="Amount"
                            />
                        </div>
                    </InputWrapper>
                    <InputWrapper disabled>
                        <SettingsTitle margin="9px">Receive</SettingsTitle>

                        <div className="input-wrapper">
                            <SelectWrapper>
                                <CurrencyWrapper>
                                    <USDCIcon />
                                </CurrencyWrapper>
                                <span>USTC+</span>
                            </SelectWrapper>
                            <input
                                type="number"
                                className="input"
                                disabled
                                value={0}
                            />
                        </div>
                    </InputWrapper>
                </InputContainer>
                {!isMobile && (
                    <SettingsTitle margin="24px">Balance: 263</SettingsTitle>
                )}
                <Btn>Supply USDC</Btn>
                <PurchaseWrapper>
                    <PurchaseDataList>
                        <PurchaseDataItem>
                            <SettingsTitle>Exchange rate:</SettingsTitle>
                        </PurchaseDataItem>
                        <PurchaseDataItem>
                            <SettingsTitle>Deposit fee:</SettingsTitle>
                        </PurchaseDataItem>
                        <PurchaseDataItem>
                            <SettingsTitle>Projected APY:</SettingsTitle>
                        </PurchaseDataItem>
                    </PurchaseDataList>
                    <PurchaseDataList>
                        <PurchaseDataItem>
                            <SettingsTitle>
                                1USDC=1USDC+
                                <InfoIcon />
                            </SettingsTitle>
                        </PurchaseDataItem>
                        <PurchaseDataItem>
                            <SettingsTitle>
                                0%
                                <InfoIcon />
                            </SettingsTitle>
                        </PurchaseDataItem>
                        <PurchaseDataItem>
                            <SettingsTitle>
                                5.79%
                                <InfoIcon />
                            </SettingsTitle>
                        </PurchaseDataItem>
                    </PurchaseDataList>
                </PurchaseWrapper>
                <Faq />
            </div>
        </StyledSupply>
    )
}

const StyledSupply = styled.div`
    margin-bottom: 60px;
    .input_wrapper { 
        position: relative;
    }
    @media screen and (max-width: 768px) {
        margin-bottom: 32px;
    }
`

const Title = styled.h1`
    font-family: 'Inter';
    font-weight: 600;
    font-size: 36px;
    line-height: 140%;
    color: ${(props) => props.theme.titleColor};
    margin-bottom: 4px;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

const Subtitle = styled.p`
    font-family: 'Inter';
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    color: ${(props) => props.theme.subtitleColor};
    margin-bottom: 48px;

    @media screen and (max-width: 1000px) {
        margin-bottom: 40px;
    }

    @media screen and (max-width: 480px) {
        margin-bottom: 24px;
    }
`

export const TabContainer = styled.div`
    display: flex;
    position: relative;
    gap: 57px;
    margin-bottom: 30px;
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: ${(props) => props.theme.tabBorderColor};
    }
    @media screen and (max-width: 768px) {
        gap: 48px;
    }

    @media screen and (max-width: 480px) {
        gap: 0;
        justify-content: space-between;
    }
`

export const Tab = styled.div<{ active?: boolean }>`
    padding: 8px 4px;
    position: relative;
    cursor: pointer;

    border-bottom: ${(props) =>
        props.active ? '2px solid #3fe7be' : '2px solid transparent'};

    span {
        color: ${(props) => (props.active ? '#3fe7be' : '#8a8f99')};
        font-weight: ${(props) => (props.active ? '600' : '400')};
        font-size: 14px;
        line-height: 140%;
        font-size: 14px;
        line-height: 140%;
        display: flex;
        align-items: center;
    }
    h3 {
        color: var(--green);
        font-weight: 400;
        font-size: 14px;
        margin-left: 5px;
    }
`

export const SettingsTitle = styled.span<{ margin?: string }>`
    font-family: 'Inter';
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    margin-bottom: ${(props) => props.margin ?? '0px'};
    color: #8a8f99;
    display: flex;

    svg {
        margin-left: 8px;
        margin-top: 3px;
    }
`

const InputContainer = styled.div`
    gap: 16px;
    display: flex;
    margin-bottom: 12px;

    .title {
        font-family: 'Inter';
        font-weight: 400;
        font-size: 14px;
        line-height: 140%;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        margin-bottom: 40px;
    }
`

export const InputWrapper = styled.div<{ disabled?: boolean }>`
    position: relative;
    .wrapper {
        display: flex;
        flex-direction: column;
    }

    .input-wrapper {
        position: relative;
        width: 340px;
        border: 1px solid #e9ecf2;
        border: ${({ disabled, theme }) =>
            disabled
                ? `1px solid ${theme.inputDisabledBorderColor}`
                : `1px solid ${theme.inputBorderColor}`};

        border-radius: 8px;
        padding: 12px;
        display: flex;

        background-color: ${({ disabled, theme }) =>
            disabled
                ? theme.inputWrapperDisabledColor
                : theme.inputWrapperColor};

        @media screen and (max-width: 786px) {
            width: 100%;
        }
    }

    .input {
        font-family: 'Inter';
        font-weight: 400;
        font-size: 21px;
        color: var(--grey80);
        text-align: right;
        width: 100%;

        margin-left: auto;
        outline: none;

        &::placeholder {
            font-family: 'Inter';
            font-weight: 400;
            font-size: 21px;
            line-height: 30px;
            color: ${(props) => props.theme.inputPlaceholderColor};
            text-align: right;
        }
    }

    @media screen and (max-width: 786px) {
        width: 100%;
        .input {
            width: 100%;
        }
    }
`

const TitleContainer = styled.div`
    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: space-between;
        width: 340px;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

export const SelectWrapper = styled.div`
    display: flex;
    align-items: center;

    span {
        font-family: 'Inter';
        font-weight: 400;
        text-transform: uppercase;
        font-size: 14px;
        line-height: 140%;
        color: ${(props) => props.theme.selectColor};
    }
    path {
        fill: ${(props) => props.theme.arrowBackgroundColor};
    }
`

export const CurrencyWrapper = styled.div`
    margin-right: 4px;
    display: flex;
    justify-content: center;
`

const Btn = styled.button`
    background: #3fe7be;
    border-radius: 8px;
    padding: 13px 48px;
    font-family: 'Inter';
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    color: #238069;
    align-self: flex-start;
    margin-bottom: 24px;

    @media screen and (max-width: 1000px) {
        margin-bottom: 32px;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

const PurchaseWrapper = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 80px;
`

const PurchaseDataList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 8px;
`
const PurchaseDataItem = styled.li``

const ArrowIcon = styled(Arrow)`
    path {
        fill: ${(props) => props.theme.arrowBackgroundColor};
    }
`

export { SupplyPage }
