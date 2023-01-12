//React
import { useNavigate } from "react-router-dom";
//images
import whiteTriangle from "../assets/images/triangle-svgrepo-com.svg";
import userPlus from "../assets/images/user-plus.svg";
//import React
import React, { useState, useEffect } from "react";
//import packages
import axios from "axios";
//import components
import NotSigned from "../components/NotSigned";
import Loading from "../components/Loading";
import FavCharacterLine from "../components/FavCharacterLine";
//
// const REACT_APP_BACKEND_ENDPOINT = process.env.REACT_APP_BACKEND_ENDPOINT;
//
const Favorites = ({
  userToken,
  fav,
  favCharacter,
  favCharacterDescri,
  RemoveFav,
  RemoveFavCharacter,
  RemoveFavCharacterDescri,
  handleHeader,
  setColorItemFav,
  setBorderItemFav,
  setColorItemChar,
  setBorderItemChar,
  setColorItemComics,
  setBorderItemComics,
  setColorItemSignIn,
  setColorItemJoin,
}) => {
  const navigate = useNavigate();
  // const location = useLocation();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //
  // console.log(
  //   "FAVORITES : location.state.characterIdDescri ===> ",
  //   location.state.characterIdDescri
  // );
  // const [descripFav, setDescripFav] = useState(
  //   location.state.characterIdDescri
  // );
  // console.log("FAVORITES : descripFav ===> ", descripFav);

  //
  useEffect(() => {
    const handleStyle = () => {
      setColorItemFav("white");
      setBorderItemFav("#e6232a");
      setColorItemChar("grey");
      setBorderItemChar("#202020");
      setColorItemComics("grey");
      setBorderItemComics("#202020");
      setColorItemSignIn("white");
      setColorItemJoin("white");
      handleHeader("Favorites");
    };
    handleStyle();
  });
  //
  //
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          //local vv
          // `${REACT_APP_BACKEND_ENDPOINT}/favorites`,
          // {
          //   fav,
          // }
          // Hebergement Northflank vv
          `https://site--backend-marvel--cpx4vl465khg.code.run/favorites`,
          {
            fav,
          }
        );
        setData(response.data);
        setIsLoading(false);
        // console.log("FAVORITES response.data ====> ", response.data);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [fav]);
  //
  //
  return !userToken ? (
    <NotSigned />
  ) : isLoading ? (
    <Loading />
  ) : (
    <div className="container-fav">
      {data.map((elem, index) => {
        return index === 0 ? (
          elem.length > 0 || fav[0][0] ? (
            <div key={index} className="containerFavCharacters">
              <div className="relative">
                <p className="favTitle">
                  {fav[0].length} Personnage(s) favori(s)
                </p>
              </div>

              <div className="FavDisplay">
                {console.log("Favorites : fav[0].length ===> ", fav[0].length)}
                {fav[0][0] && (
                  <FavCharacterLine
                    fav={fav[0][0]}
                    favCharacter={favCharacter[0][0]}
                    RemoveFav={RemoveFav}
                    RemoveFavCharacter={RemoveFavCharacter}
                    RemoveFavCharacterDescri={RemoveFavCharacterDescri}
                  />
                )}
                {fav[0][1] && (
                  <FavCharacterLine
                    fav={fav[0][1]}
                    favCharacter={favCharacter[0][1]}
                    favCharacterDescri={favCharacterDescri[0][1]}
                    RemoveFav={RemoveFav}
                    RemoveFavCharacter={RemoveFavCharacter}
                    RemoveFavCharacterDescri={RemoveFavCharacterDescri}
                  />
                )}
                {fav[0][2] && (
                  <FavCharacterLine
                    fav={fav[0][2]}
                    favCharacter={favCharacter[0][2]}
                    favCharacterDescri={favCharacterDescri[0][2]}
                    RemoveFav={RemoveFav}
                    RemoveFavCharacter={RemoveFavCharacter}
                    RemoveFavCharacterDescri={RemoveFavCharacterDescri}
                  />
                )}
                {fav[0][3] && (
                  <FavCharacterLine
                    fav={fav[0][3]}
                    favCharacter={favCharacter[0][3]}
                    favCharacterDescri={favCharacterDescri[0][3]}
                    RemoveFav={RemoveFav}
                    RemoveFavCharacter={RemoveFavCharacter}
                    RemoveFavCharacterDescri={RemoveFavCharacterDescri}
                  />
                )}
                {fav[0][4] && (
                  <FavCharacterLine
                    fav={fav[0][4]}
                    favCharacter={favCharacter[0][4]}
                    favCharacterDescri={favCharacterDescri[0][4]}
                    RemoveFav={RemoveFav}
                    RemoveFavCharacter={RemoveFavCharacter}
                    RemoveFavCharacterDescri={RemoveFavCharacterDescri}
                  />
                )}
                {fav[0][5] && (
                  <FavCharacterLine
                    fav={fav[0][5]}
                    favCharacter={favCharacter[0][5]}
                    favCharacterDescri={favCharacterDescri[0][5]}
                    RemoveFav={RemoveFav}
                    RemoveFavCharacter={RemoveFavCharacter}
                    RemoveFavCharacterDescri={RemoveFavCharacterDescri}
                  />
                )}
                {fav[0][6] && (
                  <FavCharacterLine
                    fav={fav[0][6]}
                    favCharacter={favCharacter[0][6]}
                    favCharacterDescri={favCharacterDescri[0][6]}
                    RemoveFav={RemoveFav}
                    RemoveFavCharacter={RemoveFavCharacter}
                    RemoveFavCharacterDescri={RemoveFavCharacterDescri}
                  />
                )}
                {fav[0][7] && (
                  <FavCharacterLine
                    fav={fav[0][7]}
                    favCharacter={favCharacter[0][7]}
                    favCharacterDescri={favCharacterDescri[0][7]}
                    RemoveFav={RemoveFav}
                    RemoveFavCharacter={RemoveFavCharacter}
                    RemoveFavCharacterDescri={RemoveFavCharacterDescri}
                  />
                )}
                {fav[0][8] && (
                  <FavCharacterLine
                    fav={fav[0][8]}
                    favCharacter={favCharacter[0][8]}
                    favCharacterDescri={favCharacterDescri[0][8]}
                    RemoveFav={RemoveFav}
                    RemoveFavCharacter={RemoveFavCharacter}
                    RemoveFavCharacterDescri={RemoveFavCharacterDescri}
                  />
                )}
                {fav[0][9] && (
                  <FavCharacterLine
                    fav={fav[0][9]}
                    favCharacter={favCharacter[0][9]}
                    favCharacterDescri={favCharacterDescri[0][9]}
                    RemoveFav={RemoveFav}
                    RemoveFavCharacter={RemoveFavCharacter}
                    RemoveFavCharacterDescri={RemoveFavCharacterDescri}
                  />
                )}
              </div>
            </div>
          ) : (
            <div key={index} className="NoCharYet relative">
              <div className="whiteAngleInNOFav1">
                <img
                  className="whiteAngle-icon"
                  src={whiteTriangle}
                  alt="white-triangle-NOFav1"
                />
              </div>
              <div className="nocharyetBlock">
                Dans votre liste de favoris vous pouvez sauvegarder jusqu'à 10
                personnages.
                <br />
                <br /> Commencer à ajouter des personnages dès maintenant
                <span
                  className="click"
                  onClick={() => {
                    navigate("/characters");
                  }}
                >
                  en cliquant ici
                </span>
                <div className="iconAddCharinFav">
                  <img
                    className="icon-user-plusInFav"
                    src={userPlus}
                    alt="user-fav-icon-plus"
                    onClick={() => {
                      navigate("/characters");
                    }}
                  />
                </div>
              </div>
              <div className="whiteAngleInNOFav2">
                <img
                  className="whiteAngle-icon"
                  src={whiteTriangle}
                  alt="white-triangle-NOFav2"
                />
              </div>
            </div>
          )
        ) : elem.length > 0 ? (
          <div key={index} className="containerFavComics">
            <p className="favTitle">Comics favoris</p>
            <div className="FavDisplay">
              <div className="favComics">{fav[1][0]}</div>
              <div className="favComics">{fav[1][1]}</div>
              <div className="favComics">{fav[1][2]}</div>
              <div className="favComics">{fav[1][3]}</div>
              <div className="favComics">{fav[1][4]}</div>
              <div className="favComics">{fav[1][5]}</div>
              <div className="favComics">{fav[1][6]}</div>
              <div className="favComics">{fav[1][7]}</div>
              <div className="favComics">{fav[1][8]}</div>
              <div className="favComics">{fav[1][9]}</div>
              <div className="favComics">{fav[1][10]}</div>
            </div>
          </div>
        ) : (
          <div key={index} className="NoComicYet relative">
            <div className="whiteAngleInNOFav1">
              <img
                className="whiteAngle-icon"
                src={whiteTriangle}
                alt="white-triangle-NOFav1"
              />
            </div>
            <div className="nocharyetBlock">
              PROCHAINEMENT...
              <br />
              <br /> Ajout de Comics en favoris
            </div>
            <div className="whiteAngleInNOFav2">
              <img
                className="whiteAngle-icon"
                src={whiteTriangle}
                alt="white-triangle-NOFav2"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Favorites;
