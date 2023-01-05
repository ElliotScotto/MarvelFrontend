//Style
import "./App.css";
import "./assets/style-header.css";
import "./assets/style-user.css";
import "./assets/style-favorites.css";
import "./assets/footer.css";
import "./assets/style-comics.css";
import "./assets/style-characterId.css";
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
function App() {
  //const [pageFocused, setPageFocused] = useState(""); //Link to Pages
  const [colorItemChar, setColorItemChar] = useState("grey");
  const [borderItemChar, setBorderItemChar] = useState("#202020");
  const [colorItemComics, setColorItemComics] = useState("grey");
  const [borderItemComics, setBorderItemComics] = useState("#202020");
  const [colorItemFav, setColorItemFav] = useState("grey");
  const [borderItemFav, setBorderItemFav] = useState("#202020");
  const [colorItemSignIn, setColorItemSignIn] = useState("white");
  const [colorItemJoin, setColorItemJoin] = useState("white");
  const [favComics, setFavComics] = useState([]);
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);
  let cookie = Cookies.get("fav");
  const [fav, setFav] = useState((cookie && JSON.parse(cookie)) || [[], []]);
  let cookie2 = Cookies.get("favChar");
  const [favCharacter, setFavCharacter] = useState(
    (cookie2 && JSON.parse(cookie2)) || [[], []]
  );
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
  const handleHeader = (focus) => {
    Cookies.set("pageName", focus, { expires: 1 });
    return focus;
  };
  //
  // FAVORIS
  //Ajouter un Favoris
  const addFavCharacter = (name) => {
    let favCharacterCopy = [...favCharacter];
    favCharacterCopy[0].push(name);
    setFavCharacter(favCharacterCopy);
    Cookies.set("favChar", JSON.stringify(favCharacterCopy));
  };
  //
  const addFav = (id, from) => {
    let favCopy = [...fav];
    if (from === "character") {
      if (favCopy[0].indexOf(id) === -1) {
        favCopy[0].push(id);
        toast.success("Favoris ajouté !", {
          duration: 2000,
        });
      } else {
        toast.error("Déjà en favoris !", {
          duration: 4000,
        });
      }
    } else if (favCopy[1].indexOf(id) === -1) {
      favCopy[1].push(id);
      toast.success("Favoris ajouté !", {
        duration: 2000,
      });
    } else {
      toast.error("Déjà en favoris !", {
        duration: 4000,
      });
    }
    setFav(favCopy);
    Cookies.set("fav", JSON.stringify(favCopy));
  };
  //
  //Retirer un Favoris
  const RemoveFavCharacter = (name) => {
    const favChar = Cookies.get("favChar");
    const tabFavChar = favChar && JSON.parse(favChar);
    let newFavChar = [[], []];
    for (let i = 0; i < tabFavChar.length; i++) {
      for (let j = 0; j < tabFavChar[i].length; j++) {
        if (i === 0) {
          if (tabFavChar[i][j] !== name) {
            newFavChar[0].push(tabFavChar[i][j]);
          }
        } else {
          if (tabFavChar[i][j] !== name) {
            newFavChar[1].push(tabFavChar[i][j]);
          }
        }
      }
    }
    setFavCharacter(newFavChar);
    Cookies.set("favChar", JSON.stringify(newFavChar));
  };
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
    console.log("APP : fav =====> ", fav);
  };
  //
  //
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Router>
        <Header
          handleToken={handleToken}
          userToken={userToken}
          handleHeader={handleHeader}
          colorItemComics={colorItemComics}
          borderItemComics={borderItemComics}
          colorItemChar={colorItemChar}
          borderItemChar={borderItemChar}
          colorItemFav={colorItemFav}
          borderItemFav={borderItemFav}
          colorItemSignIn={colorItemSignIn}
          colorItemJoin={colorItemJoin}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Characters
                setFavCharacter={setFavCharacter}
                addFav={addFav}
                handleHeader={handleHeader}
                setColorItemChar={setColorItemChar}
                setBorderItemChar={setBorderItemChar}
                setColorItemComics={setColorItemComics}
                setBorderItemComics={setBorderItemComics}
                setColorItemFav={setColorItemFav}
                setBorderItemFav={setBorderItemFav}
                setColorItemSignIn={setColorItemSignIn}
                setColorItemJoin={setColorItemJoin}
              />
            }
          />
          <Route
            path="/characters"
            element={
              <Characters
                setFavCharacter={setFavCharacter}
                addFav={addFav}
                addFavCharacter={addFavCharacter}
                handleHeader={handleHeader}
                setColorItemChar={setColorItemChar}
                setBorderItemChar={setBorderItemChar}
                setColorItemComics={setColorItemComics}
                setBorderItemComics={setBorderItemComics}
                setColorItemFav={setColorItemFav}
                setBorderItemFav={setBorderItemFav}
                setColorItemSignIn={setColorItemSignIn}
                setColorItemJoin={setColorItemJoin}
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
                handleHeader={handleHeader}
                setColorItemChar={setColorItemChar}
                setBorderItemChar={setBorderItemChar}
                setColorItemComics={setColorItemComics}
                setBorderItemComics={setBorderItemComics}
                setColorItemFav={setColorItemFav}
                setBorderItemFav={setBorderItemFav}
                setColorItemSignIn={setColorItemSignIn}
                setColorItemJoin={setColorItemJoin}
              />
            }
          />
          <Route
            path="/comics/:characterId"
            element={<ComicsByCharacterId />}
          />

          <Route
            path="/character/:characterId"
            element={
              <CharacterId
                handleHeader={handleHeader}
                setColorItemChar={setColorItemChar}
                setBorderItemChar={setBorderItemChar}
                setColorItemComics={setColorItemComics}
                setBorderItemComics={setBorderItemComics}
                setColorItemFav={setColorItemFav}
                setBorderItemFav={setBorderItemFav}
                setColorItemSignIn={setColorItemSignIn}
                setColorItemJoin={setColorItemJoin}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <SignIn
                handleToken={handleToken}
                handleHeader={handleHeader}
                setColorItemChar={setColorItemChar}
                setBorderItemChar={setBorderItemChar}
                setColorItemComics={setColorItemComics}
                setBorderItemComics={setBorderItemComics}
                setColorItemFav={setColorItemFav}
                setBorderItemFav={setBorderItemFav}
                setColorItemSignIn={setColorItemSignIn}
                setColorItemJoin={setColorItemJoin}
              />
            }
          />
          <Route
            path="/join"
            element={
              <Join
                handleToken={handleToken}
                handleHeader={handleHeader}
                setColorItemChar={setColorItemChar}
                setBorderItemChar={setBorderItemChar}
                setColorItemComics={setColorItemComics}
                setBorderItemComics={setBorderItemComics}
                setColorItemFav={setColorItemFav}
                setBorderItemFav={setBorderItemFav}
                setColorItemSignIn={setColorItemSignIn}
                setColorItemJoin={setColorItemJoin}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                userToken={userToken}
                fav={fav}
                favCharacter={favCharacter}
                RemoveFav={RemoveFav}
                RemoveFavCharacter={RemoveFavCharacter}
                handleHeader={handleHeader}
                setColorItemChar={setColorItemChar}
                setBorderItemChar={setBorderItemChar}
                setColorItemComics={setColorItemComics}
                setBorderItemComics={setBorderItemComics}
                setColorItemFav={setColorItemFav}
                setBorderItemFav={setBorderItemFav}
                setColorItemSignIn={setColorItemSignIn}
                setColorItemJoin={setColorItemJoin}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
