//import React
import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
//import packages
import axios from "axios";
//import files
import searchIcon from "../assets/images/searchIcon.svg";
//
//import components
import Loading from "../components/Loading";
//
const REACT_APP_ELLIOT_APIKEY = process.env.REACT_APP_ELLIOT_APIKEY;
const REACT_APP_BACKEND_ENDPOINT = process.env.REACT_APP_BACKEND_ENDPOINT;
//
const Characters = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [characterName, setCharacterName] = useState("");
  // const [characterId, setCharacterId] = useState("");
  // const navigate = useNavigate();
  //

  //
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${REACT_APP_BACKEND_ENDPOINT}/characters?apiKey=${REACT_APP_ELLIOT_APIKEY}&name=${characterName}`
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
    <div className="characters-main-container">
      <div className="title-page">PERSONNAGES</div>
      <div className="searchBar">
        <div className="search-image">
          <img className="searchIcon" src={searchIcon} alt="icon_searchbar" />
        </div>
        <div className="searchInput">
          <input
            type="text"
            placeholder="Rechercher un personnage"
            value={characterName}
            onChange={(event) => setCharacterName(event.target.value)}
          />
        </div>
      </div>
      <div className="characters-all-cards">
        {data.results.map((character, index) => {
          const id = character._id;
          const imageCharacter =
            character.thumbnail.path + "." + character.thumbnail.extension;
          // console.log(character._id); // affiche l'id de chaque personnage

          return (
            !imageCharacter.includes("image_not_available") &&
            character.thumbnail.extension === "jpg" && (
              <div key={id} className="characters-containerForEachCharacter">
                {/* <Link to={`/character/${id}`}> */}
                <div className="characters-card-top ">
                  <div className="container-imageCharacter shine">
                    <img
                      className="imageCharacter"
                      src={imageCharacter}
                      alt="image_character"
                    />
                  </div>
                </div>

                <div className="characters-card-bottom">
                  <div className="characters-card-bottom-animation"></div>
                  <div className="container-nameCharacter">
                    <p className="nameCharacter visible">{character.name}</p>
                  </div>
                  <div className="container-descriptionCharacter">
                    {/* <Link to={`/character/${id}`}>
                      <p className="showCard">DEVOILER LA CARTE</p>
                    </Link> */}
                    <p className="descriptionCharacter hiddenCard">
                      {character.description
                        ? character.description
                        : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, maxime!"}
                    </p>
                  </div>
                </div>
                {/* </Link> */}
              </div>
            )
          );
        })}
      </div>
      <div className="pages">
        <button onClick={() => setPage(page - 1)}>Page précédente</button>
        <button onClick={() => setPage(page + 1)}>Page suivante</button>
      </div>
    </div>
  );
};
export default Characters;
