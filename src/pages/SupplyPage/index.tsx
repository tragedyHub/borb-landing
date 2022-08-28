import styled from "styled-components";

const SupplyPage = () => {
  return (
    <div>
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
    </div>
  );
};

const Title = styled.h1`
  font-family: "Inter";
  font-weight: 600;
  font-size: 36px;
  line-height: 140%;
  color: #23272b;
  margin-bottom: 4px;
`;

const Subtitle = styled.h2`
  font-family: "Inter";
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #8a8f99;
  margin-bottom: 48px;
`;

const TabContainer = styled.div`
  border-bottom: 1px solid #e9ecf2;
`;

const Tab = styled.div<{ active?: boolean }>`
  padding: 8px 4px;

  span {
    font-weight: ${(props) => (props.active ? "#3fe7be" : "#8a8f99")};
    font-weight: ${(props) => (props.active ? "600" : "400")};
    font-size: 14px;
    line-height: 140%;
    font-size: 14px;
    line-height: 140%;
  }
`;

export { SupplyPage };
