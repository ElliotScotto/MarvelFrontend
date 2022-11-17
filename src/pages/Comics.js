import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
//import packages
import axios from "axios";
//import files
import searchIcon from "../assets/images/searchIcon.svg";
//
const REACT_APP_ELLIOT_APIKEY = process.env.REACT_APP_ELLIOT_APIKEY;
//
const Comics = () => {
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
          `http://localhost:4000/comics?apiKey=${REACT_APP_ELLIOT_APIKEY}&title=${comicTitle}`
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
    <span className="loading">Loading...</span>
  ) : (
    <div className="comics-main-container">
      <div className="title-page">Page Comics</div>
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

          return (
            <div className="comics-containerForEachComic">
              <div className="comics-left-block">
                bloc de gauche
                {/* <img
                  className="imageComic"
                  src={imageComic}
                  alt="jacket_comics"
                /> */}
              </div>{" "}
              <div className="comics-right-block">
                <div className="comics-right-block-animation">
                  bloc de droite
                </div>
              </div>
              {/* <div className="container-nameComic">
                <p>{comic.title}</p>
              </div>
              <div className="container-descriptionComic">
                <p className="descriptionComic">{comic.description}</p>
              </div> */}
            </div>
            // !imageComic.includes("image_not_available") &&
            // comic.thumbnail.path === "jpg" && (
            //   <div key={index} className="characters-containerForEachCharacter">
            //     {/* <Link to={`/character/${id}`}> */}
            //     <div className="comics-card-top">
            //       <div className="container-imageCharacter">
            //         <img
            //           className="imageCharacter"
            //           src={imageComic}
            //           alt="image_character"
            //         />
            //       </div>
            //     </div>

            //     <div className="comics-card-bottom">
            //       <div className="comics-card-bottom-animation"></div>
            //       <div className="container-nameCharacter">
            //         <p className="nameComic visible">{comic.title}</p>
            //       </div>
            //       <div className="container-descriptionComic">
            //         {/* <Link to={`/character/${id}`}>
            //           <p className="showCard">DEVOILER LA CARTE</p>
            //         </Link> */}
            //         <p className="descriptionComic hidden">
            //           {comic.description
            //             ? comic.description
            //             : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, maxime!"}
            //         </p>
            //       </div>
            //     </div>
            //   </div>
            // )
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
