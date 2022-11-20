import "./App.css";
//
//import fonctions React
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
// import { useState } from "react";
//
//import packages
import Cookies from "js-cookie";
//
// import Pages
import Characters from "./pages/Characters";
import CharacterId from "./pages/CharacterId";
import Comics from "./pages/Comics";
import Favoris from "./pages/Favoris";
import ComicsByCharacterId from "./pages/ComicsByCharacterId";
import SignIn from "./pages/SignIn";
import Join from "./pages/Join";
//
// import Components
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";
//

//
function App() {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);
  const handleToken = (token) => {
    if (token) {
      Cookies.set("userToken", token, { expires: 7 });
      setUserToken(token);
    } else {
      Cookies.remove("userToken");
      setUserToken(null);
    }
  };
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Router>
        <Header handleToken={handleToken} userToken={userToken} />
        <Routes>
          <Route path="/" />

          <Route path="/comics" element={<Comics />} />
          <Route
            path="/comics/:characterId"
            element={<ComicsByCharacterId />}
          />
          <Route path="/characters" element={<Characters />} />
          <Route path="/character/:characterId" element={<CharacterId />} />
          <Route
            path="/signin"
            element={<SignIn handleToken={handleToken} />}
          />
          <Route path="/join" element={<Join handleToken={handleToken} />} />
          <Route
            path="/favoris"
            element={<Favoris handleToken={handleToken} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
