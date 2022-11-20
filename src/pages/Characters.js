import "../assets/footer.css";
//
//import React
import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";
//import packages
import axios from "axios";
//import files
import searchIcon from "../assets/images/searchIcon.svg";
import arrowUp from "../assets/images/circle-arrow-up-solid.svg";
import arrowLeft from "../assets/images/arrow-left.svg";
import arrowRight from "../assets/images/arrow-right.svg";
import chevronDown from "../assets/images/chevron-down.svg";
import userPlus from "../assets/images/user-plus.svg";
//
//import components
import Loading from "../components/Loading";
// import { Link } from "react-router-dom";
//
const REACT_APP_ELLIOT_APIKEY = process.env.REACT_APP_ELLIOT_APIKEY;
const REACT_APP_BACKEND_ENDPOINT = process.env.REACT_APP_BACKEND_ENDPOINT;
//
const Characters = ({ addFav }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [characterName, setCharacterName] = useState("");
  // const [characterId, setCharacterId] = useState("");
  const navigate = useNavigate();

  //

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
                  {/* <Link to={`/character/${id}`}> */}
                  <div className="showCard">
                    {/* <p className="addCard visible">AJOUTER LA CARTE</p> */}
                    {/* <img
                      className="icon-user-plus"
                      src={userPlus}
                      alt="user-fav-icon-plus"
                    /> */}
                  </div>
                  {/* </Link> */}
                  <div className="characters-card-bottom-animation"></div>
                  <div className="container-nameCharacter">
                    <p className="nameCharacter visible">
                      {character.name}
                      {/* <p className="addCard">Add</p> */}

                      <img
                        className="icon-user-plus"
                        src={userPlus}
                        alt="user-fav-icon-plus"
                        onClick={() => {
                          navigate("/favorites");
                        }}
                      />
                    </p>
                    <img
                      className="icon-arrow-right"
                      src={chevronDown}
                      alt="icon-chevron-down"
                    />
                  </div>
                  <div className="container-descriptionCharacter">
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
