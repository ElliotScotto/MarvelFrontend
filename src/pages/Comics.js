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
//
const Comics = () => {
  const REACT_APP_BACKEND_ENDPOINT = process.env.REACT_APP_BACKEND_ENDPOINT;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [comicTitle, setComicTitle] = useState("");
  const [page, setPage] = useState(1);
  // const navigate = useNavigate();
  //

  //
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${REACT_APP_BACKEND_ENDPOINT}/comics?apiKey=${REACT_APP_ELLIOT_APIKEY}&title=${comicTitle}`
        );
        setData(response.data);
        setIsLoading(false);
        console.log(response.data.results);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [page, comicTitle]);

  return isLoading ? (
    <Loading />
  ) : (
    <div className="comics-main-container">
      <div className="title-page">COMICS</div>
      <div className="searchBar">
        <div className="search-image">
          <img className="searchIcon" src={searchIcon} alt="icon_searchbar" />
        </div>
        <div className="searchInput">
          <input
            type="text"
            placeholder="Rechercher un comics"
            value={comicTitle}
            onChange={(event) => setComicTitle(event.target.value)}
          />
        </div>
      </div>
      <div className="characters-all-comics">
        {data.results.map((comic, index) => {
          // const id = comic._id;
          const imageComic =
            comic.thumbnail.path + "." + comic.thumbnail.extension;
          // console.log(character._id); // affiche l'id de chaque personnage

          return isLoading ? (
            // <span className="loading">Loading...</span>
            <Loading />
          ) : (
            !imageComic.includes("image_not_available") &&
              comic.thumbnail.path !== "jpg" && (
                <div className="comics-containerForEachComic">
                  <div className="comics-left-block">
                    {/* bloc de gauche */}
                    <img
                      className="imageComic"
                      src={imageComic}
                      alt="jacket_comics"
                    />
                  </div>{" "}
                  <div className="comics-right-block">
                    {/* bloc de droite */}
                    <div className="comics-right-block-animation">
                      <div className="comics-info-title">
                        <p className="comics-title">{comic.title}</p>
                      </div>
                      <div className="comics-info-details">
                        <p className="comics-details">
                          {comic.description
                            ? comic.description
                            : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quod perspiciatis quae velit corporis vitae ipsa nemo, voluptate odio architecto."}
                        </p>
                      </div>
                    </div>
                  </div>
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
export default Comics;
