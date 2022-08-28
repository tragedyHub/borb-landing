import styled from 'styled-components'

const Title = styled.div`
    margin: 48px 0 24px;
    font-weight: 600;
    font-size: 24px;
`

const Pagination = styled.div`
    margin: 38px auto 0;
    img {
        cursor: pointer;
    }
    img:not(:last-child) {
        margin-right: 24px;
    }
`

const Table = styled.table`
    .last {
        text-align: right;
    }
    thead {
        height: 38px;
    }
    th {
        color: var(--grey60);
        font-size: 12px;
        font-weight: 400;
    }

    td { 
        font-weight: 400;
        font-size: 14px;
        text-align: center;
    }

    .last.green { 
        color: var(--green);
    }
`

export { Title, Pagination, Table }
