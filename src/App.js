import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChinesePage } from "./pages/ChinesePage";
import { EnglishPage } from "./pages/EnglishPage";
import { FrancePage } from "./pages/FrancePage";
import { IndonesianPage } from "./pages/IndonesianPage";
import { JapanesePage } from "./pages/JapanesePage";
import { KoreanPage } from "./pages/KoreanPage";
import { PortuguesePage } from "./pages/PortuguesePage";
import { RussianPage } from "./pages/RussianPage";
import { SpanishPage } from "./pages/SpanishPage";
import { UkrainianPage } from "./pages/UkrainianPage";
import { VietnamPage } from "./pages/VietnamPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EnglishPage />} />
        <Route path="/ru" element={<RussianPage />} />
        <Route path="/ja" element={<JapanesePage />} />
        <Route path="/ko" element={<KoreanPage />} />
        <Route path="/vn" element={<VietnamPage />} />
        <Route path="/pt" element={<PortuguesePage />} />
        <Route path="/zh" element={<ChinesePage />} />
        <Route path="/fr" element={<FrancePage />} />
        <Route path="/es" element={<SpanishPage />} />
        <Route path="/ind" element={<IndonesianPage />} />
        <Route path="/ua" element={<UkrainianPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
