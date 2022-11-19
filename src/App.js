import "./App.css";
//
//import fonctions React
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from "react";
//
//import packages
// import axios from "axios";
//
// import Pages
import Characters from "./pages/Characters";
import CharacterId from "./pages/CharacterId";
import Comics from "./pages/Comics";
import Header from "./components/Header";
import Favoris from "./pages/Favoris";
import ComicsByCharacterId from "./pages/ComicsByCharacterId";
import SignIn from "./pages/SignIn";
import Join from "./pages/Join";
//
// import Components

//

//
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" />

        <Route path="/comics" element={<Comics />} />
        <Route path="/comics/:characterId" element={<ComicsByCharacterId />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/character/:characterId" element={<CharacterId />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/join" element={<Join />} />
        <Route path="/favoris" element={<Favoris />} />
      </Routes>
    </Router>
  );
}

export default App;
