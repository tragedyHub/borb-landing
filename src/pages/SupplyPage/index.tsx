import styled from 'styled-components'
import { ReactComponent as InfoIcon } from '../../assets/info-icon.svg'
import { ReactComponent as USDCIcon } from '../../assets/usdc-icon.svg'
import { ReactComponent as Arrow } from '../../assets/arrow-down-icon.svg'
import { Faq } from '../../components/Faq'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { useRef, useState } from 'react'
import { SelectBody } from '../HomePage'
import { useOnClickOutside } from '../../lib/useOnClickOutside'
import { smallList } from '../../lib/data'

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
                                    <img src={smallList[itemId].img} alt="" />
                                </CurrencyWrapper>
                                <span>{smallList[itemId].name}</span>
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
                                    {smallList.map((item, index) => (
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
                                    {itemId === 0 ? (
                                        <img src={smallList[0].img} />
                                    ) : (
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <rect
                                                width="20"
                                                height="20"
                                                rx="10"
                                                fill="#2775CA"
                                            />
                                            <path
                                                className="colored"
                                                d="M12.7498 11.5831C12.7498 10.1248 11.8748 9.6248 10.1248 9.4165C8.87484 9.2498 8.62484 8.9165 8.62484 8.3331C8.62484 7.7497 9.04154 7.3748 9.87484 7.3748C10.6248 7.3748 11.0415 7.6248 11.2498 8.2498C11.2915 8.3748 11.4165 8.4581 11.5415 8.4581H12.2081C12.3748 8.4581 12.4998 8.3331 12.4998 8.1665V8.1248C12.3331 7.2081 11.5831 6.4998 10.6248 6.4165V5.4165C10.6248 5.2498 10.4998 5.1248 10.2915 5.0831H9.66654C9.49984 5.0831 9.37484 5.2081 9.33314 5.4165V6.3748C8.08314 6.5415 7.29154 7.3748 7.29154 8.4165C7.29154 9.7915 8.12484 10.3331 9.87484 10.5415C11.0415 10.7498 11.4165 10.9998 11.4165 11.6665C11.4165 12.3332 10.8331 12.7915 10.0415 12.7915C8.95814 12.7915 8.58314 12.3331 8.45814 11.7081C8.41654 11.5415 8.29154 11.4581 8.16654 11.4581H7.45814C7.29154 11.4581 7.16654 11.5831 7.16654 11.7498V11.7915C7.33314 12.8331 7.99984 13.5831 9.37484 13.7915V14.7915C9.37484 14.9581 9.49984 15.0831 9.70814 15.1248H10.3331C10.4998 15.1248 10.6248 14.9998 10.6665 14.7915V13.7915C11.9165 13.5831 12.7498 12.7081 12.7498 11.5831Z"
                                                fill="white"
                                            />
                                            <path
                                                className="colored"
                                                d="M7.87484 15.9581C4.62484 14.7915 2.95814 11.1665 4.16654 7.9581C4.79154 6.2081 6.16654 4.8748 7.87484 4.2498C8.04154 4.1665 8.12484 4.0415 8.12484 3.8331V3.2498C8.12484 3.0831 8.04154 2.9581 7.87484 2.9165C7.83314 2.9165 7.74984 2.9165 7.70814 2.9581C3.74984 4.2081 1.58314 8.4165 2.83314 12.3748C3.58314 14.7081 5.37484 16.4998 7.70814 17.2498C7.87484 17.3331 8.04154 17.2498 8.08314 17.0831C8.12484 17.0415 8.12484 16.9998 8.12484 16.9165V16.3331C8.12484 16.2081 7.99984 16.0415 7.87484 15.9581ZM12.2915 2.9581C12.1248 2.8748 11.9581 2.9581 11.9165 3.1248C11.8748 3.1665 11.8748 3.2081 11.8748 3.2915V3.8748C11.8748 4.0415 11.9998 4.2081 12.1248 4.2915C15.3748 5.4581 17.0415 9.0831 15.8331 12.2915C15.2081 14.0415 13.8331 15.3748 12.1248 15.9998C11.9581 16.0831 11.8748 16.2081 11.8748 16.4165V16.9998C11.8748 17.1665 11.9581 17.2915 12.1248 17.3331C12.1665 17.3331 12.2498 17.3331 12.2915 17.2915C16.2498 16.0415 18.4165 11.8331 17.1665 7.8748C16.4165 5.4998 14.5831 3.7081 12.2915 2.9581Z"
                                                fill="white"
                                            />
                                        </svg>
                                    )}
                                </CurrencyWrapper>
                                <span>{itemId === 0 ? 'USDT+' : 'USDC+'}</span>
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
                <Btn>Supply {smallList[itemId].name.toUpperCase()}</Btn>
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
        color: ${(props) => props.theme.selectColor};
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

    .colored {
        fill: #fff;
    }
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
    transition: 0.2s all ease;
    @media screen and (max-width: 1000px) {
        margin-bottom: 32px;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
    }
    &:hover,
    &:active {
        color: #fff;
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
