import "./App.css";
import "./assets/style-user.css";
import "./assets/style-favorites.css";
import "./assets/footer.css";
//
//import fonctions React
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
//
//import packages
import Cookies from "js-cookie";
import toast from "react-hot-toast";
//
// import Pages
import Characters from "./pages/Characters";
import CharacterId from "./pages/CharacterId";
import Comics from "./pages/Comics";
import Favorites from "./pages/Favorites";
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
  const [favComics, setFavComics] = useState([]);
  const [favCharacters, setFavCharacters] = useState([]);
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);
  let cookie = Cookies.get("fav");
  const [fav, setFav] = useState((cookie && JSON.parse(cookie)) || [[], []]);
  //
  //
  const handleToken = (token) => {
    if (token) {
      Cookies.set("userToken", token, { expires: 7 });
      setUserToken(token);
    } else {
      Cookies.remove("userToken");
      setUserToken(null);
    }
  };
  //
  // FAVORIS
  //Ajouter un Favoris
  const addFav = (id, from) => {
    let favCopy = [...fav];
    if (from === "character") {
      if (favCopy[0].indexOf(id) === -1) {
        favCopy[0].push(id);

        toast.success("Favoris ajouté !", {
          duration: 4000,
        });
      } else {
        toast.error("Déjà en favoris !", {
          duration: 5000,
        });
      }
    } else if (favCopy[1].indexOf(id) === -1) {
      favCopy[1].push(id);
      toast.success("Favoris ajouté !", {
        duration: 4000,
      });
    } else {
      toast.error("Déjà en favoris !", {
        duration: 5000,
      });
    }
    setFav(favCopy);
    Cookies.set("fav", JSON.stringify(favCopy));
  };
  //
  //Retirer un Favoris
  const RemoveFav = (id) => {
    const fav = Cookies.get("fav");
    const tabFav = fav && JSON.parse(fav);

    let newFav = [[], []];
    for (let i = 0; i < tabFav.length; i++) {
      for (let j = 0; j < tabFav[i].length; j++) {
        if (i === 0) {
          if (tabFav[i][j] !== id) {
            newFav[0].push(tabFav[i][j]);
          }
        } else {
          if (tabFav[i][j] !== id) {
            newFav[1].push(tabFav[i][j]);
          }
        }
      }
    }
    setFav(newFav);
    Cookies.set("fav", JSON.stringify(newFav));
  };
  //
  //
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Router>
        <Header handleToken={handleToken} userToken={userToken} />
        <Routes>
          <Route
            path="/"
            element={
              <Characters
                favCharacters={favCharacters}
                setFavCharacters={setFavCharacters}
              />
            }
          />
          <Route
            path="/comics"
            element={
              <Comics
                favComics={favComics}
                setFavComics={setFavComics}
                addFav={addFav}
              />
            }
          />
          <Route
            path="/comics/:characterId"
            element={<ComicsByCharacterId />}
          />
          <Route
            path="/characters"
            element={
              <Characters
                favCharacters={favCharacters}
                setFavCharacters={setFavCharacters}
                addFav={addFav}
              />
            }
          />
          <Route path="/character/:characterId" element={<CharacterId />} />
          <Route
            path="/signin"
            element={<SignIn handleToken={handleToken} />}
          />
          <Route path="/join" element={<Join handleToken={handleToken} />} />
          <Route
            path="/favorites"
            element={
              <Favorites
                userToken={userToken}
                fav={fav}
                RemoveFav={RemoveFav}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
