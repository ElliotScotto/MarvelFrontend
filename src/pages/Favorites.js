//import React
import React, { useState, useEffect } from "react";
//import packages
import axios from "axios";
//import components
import NotSigned from "../components/NotSigned";
import Loading from "../components/Loading";
// import CharacterCard from "../components/CharacterCard";
//import Images
import DrSpectrum from "../assets/images/dr-spectrum-svgrepo.svg";
//
const REACT_APP_BACKEND_ENDPOINT = process.env.REACT_APP_BACKEND_ENDPOINT;
//
const Favorites = ({ userToken, fav, RemoveFav }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // const navigate = useNavigate();
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
        console.log("FAVORITES response.data ====> ", response.data);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [fav]);
  return !userToken ? (
    <NotSigned />
  ) : isLoading ? (
    <Loading />
  ) : (
    <div className="container-fav">
      {data.map((elem, index) => {
        return index === 0 ? (
          elem.length >= 0 ? (
            <div key={index} className="containerFavCharacters BordGreen">
              <p className="favTitle">CHARACTERS</p>
              <div className="FavDisplay">
                <div className="favCharacter">
                  <div className="infoFav BordGold"> {fav[0][0]}</div>
                  <div
                    className="click removeFav BordBlue"
                    onClick={() => {
                      RemoveFav(fav[0][0]);
                    }}
                  >
                    <img
                      className="removeFavIcon"
                      src={DrSpectrum}
                      alt="Cross-remove-fav"
                    />
                  </div>
                </div>
                <div className="favCharacter">{fav[0][1]}</div>
                <div className="favCharacter">{fav[0][2]}</div>
                <div className="favCharacter">{fav[0][3]}</div>
                <div className="favCharacter">{fav[0][4]}</div>
                <div className="favCharacter">{fav[0][5]}</div>
                <div className="favCharacter">{fav[0][6]}</div>
                <div className="favCharacter">{fav[0][7]}</div>
                <div className="favCharacter">{fav[0][8]}</div>
                <div className="favCharacter">{fav[0][9]}</div>
                <div className="favCharacter">{fav[0][10]}</div>
              </div>
            </div>
          ) : (
            <p
              key={index}
              style={{ color: "black", fontSize: "20px", marginLeft: "30px" }}
            >
              Pas de personnages favoris !
            </p>
          )
        ) : elem.length > 0 ? (
          <div key={index} className="containerFavComics BordGreen">
            <p className="favTitle">COMICS</p>
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
          <p
            key={index}
            style={{ color: "black", fontSize: "20px", marginLeft: "30px" }}
          >
            Pas de comics favoris !
          </p>
        );
      })}
    </div>
  );
};
export default Favorites;
