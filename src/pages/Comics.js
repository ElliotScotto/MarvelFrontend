import React, { useState, useEffect } from "react";
//import packages
import axios from "axios";
//
//import components
import Loading from "../components/Loading";
import SearchComics from "../components/SearchComics";
import Results from "../components/Results";
import Footer from "../components/Footer";
//
const REACT_APP_ELLIOT_APIKEY = process.env.REACT_APP_ELLIOT_APIKEY;
const REACT_APP_BACKEND_ENDPOINT = process.env.REACT_APP_BACKEND_ENDPOINT;
//
const Comics = ({ addFav }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [comicTitle, setComicTitle] = useState("");
  const [page, setPage] = useState(1);
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
            const imageComic =
              comic.thumbnail.path + "." + comic.thumbnail.extension;

            return isLoading ? (
              <Loading />
            ) : (
              !imageComic.includes("image_not_available") &&
                comic.thumbnail.path !== "jpg" && (
                  <div key={index} className="comics-containerForEachComic">
                    <div className="comics-left-block">
                      <img
                        className="imageComic"
                        src={imageComic}
                        alt="jacket_comics"
                      />
                    </div>
                    <div className="comics-right-block">
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
        <Footer page={page} setPage={setPage} />
      </div>
    </>
  );
};
export default Comics;
