//import React
import React, { useState, useEffect } from "react";
//Navigation
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
//import packages
import axios from "axios";
//import components
import Loading from "../components/Loading";
//import images
import whiteTriangle from "../assets/images/triangle-svgrepo-com.svg";
//
//
const CharacterId = ({
  setColorItemChar,
  setBorderItemChar,
  setColorItemComics,
  setBorderItemComics,
  setColorItemFav,
  setBorderItemFav,
  setColorItemSignIn,
  setColorItemJoin,
  favCharacterDescri,
  characterIdDescri,
}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  console.log("CHARACTERID : characterIdDescri ===> ", characterIdDescri);
  console.log(
    "CHARACTERID : location.state.characterIdDescri ===> ",
    location.state.characterIdDescri
  );
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
    };
    handleStyle();
  });
  //
  //
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          //local vv
          // `http://localhost:4000/character/${params.characterId}`
          //Northflank vv
          `https://site--backend-marvel--cpx4vl465khg.code.run/character/${params.characterId}`
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
  //
  //
  return isLoading ? (
    <Loading />
  ) : (
    <div className="characterId-all-comics" key={params.characterId}>
      {/* <div className="RedBar"></div> */}
      <div className="infos-character-container">
        <div className="containerCharIdImageAndDescrip">
          <div className="characterIdDescrip">
            <div className="characterIdDescripTitle">Description</div>
            <div>
              {location.state.characterIdDescri ? (
                <p>{location.state.characterIdDescri}</p>
              ) : (
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptate, maxime! (NC from API)
                </p>
              )}
            </div>
            <div className="character-all-comics">
              <div className="characterIdApparitionTitle">Apparition</div>
              <div className="CharacterIdViews">
                <div className="displayApparitionsinCharacterId">
                  <div>
                    <span>{data.comics.length}</span>
                  </div>
                  <div>comics</div>
                </div>
                <div className="comicsList">
                  {data.comics.map((comic, index) => {
                    return (
                      <div key={index}>
                        <div className="comicsList">
                          <div className="comicTitle" key={index}>
                            {comic}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="characterId-image relative">
            <div className="nameCharacterId relative">
              <p>{data.name}</p>
              <div className="whiteAngleInCharId">
                <img
                  className="whiteAngle-iconCharId"
                  src={whiteTriangle}
                  alt="white-triangle-Fav1"
                />
              </div>
            </div>
            <img
              className="imageCharacterId"
              src={data.thumbnail.path + "." + data.thumbnail.extension}
              alt="image_character"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CharacterId;
