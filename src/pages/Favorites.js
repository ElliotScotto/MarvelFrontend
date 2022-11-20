//import React
import React, { useState, useEffect } from "react";

//import packages
import axios from "axios";
//import components
import Loading from "../components/Loading";
//
const REACT_APP_ELLIOT_APIKEY = process.env.REACT_APP_ELLIOT_APIKEY;
const REACT_APP_BACKEND_ENDPOINT = process.env.REACT_APP_BACKEND_ENDPOINT;
//
const Favorites = ({ handleToken }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `${REACT_APP_BACKEND_ENDPOINT}/favorites${REACT_APP_ELLIOT_APIKEY}`
        );
        setData(response.data);
        setIsLoading(false);
        console.log(response.data);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  return isLoading ? <Loading /> : <div>Bienvenue sur la Page Favoris.</div>;
};
export default Favorites;
