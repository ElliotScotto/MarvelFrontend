//
//import React
import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
//import packages
import axios from "axios";
//import files
import searchIcon from "../assets/images/searchIcon.svg";
import arrowUp from "../assets/images/circle-arrow-up-solid.svg";
import arrowLeft from "../assets/images/arrow-left.svg";
import arrowRight from "../assets/images/arrow-right.svg";
//
//import components
import Loading from "../components/Loading";
import CharacterCard from "../components/CharacterCard.js";
//
const REACT_APP_ELLIOT_APIKEY = process.env.REACT_APP_ELLIOT_APIKEY;
const REACT_APP_BACKEND_ENDPOINT = process.env.REACT_APP_BACKEND_ENDPOINT;
//
const Characters = ({ addFav }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [characterName, setCharacterName] = useState("");
  //
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${REACT_APP_BACKEND_ENDPOINT}/characters?apiKey=${REACT_APP_ELLIOT_APIKEY}&name=${characterName}&page=${page}`
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
          return (
            <CharacterCard
              key={index}
              id={character._id}
              cTPath={character.thumbnail.path}
              cTExt={character.thumbnail.extension}
              cName={character.name}
              cDescrip={character.description}
              character={character}
              addFav={addFav}
            />
          );
        })}
      </div>
      <footer>
        <div className="arrowUp-style">
          <HashLink to="#top">
            <img
              className="icon-arrow-up"
              src={arrowUp}
              alt="icon-top-page"
              style={{
                marginLeft: "10%",
                textDecoration: "none",
                color: "black",
              }}
            />
          </HashLink>
        </div>
        <div className="pages">
          <div
            className="Btn-page"
            onClick={() => {
              page > 1 && setPage(page - 1);
            }}
          >
            <img
              className="icon-arrow-left"
              src={arrowLeft}
              alt="icon-arrow-left"
            />
          </div>
          <div className="Btn-page" onClick={() => setPage(page + 1)}>
            <img
              className="icon-arrow-right"
              src={arrowRight}
              alt="icon-arrow-right"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Characters;
