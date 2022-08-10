import React from "react";
import Container from "../../../common/Container";
import Banner from "./Banner";
import Faq from "./Faq";
import Offer from "./Offer";
import Work from "./Work";


const Home = () => {
  return (
    <>
      <Container>
        <Offer />
        <Work />
        <Faq />
      </Container>
      <Banner />
    </>
  );
};

export default Home;
