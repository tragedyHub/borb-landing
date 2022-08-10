import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Work = () => {
  const { t } = useTranslation();

  return (
    <StyledWork>
      <img src="/assets/phone.png" alt="" />
      <Column>
        <Title>{t("how_it_works_section")}</Title>
        <Row>
          <Span>1</Span>
          <Text>{t("how_it_works_first_item")}</Text>
        </Row>
        <Row>
          <Span>2</Span>
          <Text>{t("how_it_works_second_item")}</Text>
        </Row>
        <Row>
          <Span>3</Span>
          <Text>{t("how_it_works_third_item")}</Text>
        </Row>
      </Column>
    </StyledWork>
  );
};

export default Work;

const StyledWork = styled.div`
  margin: 157px 0;
  display: flex;
  align-items: center;
  img {
    width: 50%;
    margin-right: 100px;
  }
  @media screen and (max-width: 1500px) {
    margin: 150px 0 100px;
    justify-content: space-around;
    img {
      max-width: 546px;
      width: 40%;
      margin-right: 5vw;
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    margin: 50px 0;
    img {
      margin-right: 0;
      width: 80%;
      margin-top: 50px;
    }
  }
`;

const Column = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 64px 64px 64px;
  grid-gap: 32px;
  @media screen and (max-width: 1000px) {
    grid-gap: 20px;
  }
  @media screen and (max-width: 768px) {
    grid-gap: 10px;
    justify-content: center;
    text-align: center;
  }
`;
const Title = styled.h3`
  font-size: 40px;
  font-weight: 600;
  @media screen and (max-width: 1000px) {
    font-size: 36px;
    margin-bottom: 40px;
  }
  @media screen and (max-width: 768px) {
    font-size: 30px;
    margin-bottom: 0;
  }
`;
const Text = styled.p`
  margin-left: 24px;
  font-size: 24px;
  font-weight: 400;
  @media screen and (max-width: 1000px) {
    font-size: 22px;
    margin-left: 16px;
  }
  @media screen and (max-width: 768px) {
    font-size: 17px;
  }
`;
const Span = styled.div`
  background: #ffffff;
  box-shadow: 0px 6px 16px rgba(197, 200, 207, 0.3);
  border-radius: 100px;
  display: grid;
  place-content: center;
  font-weight: 400;
  font-size: 24px;
  color: #00e9be;
  width: 55px;
  height: 55px;
  @media screen and (max-width: 1000px) {
    width: 48px;
    height: 48px;
    font-size: 20px;
  }
`;
const Row = styled.div`
  display: flex;
  align-items: center;
`;
