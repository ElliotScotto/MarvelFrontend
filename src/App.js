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
  //Fav States
  let cookie = Cookies.get("fav");
  const [fav, setFav] = useState((cookie && JSON.parse(cookie)) || [[], []]);
  let cookie2 = Cookies.get("favChar");
  const [favCharacter, setFavCharacter] = useState(
    (cookie2 && JSON.parse(cookie2)) || [[], []]
  );
  let cookie3 = Cookies.get("favCharDescri");
  const [favCharacterDescri, setFavCharacterDescri] = useState(
    (cookie3 && JSON.parse(cookie3)) || [[], []]
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
    console.log("pageName ===> ", Cookies.get("pageName"));
    return focus;
  };
  //
  // FAVORIS
  //Ajouter un Favoris
  //Nom de personnages
  const addFavCharacter = (name) => {
    let favCharacterCopy = [...favCharacter];
    favCharacterCopy[0].push(name);
    setFavCharacter(favCharacterCopy);
    Cookies.set("favChar", JSON.stringify(favCharacterCopy));
  };
  //Description du personnage
  const addFavDescri = (description) => {
    let favCharacterDescriCopy = [...favCharacterDescri];
    favCharacterDescriCopy[0].push(description);
    setFavCharacterDescri(favCharacterDescriCopy);
    Cookies.set("favCharDescri", JSON.stringify(favCharacterDescriCopy));
  };
  //Id du personnage
  const addFav = (id, from) => {
    let favCopy = [...fav];
    if (from === "character") {
      if (favCopy[0].indexOf(id) === -1) {
        favCopy[0].push(id);
        toast.success("Favoris ajouté !", {
          duration: 2000,
          style: { fontSize: 18 },
        });
      } else {
        toast.error("Déjà en favoris !", {
          duration: 4000,
          style: { fontSize: 18 },
        });
      }
    } else if (favCopy[1].indexOf(id) === -1) {
      favCopy[1].push(id);
      toast.success("Personnage ajouté !", {
        duration: 2000,
        style: { fontSize: 18 },
      });
    } else {
      toast.error("Déjà en favoris !", {
        duration: 4000,
        style: { fontSize: 18 },
      });
    }
    setFav(favCopy);
    Cookies.set("fav", JSON.stringify(favCopy));
  };
  //
  //Retirer un Favoris
  //Retirer le nom du personnage
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
  //Retirer la description du personnage
  const RemoveFavCharacterDescri = (description) => {
    const favCharDescri = Cookies.get("favCharDescri");
    const tabFavCharDescri = favCharDescri && JSON.parse(favCharDescri);
    let newFavCharDescri = [[], []];
    for (let i = 0; i < tabFavCharDescri.length; i++) {
      for (let j = 0; j < tabFavCharDescri[i].length; j++) {
        if (i === 0) {
          if (tabFavCharDescri[i][j] !== description) {
            newFavCharDescri[0].push(tabFavCharDescri[i][j]);
          }
        } else {
          if (tabFavCharDescri[i][j] !== description) {
            newFavCharDescri[1].push(tabFavCharDescri[i][j]);
          }
        }
      }
    }
    setFavCharacterDescri(newFavCharDescri);
    Cookies.set("favCharDescri", JSON.stringify(newFavCharDescri));
  };
  //Retirer l'Id du personnage
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
  console.log("APP : fav[0].length =====> ", fav[0].length);
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
                setFavCharacterDescri={setFavCharacterDescri}
                addFav={addFav}
                addFavDescri={addFavDescri}
                handleHeader={handleHeader}
                setColorItemChar={setColorItemChar}
                setBorderItemChar={setBorderItemChar}
                setColorItemComics={setColorItemComics}
                setBorderItemComics={setBorderItemComics}
                setColorItemFav={setColorItemFav}
                setBorderItemFav={setBorderItemFav}
                setColorItemSignIn={setColorItemSignIn}
                setColorItemJoin={setColorItemJoin}
                fav={fav}
              />
            }
          />
          <Route
            path="/characters"
            element={
              <Characters
                setFavCharacter={setFavCharacter}
                setFavCharacterDescri={setFavCharacterDescri}
                addFav={addFav}
                addFavCharacter={addFavCharacter}
                addFavDescri={addFavDescri}
                handleHeader={handleHeader}
                setColorItemChar={setColorItemChar}
                setBorderItemChar={setBorderItemChar}
                setColorItemComics={setColorItemComics}
                setBorderItemComics={setBorderItemComics}
                setColorItemFav={setColorItemFav}
                setBorderItemFav={setBorderItemFav}
                setColorItemSignIn={setColorItemSignIn}
                setColorItemJoin={setColorItemJoin}
                fav={fav}
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
                favCharacterDescri={favCharacterDescri}
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
                setFavCharacterDescri={setFavCharacterDescri}
                favCharacterDescri={favCharacterDescri}
                RemoveFav={RemoveFav}
                RemoveFavCharacter={RemoveFavCharacter}
                RemoveFavCharacterDescri={RemoveFavCharacterDescri}
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
