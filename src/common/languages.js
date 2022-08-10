import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      head_title: "Bullish or Bearish?",
      head_subtitle_first_part: `Predict if the price will`,
      head_subtitle_second_part: `go up or down & earn`,
      head_btn: "Launch dApp",

      how_it_works_section: "How it works",
      how_it_works_first_item: "Choose a timeframe",
      how_it_works_second_item: "Enter amount",
      how_it_works_third_item: "Go up or down",

      trade_on_the_future_title: "Trade on the future",
      trade_on_the_future_subtitle: "start trading",
    },
  },
  fr: {
    translation: {
      head_title: "Haussier ou baissier ?",
      head_subtitle_first_part: `Prédisez si le prix`,
      head_subtitle_second_part: `monter ou descendre et gagner`,
      head_btn: "Lancer la dApp",

      how_it_works_section: "Comment ça fonctionne",
      how_it_works_first_item: "Choisissez une période",
      how_it_works_second_item: "Entrer le montant",
      how_it_works_third_item: "Monter ou descendre",

      trade_on_the_future_title: "Tradez sur l'avenir",
      trade_on_the_future_subtitle: "commencer à négocier",
    },
  },
  ru: {
    translation: {
      head_title: "Бычий или медвежий?",
      head_subtitle_first_part: `Определи правильно, пойдёт цена`,
      head_subtitle_second_part: `вверх или вниз и заработай`,
      head_btn: "Перейти в dApp",

      how_it_works_section: "Как это работает",
      how_it_works_first_item: "Выбери таймфрейм",
      how_it_works_second_item: "Введи сумму",
      how_it_works_third_item: "Определи направление",

      trade_on_the_future_title: "Торгуй на будущее",
      trade_on_the_future_subtitle: "Начать торговлю",
    },
  },
  ja: {
    translation: {
      head_title: "強気か弱気か?",
      head_subtitle_first_part: `価格が上がるかどうかを予測する`,
      head_subtitle_second_part: `上下して 85% を獲得`,
      head_btn: "dAppを起動",

      how_it_works_section: "使い方",
      how_it_works_first_item: "時間枠を選択してください",
      how_it_works_second_item: "金額を入力します",
      how_it_works_third_item: "上がるか下がる",

      trade_on_the_future_title: "将来の取引",
      trade_on_the_future_subtitle: "取引開始",
    },
  },
  ko: {
    translation: {
      head_title: "강세 또는 약세?",
      head_subtitle_first_part: `가격이 상승할지 예측`,
      head_subtitle_second_part: `오르거나 내리고 85% 를 벌다`,
      head_btn: "dApp 실행",

      how_it_works_section: "작동 방식",
      how_it_works_first_item: "기간선택",
      how_it_works_second_item: "금액을 입력하세요",
      how_it_works_third_item: "위로또는아래로이동",

      trade_on_the_future_title: "미래에 대한 거래",
      trade_on_the_future_subtitle: "거래 시작",
    },
  },
  vn: {
    translation: {
      head_title: "Tăng hay giảm?",
      head_subtitle_first_part: `Dự đoán xem giá sẽ`,
      head_subtitle_second_part: `tăng hoặc giảm và kiếm`,
      head_btn: "Khởi động dApp",

      how_it_works_section: "Làm thế nào nó hoạt động",
      how_it_works_first_item: "Chọn khung thời gian",
      how_it_works_second_item: "Nhập số tiền",
      how_it_works_third_item: "Đi lên hoặc xuống",

      trade_on_the_future_title: "Giao dịch về tương lai",
      trade_on_the_future_subtitle: "bắt đầu giao dịch",
    },
  },
  pt: {
    translation: {
      head_title: "Alta ou Baixa?",
      head_subtitle_first_part: `Preveja se o preço`,
      head_subtitle_second_part: `suba ou desça e ganhe`,
      head_btn: "Abrir dApp",

      how_it_works_section: "Como funciona",
      how_it_works_first_item: "Escolha um prazo",
      how_it_works_second_item: "Insira o valor",
      how_it_works_third_item: "Subir ou descer",

      trade_on_the_future_title: "Negocie no futuro",
      trade_on_the_future_subtitle: "começar a negociar",
    },
  },
  zh: {
    translation: {
      head_title: "看涨还是看跌?",
      head_subtitle_first_part: `预测价格是否会`,
      head_subtitle_second_part: `上升或下降并赚取`,
      head_btn: "启动dApp",

      how_it_works_section: "这个怎么运作",
      how_it_works_first_item: "选择时间范围",
      how_it_works_second_item: "输入金额",
      how_it_works_third_item: "向上或向下",

      trade_on_the_future_title: "交易未来",
      trade_on_the_future_subtitle: "开始交易",
    },
  },
  es: {
    translation: {
      head_title: "¿Alcista o bajista?",
      head_subtitle_first_part: `Prediga si el precio`,
      head_subtitle_second_part: `sube o baja y gana el`,
      head_btn: "Ejecutar dApp",

      how_it_works_section: "Cómo funciona",
      how_it_works_first_item: "Elige un marco de tiempo",
      how_it_works_second_item: "Ingrese la cantidad",
      how_it_works_third_item: "subir o bajar",

      trade_on_the_future_title: "Comercio en el futuro",
      trade_on_the_future_subtitle: "comienza a negociar",
    },
  },
  ind: {
    translation: {
      head_title: "Bullish atau Bearish?",
      head_subtitle_first_part: `Memprediksi jika harga akan`,
      head_subtitle_second_part: `naik atau turun & dapatkan`,
      head_btn: "Luncurkan dApp",

      how_it_works_section: "Bagaimana itu bekerja",
      how_it_works_first_item: "Pilih jangka waktu",
      how_it_works_second_item: "Masukan jumlah",
      how_it_works_third_item: "Naik atau turun",

      trade_on_the_future_title: "Berdagang di masa depan",
      trade_on_the_future_subtitle: "mulai berdagang",
    },
  },
  ua: {
    translation: {
      head_title: "Бичачий чи ведмежий?",
      head_subtitle_first_part: `Визнач правильно, піде ціна`,
      head_subtitle_second_part: `вгору або вниз і зароби`,
      head_btn: "Перейти до dApp",

      how_it_works_section: "Як це працює",
      how_it_works_first_item: "Вибери таймфрейм",
      how_it_works_second_item: "Введи суму",
      how_it_works_third_item: "Визнач напрямок",

      trade_on_the_future_title: "Торгуй на майбутнє",
      trade_on_the_future_subtitle: "Розпочати торгівлю",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
