import React from "react";
import Popup from "./components/Popup";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

export const HomePage = () => {
  const [show, setShow] = React.useState(false);

  return (
    <>
      {show && <Popup set={setShow} />}
      <Header set={setShow} state={show}/>
      <Home />
      <Footer />
    </>
  );
};
