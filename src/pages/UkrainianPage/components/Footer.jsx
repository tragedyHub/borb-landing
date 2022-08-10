import React from "react";
import styled from "styled-components";
import Container from "../../../common/Container";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Grid>
          <Logo>
            <img src="/assets/logo.svg" alt="" />
            <p>BorB</p>
          </Logo>
          <Column>
            <Title>Company</Title>
            <Link href="/">Blog</Link>
            <Link href="/">Contact</Link>
            <Link href="/">Careers</Link>
            <Link href="/">Privacy Policy</Link>
            <Link href="/">News</Link>
          </Column>
          <Column>
            <Title>Social</Title>
            <Link href="/">Facebook</Link>
            <Link href="/">Instagram</Link>
            <Link href="/">LinkedIn</Link>
            <Link href="/">Twitter</Link>
          </Column>
          <Column>
            <Title>Product</Title>
            <Link href="/">Help Center</Link>
            <Link href="/">FAQ for Finance Professionals</Link>
            <Link href="/">Regulatory</Link>
            <Link href="/">Trading Hours</Link>
            <Link href="/">Market Calendar</Link>
          </Column>
          <Column>
            <Title>Data</Title>
            <Link href="/">API Documentation</Link>
            <Link href="/">Market Data</Link>
            <Link href="/">Fed Forecast</Link>
            <Link href="/">Economic Calendar</Link>
          </Column>
        </Grid>
        <Bottom>
          <p>© 2022 BorB</p>
          <a href="/">Cookie Policy</a>
        </Bottom>
      </Container>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer``;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 107px 92px 86px 197px 128px;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 64px;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    grid-template-columns: 107px 92px;
    grid-gap: 60px;
  }
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h6`
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 600;
`;
const Link = styled.a`
  color: var(--grey);
  opacity: 0.8;
  font-size: 14px;
  font-weight: 400;
  transition: 0.2s all ease;
  &:nth-child(n + 2) {
    margin-top: 12px;
  }

  &:hover,
  &:active {
    opacity: 1;
  }
`;
const Logo = styled.a`
  display: flex;
  align-items: center;
  p {
    font-weight: 600;
    font-size: 32px;
    margin-left: 8px;
  }
`;
const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 61px;
  border-top: 1px solid #dadee6;
  p {
    font-weight: 400;
    font-size: 14px;
  }
  a {
    color: var(--grey);
    opacity: 0.8;
    font-size: 14px;
    font-weight: 400;
    &:hover,
    &:active {
      opacity: 1;
    }
  }
`;
