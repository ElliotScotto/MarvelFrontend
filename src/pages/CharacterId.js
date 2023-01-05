//import React
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import packages
import axios from "axios";
//import components
import Loading from "../components/Loading";
//import files
// import searchIcon from "../assets/images/searchIcon.svg";
//
const REACT_APP_ELLIOT_APIKEY = process.env.REACT_APP_ELLIOT_APIKEY;
//
const CharacterId = ({
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
  // const [characterId, setCharacterId] = useState("");
  // const [comicsTitle, setComicsTitle] = useState("");
  const params = useParams();
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
      handleHeader("character/id");
    };
    handleStyle();
  });
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
    <Loading />
  ) : (
    <div className="characterId-all-comics" key={params.characterId}>
      <div className="infos-character-container">
        <div className="nameCharacterId">
          <p>{data.name}</p>
        </div>
        <div className="characterId-image">
          <img
            className="imageCharacter"
            src={data.thumbnail.path + "." + data.thumbnail.extension}
            alt="image_character"
          />
        </div>
        <div className="character-all-comics">
          <p className="CharacterIdViews">
            Ce personnage est apparu dans {data.comics.length} comics :
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
