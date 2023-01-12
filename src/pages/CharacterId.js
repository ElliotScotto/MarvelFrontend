//import React
import React, { useState, useEffect } from "react";
//Navigation
import { useParams } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
//import packages
import axios from "axios";
//import components
import Loading from "../components/Loading";
//import images
import whiteTriangle from "../assets/images/triangle-svgrepo-com.svg";
import chevronDown from "../assets/images/chevron-down.svg";
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
  const navigate = useNavigate();
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
    <div className="characterId-all-comics relative" key={params.characterId}>
      {/* <div className="littleRedBar"></div> */}

      <div className="hidePrimaryBorder"></div>

      <div className="infos-character-container">
        <div className="containerCharIdImageAndDescrip">
          <div className="characterIdDescrip relative responsiveInfoCharID">
            <div className="thirdBorder"></div>
            <div className="characterIdDescripTitle">Description</div>
            <div className="DescriByID">
              {location.state.characterIdDescri ? (
                <p>{location.state.characterIdDescri}</p>
              ) : (
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptate, maxime! (NC from API)
                </p>
              )}
            </div>
            <div></div>
            <div className="character-all-comics BGMarvelBlack">
              <div className="characterIdApparitionTitle">Apparition</div>
              <div className="CharacterIdViews">
                <div className="displayApparitionsinCharacterId">
                  <div>
                    <span>{data.comics.length}</span>
                  </div>
                  <div>comics</div>
                </div>
                <div
                  onClick={() => {
                    navigate(`/comics/${params.characterId}`, {
                      state: { characterId: params.characterId },
                    });
                  }}
                >
                  <p className="seeHisComics click">Voir la liste</p>
                </div>
              </div>
            </div>
            <div
              className="containerLinkBackCharacters"
              onClick={() => {
                navigate("/characters");
              }}
            >
              <div className="chevronRedBack relative">
                <img
                  src={chevronDown}
                  alt="chevronRedBack"
                  className="chevronRedBackIcon"
                />
                <div className="chevronRedBack absoluteChevronBack">
                  <img
                    src={chevronDown}
                    alt="chevronRedBack"
                    className="chevronRedBackIcon"
                  />
                </div>
              </div>

              <div className="backToCharactersPage click">
                <p>&nbsp;&nbsp;Tous les personnages</p>
              </div>
            </div>
          </div>
          <div className="characterId-image relative">
            <div className="hideSecondaryBorder"></div>
            <div className="hideThirdBorder"></div>
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
