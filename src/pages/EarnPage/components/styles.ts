import styled from 'styled-components'

const StyledEarn = styled.div`

    .container {
        @media screen and (max-width: 768px) {
            padding: 0;
        }
    }
`

const Title = styled.h4`
    font-weight: 600;
    font-size: 36px;
    line-height: 50px;

    @media screen and (max-width: 768px) {
        padding: 0 16px;
    }
`

const SubText = styled.p`
    margin-bottom: 48px;
    font-size: 14px;
    font-weight: 400;
    color: var(--grey60);

    @media screen and (max-width: 768px) {
        padding: 0 16px;
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
    background: var(--grey99);
`

const Row = styled.div`
    display: flex;
    align-items: center;
`

const RowText = styled.div`
    margin-left: 6px;
    color: var(--grey60);
    font-size: 14px;
    margin-bottom: 8px;
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
`
const SmallCardContent = styled.p`
    font-weight: 600;
    font-size: 16px;
    margin-top: 16px;
`

const RewardTitle = styled.h6`
    margin-top: 62px;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 22px;
    @media screen and (max-width: 768px) {
        padding: 0 16px;
    }
`

const TableGrid = styled.div`
    @media screen and (max-width: 768px) {
        padding: 0 16px;
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
        
        &:nth-child(2){
            margin-left: 20%;
        }
        &:nth-child(3){
            margin-left: auto;
        }
    }
`

export {
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
