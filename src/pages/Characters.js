//import React
import React, { useState, useEffect } from "react";
//import packages
import axios from "axios";
//import components
import Loading from "../components/Loading";
import CharacterCard from "../components/CharacterCard.js";
import SearchCharacter from "../components/SearchCharacter.js";
import Results from "../components/Results.js";
import Footer from "../components/Footer";
//
// const REACT_APP_ELLIOT_APIKEY = process.env.REACT_APP_ELLIOT_APIKEY;
// const REACT_APP_BACKEND_ENDPOINT = process.env.REACT_APP_BACKEND_ENDPOINT;
//
const Characters = ({
  addFav,
  addFavCharacter,
  addFavDescri,
  handleHeader,
  setColorItemChar,
  setBorderItemChar,
  setColorItemComics,
  setBorderItemComics,
  setColorItemFav,
  setBorderItemFav,
  setColorItemSignIn,
  setColorItemJoin,
  setFavCharacterDescri,
  fav,
}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [characterName, setCharacterName] = useState("");
  //
  //
  useEffect(() => {
    const handleStyle = () => {
      setColorItemChar("white");
      setBorderItemChar("#e6232a");
      setColorItemComics("grey");
      setBorderItemComics("#202020");
      setColorItemFav("grey");
      setBorderItemFav("#202020");
      setColorItemSignIn("white");
      setColorItemJoin("white");
      handleHeader("Characters");
    };
    handleStyle();
  });
  //
  //site--backend-marvel--cpx4vl465khg.code.run/
  //
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          //local vv
          // `${REACT_APP_BACKEND_ENDPOINT}/characters?apiKey=${REACT_APP_ELLIOT_APIKEY}&name=${characterName}&page=${page}`
          // Hebergement Northflank vv
          `https://site--backend-marvel--cpx4vl465khg.code.run/characters?name=${characterName}&page=${page}`
        );
        setData(response.data);
        setIsLoading(false);
        console.log(response.data);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [page, characterName]);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <SearchCharacter
        characterName={characterName}
        setCharacterName={setCharacterName}
      />
      <div className="characters-main-container">
        <Results totalCount={data.count} />
        <div className="characters-all-cards">
          {data.results.map((character, index) => {
            return (
              <CharacterCard
                key={index}
                data={character}
                id={character._id}
                cTPath={character.thumbnail.path}
                cTExt={character.thumbnail.extension}
                cName={character.name}
                cDescrip={character.description}
                addFav={addFav}
                addFavCharacter={addFavCharacter}
                addFavDescri={addFavDescri}
                setFavCharacterDescri={setFavCharacterDescri}
                fav={fav}
                handleHeader={handleHeader}
              />
            );
          })}
        </div>
        <Footer page={page} setPage={setPage} />
      </div>
    </>
  );
};
export default Characters;
