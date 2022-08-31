import styled from 'styled-components'

const StyledEarn = styled.div`
    margin-bottom: 60px;

    .container {
        @media screen and (max-width: 768px) {
            padding: 0;
            .faq {
                padding: 0 16px;
            }
        }
    }
    @media screen and (max-width:768px) {
        margin-bottom: 48px;
    }
`

const Title = styled.h4`
    font-weight: 600;
    font-size: 36px;
    line-height: 50px;

    @media screen and (max-width: 768px) {
        padding: 0 16px;
        font-size: 32px;
        line-height: 39px;
    }
`

const SubText = styled.p`
    margin-bottom: 48px;
    font-size: 14px;
    font-weight: 400;
    color: var(--grey60);

    @media screen and (max-width: 1280px) {
        margin-bottom: 32px;
    }
    @media screen and (max-width: 768px) {
        padding: 0 16px;
        margin-bottom: 24px;
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 162px;
    grid-gap: 12px;
`

const Card = styled.div`
    padding: 24px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    background: ${(props) => props.theme.inputWrapperDisabledColor};
`

const Row = styled.div`
    display: flex;
    align-items: center;
`

const RowText = styled.div`
    margin-left: 6px;
    color: var(--grey60);
    font-size: 14px;
    font-weight: 400;
`

const CardLink = styled.p``

const CardSubLink = styled.div`
    margin-top: auto;
    display: flex;
    align-items: center;
    cursor: pointer;

    p {
        color: var(--green);
        font-size: 14px;
        font-weight: 600;
        margin-right: 4px;
    }
`

const CardContentText = styled.p`
    margin-top: 8px;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 34px;
    color: ${(props) => props.theme.arrowBackgroundColor};
`
const SmallCardContent = styled.p`
    font-weight: 600;
    font-size: 16px;
    margin-top: 16px;
    margin-bottom: 36px;
    max-width: 231px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: ${(props) => props.theme.arrowBackgroundColor};
`

const RewardTitle = styled.h6`
    margin-top: 62px;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 22px;
    color: ${(props) => props.theme.arrowBackgroundColor};
    @media screen and (max-width: 768px) {
        padding: 0 16px;
        margin: 40px 0 24px;
    }
`

const TableGrid = styled.div`
    @media screen and (max-width: 768px) {
        padding: 0 16px;
        margin-bottom: 40px;
    }
    @media screen and (max-width: 480px) {
        display: none;
    }
`

const TableHead = styled.div``

const TableRow = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 24px;
`

const Item = styled.div`
    display: flex;
    align-items: center;
    p {
        font-weight: 400;
        font-size: 14px;
        color: ${(props) => props.theme.arrowBackgroundColor};

        &:nth-child(2) {
            margin-left: 20%;
        }
        &:nth-child(3) {
            margin-left: auto;
        }
    }
`

const Pagination = styled.div`
    display: grid;
    place-content: center;
    grid-template-columns: 32px 32px;
    grid-column-gap: 24px;
    margin: 32px 0 60px;
    @media screen and (max-width: 1280px) {
        justify-content: space-between;
    }
    @media screen and (max-width: 768px) {
        margin: 20px 0 40px;
    }
    img {
        cursor: pointer;
    }
`
const AdaptiveTable = styled.div`
    @media screen and (min-width: 480px) {
        display: none;
    }
    padding: 0 16px;
    .titles {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 16px;
        p {
            color: var(--grey60);
            font-weight: 400;
            font-size: 12px;
        }
    }
    .row {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        &:nth-child(n + 2) {
            margin-top: 24px;
        }
    }
    .left {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p {
            font-weight: 400;
            font-size: 14px;
            max-width: 184px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
        span {
            margin-top: 4px;
            text-transform: uppercase;
            font-weight: 400;
            font-size: 14px;
        }
    }
    .cost {
        font-weight: 400;
        font-size: 14px;
    }
`

export {
    AdaptiveTable,
    Pagination,
    Item,
    TableRow,
    TableGrid,
    TableHead,
    RewardTitle,
    StyledEarn,
    Title,
    CardContentText,
    SmallCardContent,
    SubText,
    Grid,
    Card,
    Row,
    RowText,
    CardLink,
    CardSubLink,
}
