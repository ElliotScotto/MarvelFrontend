//import React
import React, { useState, useEffect } from "react";
//import packages
import axios from "axios";
//import components
import NotSigned from "../components/NotSigned";
import Loading from "../components/Loading";
import FavCharacterLine from "../components/FavCharacterLine";
//
const REACT_APP_BACKEND_ENDPOINT = process.env.REACT_APP_BACKEND_ENDPOINT;
//
const Favorites = ({
  userToken,
  fav,
  favCharacter,
  RemoveFav,
  RemoveFavCharacter,
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
  // const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //
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
          `${REACT_APP_BACKEND_ENDPOINT}/favorites`,
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
                <p className="favTitle">Personnage(s) favori(s)</p>
              </div>

              <div className="FavDisplay">
                {console.log("Favorites : fav[0].length ===> ", fav[0].length)}
                {fav[0][0] && (
                  <FavCharacterLine
                    fav={fav[0][0]}
                    favCharacter={favCharacter[0][0]}
                    RemoveFav={RemoveFav}
                    RemoveFavCharacter={RemoveFavCharacter}
                  />
                )}
                {fav[0][1] && (
                  <FavCharacterLine
                    fav={fav[0][1]}
                    favCharacter={favCharacter[0][1]}
                    RemoveFav={RemoveFav}
                    RemoveFavCharacter={RemoveFavCharacter}
                  />
                )}
                {fav[0][2] && (
                  <FavCharacterLine
                    fav={fav[0][2]}
                    favCharacter={favCharacter[0][2]}
                    RemoveFav={RemoveFav}
                    RemoveFavCharacter={RemoveFavCharacter}
                  />
                )}
                {fav[0][3] && (
                  <FavCharacterLine
                    fav={fav[0][3]}
                    favCharacter={favCharacter[0][3]}
                    RemoveFav={RemoveFav}
                    RemoveFavCharacter={RemoveFavCharacter}
                  />
                )}
                {fav[0][4] && (
                  <FavCharacterLine
                    fav={fav[0][4]}
                    favCharacter={favCharacter[0][4]}
                    RemoveFav={RemoveFav}
                    RemoveFavCharacter={RemoveFavCharacter}
                  />
                )}
              </div>
            </div>
          ) : (
            <div key={index} className="containerFavCharacters BordGreen">
              <p
                key={index}
                style={{ color: "black", fontSize: "20px", padding: "12px" }}
              >
                Pas de personnages favoris !
              </p>
            </div>
          )
        ) : elem.length > 0 ? (
          <div key={index} className="containerFavComics BordGreen">
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
          <div key={index} className="containerFavComics BordGreen">
            <p
              key={index}
              style={{ color: "black", fontSize: "20px", padding: "12px" }}
            >
              Pas de comics favoris !
            </p>
          </div>
        );
      })}
    </div>
  );
};
export default Favorites;
