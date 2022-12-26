import "../assets/footer.css";
//
import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
// import { useNavigate } from "react-router-dom";
//import packages
import axios from "axios";
//import files
import arrowUp from "../assets/images/circle-arrow-up-solid.svg";
import arrowLeft from "../assets/images/arrow-left.svg";
import arrowRight from "../assets/images/arrow-right.svg";
//
//import components
import Loading from "../components/Loading";
import SearchComics from "../components/SearchComics";
import Results from "../components/Results";
//
const REACT_APP_ELLIOT_APIKEY = process.env.REACT_APP_ELLIOT_APIKEY;
const REACT_APP_BACKEND_ENDPOINT = process.env.REACT_APP_BACKEND_ENDPOINT;
//
const Comics = ({ addFav }) => {
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
          `${REACT_APP_BACKEND_ENDPOINT}/comics?apiKey=${REACT_APP_ELLIOT_APIKEY}&title=${comicTitle}&page=${page}`
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
    <>
      <SearchComics comicTitle={comicTitle} setComicTitle={setComicTitle} />
      <div className="comics-main-container">
        <Results totalCount={data.count} />
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
                  <div key={index} className="comics-containerForEachComic">
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
    </>
  );
};
export default Comics;
