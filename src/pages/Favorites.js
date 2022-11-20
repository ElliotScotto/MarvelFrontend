import "../assets/style-favorites.css";
//import React
import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
//import packages
import axios from "axios";
//import components
import NotSigned from "../components/NotSigned";
import Loading from "../components/Loading";
//import files

// import { Link } from "react-router-dom";
//
const REACT_APP_BACKEND_ENDPOINT = process.env.REACT_APP_BACKEND_ENDPOINT;
//
const Favorites = ({ userToken }) => {
  const [, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // const navigate = useNavigate();
  //
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `${REACT_APP_BACKEND_ENDPOINT}/favorites`
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
  return isLoading ? (
    <Loading />
  ) : !userToken ? (
    <NotSigned />
  ) : (
    <div className="container-fav">
      <div className="title-page">" Bienvenue dans vos Favoris ! "</div>
      <div className="inProgress">PAGE EN COURS DE CREATION...</div>
    </div>
  );
};
export default Favorites;
