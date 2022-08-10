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

  console.log("show", show);

  return (
    <StyledFaq>
      <Grid>
        {data.map((card) => (
          <Block>
            <Row
              className={show === card.id ? `active` : ``}
              onClick={() => setShow(card.id)}
            >
              <Title>{card.name}</Title>
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
  border-bottom: 1px solid var(--grey);
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
const Text = styled.p``;
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
