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

    @media screen and (max-width: 1280px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
`

const Table = styled.table`
    width: 100%;
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
        color: ${(props) => props.theme.arrowBackgroundColor};
    }

    .last.green {
        color: var(--green);
    }

    .first_td_adaptive {
        display: none;
    }
    .first,
    .first_td {
        text-align: left;
    }
    .first_td {
        padding-left: 7px;
        display: flex;
        align-items: center;
    }
    @media screen and (max-width: 768px) {
        .adaptive {
            display: none;
        }

        .first_td_adaptive {
            margin-left: 8px;
            display: inline-block;
        }
    }
    @media screen and (max-width: 480px) {
        padding: 0 16px;
    }
`

export { Title, Pagination, Table }
