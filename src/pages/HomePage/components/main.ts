import styled from 'styled-components'

const StyledHome = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 48px;
`

const Row = styled.div`
    display: grid;
    grid-template-columns: 556px 1fr;
    grid-gap: 48px;
    justify-content: space-between;
`
const Left = styled.div``
const Right = styled.div`
    padding: 24px;
    background: var(--grey99);
    border-radius: 16px;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
`
const Counter = styled.h4`
    margin-bottom: 32px;
    color: var(--green);
    font-size: 60px;
    font-weight: 600;
`

const Grid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 32px;
    justify-content: space-between;
    grid-gap: 6px;
    margin-top: 24px;
    margin-bottom: 64px;
`

const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--grey60);
    font-size: 14px;
    font-weight: 400;
    background: #e9ecf2;
    border-radius: 80px;
    cursor: pointer;
`

const Buttons = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 8px;
    width: 100%;
`

const Button = styled.button`
    border-radius: 60px;
    height: 40px;
    width: 100%;

    background: ${(props: any) => (props.red ? 'var(--pink)' : 'var(--green)')};
`

const HelperRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 12px;
`

const Text = styled.div`
    color: var(--grey60);
    font-size: 14px;
    font-weight: 400;
`

export {
    Text,
    HelperRow,
    Row,
    Button,
    Buttons,
    StyledHome,
    Left,
    Right,
    Counter,
    Grid,
    Card,
}
