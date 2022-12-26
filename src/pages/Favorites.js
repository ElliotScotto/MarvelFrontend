//import React
import React, { useState, useEffect } from "react";
//import packages
import axios from "axios";
//import components
import NotSigned from "../components/NotSigned";
import Loading from "../components/Loading";
import CharacterCard from "../components/CharacterCard";
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
            <div key={index}>
              <p style={{ color: "black" }}>CHARACTERS</p>
              {fav}
              <div className="FavDisplay">
                {elem.map((item, i) => {
                  return (
                    <CharacterCard
                      key={item._id}
                      data={item}
                      RemoveFav={RemoveFav}
                    />
                  );
                })}
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
          <div key={index}>
            <p style={{ color: "black" }}>COMICS</p>
            {/* {elem.map((item, i) => {
              return (
                <ComicCard
                  key={item._id}
                  data={item}
                  heart={false}
                  cross
                  handleRemoveFav={handleRemoveFav}
                />
              );
            })} */}
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
