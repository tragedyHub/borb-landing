import styled from "styled-components";

const SupplyPage = () => {
  return (
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
        <div className="wrapper">
          <SettingsTitle margin="9px">Supply</SettingsTitle>
          <div className="input-wrapper">
            <input type="number" className="input" placeholder="Amount" />
          </div>
        </div>
        <div className="wrapper">
          <SettingsTitle margin="9px">Receive</SettingsTitle>
          <div className="input-wrapper">
            <input type="number" className="input" />
          </div>
        </div>
      </InputContainer>
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
  display: flex;

  position: relative;
  gap: 57px;

  margin-bottom: 30px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #e9ecf2;
  }
`;

const Tab = styled.div<{ active?: boolean }>`
  padding: 8px 4px;
  position: relative;

  border-bottom: ${(props) =>
    props.active ? "2px solid #3fe7be" : "2px solid transparent"};

  span {
    color: ${(props) => (props.active ? "#3fe7be" : "#8a8f99")};
    font-weight: ${(props) => (props.active ? "600" : "400")};
    font-size: 14px;
    line-height: 140%;
    font-size: 14px;
    line-height: 140%;
  }
`;

const SettingsTitle = styled.span<{ margin: string }>`
  font-family: "Inter";
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  margin-bottom: ${(props) => props.margin};
  color: #8a8f99;
`;

const InputContainer = styled.div`
  gap: 16px;
  display: flex;

  .title {
    font-family: "Inter";
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
  }

  .input-wrapper {
    width: 340px;
    border: 1px solid #e9ecf2;
    border-radius: 8px;
    padding: 12px;
    display: flex;
  }

  .input {
    font-family: "Inter";
    font-weight: 400;
    font-size: 21px;
    /* line-height: 30px; */
    color: #c2c5cc;
    text-align: right;

    margin-left: auto;
    outline: none;

    &::placeholder {
      font-family: "Inter";
      font-weight: 400;
      font-size: 21px;
      line-height: 30px;
      color: #c2c5cc;
      text-align: right;
    }
  }
`;

const SelectWrapper = styled.div`
  

`;

export { SupplyPage };
