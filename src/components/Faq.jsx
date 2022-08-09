import React from 'react'
import styled from 'styled-components'

const data = [
    {
        name: 'What are event contracts?',
        active: true,
    },
    {
        name: 'How does trading work?',
        active: false,
    },
    {
        name: 'How is the market price determined?',
        active: false,
    },
    {
        name: 'Who am I trading with?',
        active: false,
    },
    {
        name: 'How is Kalshi regulated?',
        active: false,
    },
    {
        name: 'How are customer deposits processed?',
        active: false,
    },
    {
        name: 'Is this gambling?',
        active: false,
    },
]

const Faq = () => {
    const [show, setShow] = React.useState(false)

    console.log(show)

    console.log(data)

    return (
        <StyledFaq>
            <Grid>
                {data.map((card) => (
                    <Block>
                        <Row
                            className={card.active ? `active` : ``}
                            onClick={() => (card.active = !card.active)}
                        >
                            <Title>{card.name}</Title>
                        </Row>
                        <Content state={show}>
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </Text>
                        </Content>
                    </Block>
                ))}
            </Grid>
        </StyledFaq>
    )
}

export default Faq

const StyledFaq = styled.div``
const Block = styled.div``
const Grid = styled.div``
const Row = styled.div`
    cursor: pointer;
    height: 125px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--grey);
    @media screen and (max-width: 1000px) {
        height: 90px;
    }
    @media screen and (max-width: 768px) {
        height: 80px;
    }
`
const Content = styled.div`
    display: ${(props) => (props.state ? 'block' : 'none')};
`
const Text = styled.p``
const Title = styled.h5`
    font-size: 28px;
    font-weight: 600;

    @media screen and (max-width: 1000px) {
        font-size: 23px;
    }
    @media screen and (max-width: 768px) {
        font-size: 18px;
    }
`
