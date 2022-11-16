import "./App.css";
//
//import fonctions React
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from "react";
//
//import packages
// import axios from "axios";
//
// import des pages
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Header from "./components/Header";
import Favoris from "./pages/Favoris";
//

//
function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Header />
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" />
        <Route path="/characters" element={<Characters />} />
        {/* <Route path="/character/:characterId" element={<CharactersId />} /> */}
        <Route path="/comics" element={<Comics />} />
        <Route path="/favoris" element={<Favoris />} />
      </Routes>
    </Router>
  );
}

export default App;
