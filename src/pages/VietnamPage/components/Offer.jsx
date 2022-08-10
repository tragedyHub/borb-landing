import React from "react";
import styled from "styled-components";
import animationData from "../../../common/settings.json";
import Lottie from "react-lottie";

const Offer = () => {
  const [width, setWidth] = React.useState("683px");

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
        <Title>Bullish or Bearish?</Title>
        <Text>
          Predict if the price will
          <br /> go up or down & earn{" "}
          <Span>
            <img src="/assets/span_circle.svg" alt="" /> 85%
          </Span>
        </Text>
        <Button>Launch dApp</Button>
      </Column>

      <Lottie options={defaultOptions} width={width} />
    </StyledOffer>
  );
};

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

const Text = styled.p`
  margin: 15px 0 30px;
  font-size: 24px;
  font-weight: 400;
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

const Span = styled.span`
  position: relative;
  font-size: 24px;
  font-weight: 600;
  margin-left: 20px;

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
