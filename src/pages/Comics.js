import React, { useState, useEffect } from "react";
//import packages
import axios from "axios";
//import components
import Loading from "../components/Loading";
import SearchComics from "../components/SearchComics";
import Results from "../components/Results";
import Footer from "../components/Footer";
import ComicCard from "../components/ComicCard";
//
const REACT_APP_ELLIOT_APIKEY = process.env.REACT_APP_ELLIOT_APIKEY;
const REACT_APP_BACKEND_ENDPOINT = process.env.REACT_APP_BACKEND_ENDPOINT;
//
const Comics = ({
  addFav,
  handleHeader,
  setColorItemChar,
  setBorderItemChar,
  setColorItemComics,
  setBorderItemComics,
  setColorItemFav,
  setBorderItemFav,
  setColorItemSignIn,
  setColorItemJoin,
}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [comicTitle, setComicTitle] = useState("");
  const [page, setPage] = useState(1);
  //
  useEffect(() => {
    const handleStyle = () => {
      setColorItemComics("white");
      setBorderItemComics("#e6232a");
      setColorItemChar("grey");
      setBorderItemChar("#202020");
      setColorItemFav("grey");
      setBorderItemFav("#202020");
      setColorItemSignIn("white");
      setColorItemJoin("white");
      handleHeader("Comics");
    };
    handleStyle();
  });
  //
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          //Local
          // `${REACT_APP_BACKEND_ENDPOINT}/comics?apiKey=${REACT_APP_ELLIOT_APIKEY}&title=${comicTitle}&page=${page}`
          //Hebergement Northflank vv
          `https://site--backend-marvel--cpx4vl465khg.code.run/comics?apiKey=${REACT_APP_ELLIOT_APIKEY}&title=${comicTitle}&page=${page}`
        );

        setData(response.data);
        setIsLoading(false);
        // console.log(response.data.results);
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
            return (
              <ComicCard
                key={index}
                data={comic}
                comId={comic._id}
                comTPath={comic.thumbnail.path}
                comTExt={comic.thumbnail.extension}
                comTitle={comic.title}
                comDescrip={comic.description}
                addFav={addFav}
              />
            );
          })}
        </div>
        <Footer page={page} setPage={setPage} />
      </div>
    </>
  );
};
export default Comics;
