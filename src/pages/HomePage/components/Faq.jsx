import React from "react";
import styled from "styled-components";

const data = [
  {
    id: "1",
    name: "What are event contracts?",
  },
  {
    id: "2",
    name: "How does trading work?",
  },
  {
    id: "3",
    name: "How is the market price determined?",
  },
  {
    id: "4",
    name: "Who am I trading with?",
  },
  {
    id: "5",
    name: "How is Kalshi regulated?",
  },
  {
    id: "6",
    name: "How are customer deposits processed?",
  },
  {
    id: "7",
    name: "Is this gambling?",
  },
];

const Faq = () => {
  const [show, setShow] = React.useState(null);

  const handleShow = (cardId) => () => {
    if (show === cardId) {
      return setShow(null);
    }

    setShow(cardId);
  };

  return (
    <StyledFaq>
      <Grid>
        {data.map((card) => (
          <Block key={card.id}>
            <Row
              state={show === card.id}
              className={show === card.id ? `active` : ``}
              onClick={handleShow(card.id)}
            >
              <Title>{card.name}</Title>
              <Burger state={show === card.id}>
                <div className="hor"></div>
                <div className="ver"></div>
              </Burger>
            </Row>
            <Content state={show === card.id}>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
            </Content>
          </Block>
        ))}
      </Grid>
    </StyledFaq>
  );
};

export default Faq;

const StyledFaq = styled.div``;
const Block = styled.div``;
const Grid = styled.div``;
const Row = styled.div`
  cursor: pointer;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 5px;
  border-bottom: ${(props) => (props.state ? "none" : "1px solid var(--grey)")};
  @media screen and (max-width: 1000px) {
    height: 90px;
  }
  @media screen and (max-width: 768px) {
    height: 80px;
  }
`;
const Content = styled.div`
  display: ${(props) => (props.state ? "block" : "none")};
`;
const Text = styled.p`
  font-size: 18px;
  line-height: 180%;
  @media screen and (max-width: 1000px) {
    font-size: 16px;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
const Title = styled.h5`
  font-size: 24px;
  font-weight: 600;

  @media screen and (max-width: 1000px) {
    font-size: 23px;
  }
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

const Burger = styled.div`
  position: relative;
  display: flex;
  height: 21px;
  width: 21px;
  div {
    border-radius: 10px;
  }
  .hor {
    width: 100%;
    height: 3px;
    background: var(--black);
    margin: auto;
  }
  .ver {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    height: 100%;
    width: 3px;
    background: var(--black);
    display: ${(props) => (props.state ? "none" : "block")};
  }
`;
