//import React
import React, { useState, useEffect } from "react";
//import packages
import axios from "axios";
//import components
import NotSigned from "../components/NotSigned";
import Loading from "../components/Loading";
// import CharacterCard from "../components/CharacterCard";
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
        console.log("FAVORITES response.data ====>", response.data);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [fav]);
  return isLoading ? (
    <Loading />
  ) : !userToken ? (
    <NotSigned />
  ) : (
    <div className="container-fav">
      <div
        className="BordGold click"
        onClick={() => {
          RemoveFav(fav);
        }}
      >
        {fav}
        {data.results.map((elem, index) => {
          return (
            <div className="BordBlue" key={index}>
              {console.log(elem.length)}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Favorites;
