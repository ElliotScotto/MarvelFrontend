//import React
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import packages
import axios from "axios";
//import files
// import searchIcon from "../assets/images/searchIcon.svg";
//
const REACT_APP_ELLIOT_APIKEY = process.env.REACT_APP_ELLIOT_APIKEY;
//
const CharacterId = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [characterId, setCharacterId] = useState("");
  // const [comicsTitle, setComicsTitle] = useState("");
  const params = useParams();
  //

  //
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/character/${params.characterId}?apiKey=${REACT_APP_ELLIOT_APIKEY}`
        );
        // console.log(params.characterId); //id de chaque personnage
        setData(response.data);
        setIsLoading(false);
        console.log(response.data.comics);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [params.characterId]);
  return isLoading ? (
    <span className="loading">Loading...</span>
  ) : (
    <div className="characterId-all-comics" key={params.characterId}>
      <div className="title-page">Page Personnages dediée</div>
      {/* <div className="searchBar">
        <div className="search-image">
          <img className="searchIcon" src={searchIcon} alt="icon_searchbar" />
        </div>
        <div className="searchInput">
          <input
            type="text"
            placeholder="Rechercher un personnage"
            value={comicsTitle}
            onChange={(event) => setComicsTitle(event.target.value)}
          />
        </div>
      </div> */}
      <div className="infos-character-container">
        <div className="characterId-image">
          <img
            className="imageCharacter"
            src={data.thumbnail.path + "." + data.thumbnail.extension}
            alt="image_character"
          />
        </div>
        <div className="character-all-comics">
          <p className="nameCharacterId">
            {data.name} est apparu dans {data.comics.length} comics :
          </p>
          {data.comics.map((comic, index) => {
            return (
              <div key={index}>
                <ul className="comicsList">
                  <li className="comicTitle" key={index}>
                    {comic}
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      {/* <div className="characterId-comics">
        <ul className="comic-detail">
          {data.results.comics.map((comic, index) => {
            return <li key={characterId}> {comic.title}</li>;
          })}
        </ul>
      </div> */}
    </div>
  );
};
export default CharacterId;
