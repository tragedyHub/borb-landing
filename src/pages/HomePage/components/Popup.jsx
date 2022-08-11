import styled from "styled-components";
import React from "react";
import { useOnClickOutside } from "../../../common/hook";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

const data = [
  {
    name: "English",
    short: "EN",
    url: "https://1inch.io/img/flags/en.png",
  },
  {
    name: "简体中文",
    short: "ZH",
    url: "https://1inch.io/img/flags/zh.png",
  },
  {
    name: "Русский",
    short: "RU",
    url: "https://1inch.io/img/flags/ru.png",
  },
  {
    name: "Français",
    short: "FR",
    url: "https://1inch.io/img/flags/fr.png",
  },
  {
    name: "日本語",
    short: "JA",
    url: "https://1inch.io/img/flags/ja.png",
  },
  {
    name: "Español",
    short: "ES",
    url: "https://1inch.io/img/flags/es.png",
  },
  {
    name: "한국어",
    short: "KO",
    url: "https://1inch.io/img/flags/ko.png",
  },
  {
    name: "Bahasa Indonesia",
    short: "IND",
    url: "https://1inch.io/img/flags/ind.png",
  },
  {
    name: "Tiếng Việt",
    short: "VN",
    url: "https://1inch.io/img/flags/vn.png",
  },
  {
    name: "Українська",
    short: "UA",
    url: "https://1inch.io/img/flags/ua.png",
  },
  {
    name: "Português",
    short: "PT",
    url: "https://1inch.io/img/flags/pt.png",
  },
];

const Popup = ({ set }) => {
  let ref = React.useRef();

  const { i18n } = useTranslation();

  useOnClickOutside(ref, () => set(false));

  const navigate = useNavigate();

  const handleChangeLanguage = (url) => () => {
    i18n.changeLanguage(url);
    set(false);
  };
  return (
    <StyledPopup ref={ref}>
      <div className="head">
        <h4 className="title">Change language</h4>
        <img src="/assets/cross.svg" alt="" onClick={() => set(false)} />
      </div>

      <div className="grid">
        {data.map((card) => (
          <div
            key={card.short}
            className="card"
            onClick={handleChangeLanguage(card.short.toLocaleLowerCase())}
          >
            <img className="card_img" src={card.url} alt="" />
            <p>
              {card.name} &nbsp;-&nbsp; {card.short}
            </p>
          </div>
        ))}
      </div>
    </StyledPopup>
  );
};

export default Popup;

const StyledPopup = styled.div`
  width: 550px;
  padding: 24px;
  box-shadow: 0 5px 20px rgb(0 0 0 / 25%);
  border-radius: 16px;
  position: absolute;
  z-index: 1;
  background: #ffffff;
  right: 50px;
  top: 80px;
  .title {
    font-size: 20px;
  }
  .head {
    padding-bottom: 18px;
    margin-bottom: 24px;
    border-bottom: 1px solid #37445a;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .head img {
    width: 16px;
    height: 16px;
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 24px;
    grid-row-gap: 4px;
  }
  img {
    cursor: pointer;
  }
  .card_img {
    width: 24px;
    height: 24px;
    margin-right: 16px;
  }
  .card {
    padding: 0 16px;
    height: 48px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.2s all ease;
    border: 1px solid transparent;
    &:hover,
    &:active {
      padding: 0 15px;
      color: #fff;
      background: #fff;
      border-color: lightgray;
      border-radius: 8px;
      background: whitesmoke;
    }
  }
  p {
    color: #000;
    font-size: 16px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100vh;
    right: 0;
    top: 0;
    box-sizing: border-box;
    position: fixed;
    overflow-y: scroll;
    .grid {
      grid-template-columns: 1fr;
      grid-gap: 24px;
    }
  }
`;
