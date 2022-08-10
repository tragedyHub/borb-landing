import React from "react";
import styled from "styled-components";
import animationData from "../../../common/settings.json";
import { flatMap } from "../../../common/FlatMap";
import Lottie from "react-lottie";

import { useTranslation } from "react-i18next";

const SpecialComponentForJpAndKo = ({ text, isJapaneseOrKorean }) => {
  let result = text;
  result = result
    .split(" ")
    .map((part) =>
      part === "85%" ? (
        <Percents isJapaneseOrKorean={isJapaneseOrKorean} />
      ) : (
        part + " "
      )
    );

  return <div>{result}</div>;
};

const Offer = () => {
  const [width, setWidth] = React.useState("683px");

  const { t, i18n } = useTranslation();

  const isRussianOrUkrainian = ["ru", "ua"].includes(i18n.language);

  const isJapaneseOrKorean = ["ja", "ko"].includes(i18n.language);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const windowHandler = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth <= 1500 && windowWidth > 768) {
      setWidth("50vw");
    } else if (windowWidth <= 768) {
      setWidth("100%");
    } else {
      setWidth("683px");
    }
  };

  React.useEffect(() => {
    windowHandler();
  }, [window.innerWidth]);

  return (
    <StyledOffer>
      <Column>
        <Title>{t("head_title")}</Title>
        <Text ruOrUa={isRussianOrUkrainian} isJaOrKo={isJapaneseOrKorean}>
          {t("head_subtitle_first_part")}
          <br />
          {isJapaneseOrKorean && (
            <SpecialComponentForJpAndKo
              isJapaneseOrKorean={isJapaneseOrKorean}
              text={t("head_subtitle_second_part")}
            />
          )}
          {!isJapaneseOrKorean && t("head_subtitle_second_part")}

          {!isJapaneseOrKorean && <Percents />}
        </Text>
        <Button>{t("head_btn")}</Button>
      </Column>

      <Lottie options={defaultOptions} width={width} />
    </StyledOffer>
  );
};

const Percents = ({ isJapaneseOrKorean }) => (
  <Span isJaOrKo={isJapaneseOrKorean}>
    <img src="/assets/span_circle.svg" alt="" /> 85%
  </Span>
);

export default Offer;

const StyledOffer = styled.div`
  margin-top: 84px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1500px) {
    margin-top: 100px;
    svg {
      width: 38vw;
      max-width: 583px;
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    svg {
      width: 100%;
    }
  }
`;

const Column = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const Title = styled.h2`
  font-size: 80px;
  font-weight: 600;

  @media screen and (max-width: 1000px) {
    font-size: 60px;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const Text = styled.p`
  margin: 15px 0 30px;
  font-size: 24px;
  font-weight: 400;
  line-height: ${({ ruOrUa, isJaOrKo }) =>
    ruOrUa || isJaOrKo ? "50px" : "initial"};

  @media screen and (max-width: 1000px) {
    font-size: 20px;
    margin: 20px 0;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
    line-height: 170%;
  }
`;

const Button = styled.button`
  padding: 14px 40px;
  background: #00e9be;
  border-radius: 8px;
  transition: 0.2s all ease;
  font-size: 18px;
  @media screen and (max-width: 1000px) {
    font-size: 16px;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
    margin: 0 auto;
  }
  &:hover,
  &:active {
    color: #fff;
  }
`;

export const Span = styled.span`
  position: relative;
  font-size: 24px;
  font-weight: 600;
  margin-left: 20px;
  margin-right: ${({ isJaOrKo }) => (isJaOrKo ? "20px" : "initial")};

  @media screen and (max-width: 1000px) {
    font-size: 20px;
    margin-left: 10px;
    img {
      width: 70px;
    }
  }

  img {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }
`;
