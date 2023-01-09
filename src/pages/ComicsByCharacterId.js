//import React
import React, { useState, useEffect } from "react";
//Navigation
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
//import packages
import axios from "axios";
//import components
import Loading from "../components/Loading";
import Results from "../components/Results";
//import images
import whiteTriangle from "../assets/images/triangle-svgrepo-com.svg";
//
//
export default function ComicsByCharacterId({
  setColorItemChar,
  setBorderItemChar,
  setColorItemComics,
  setBorderItemComics,
  setColorItemFav,
  setBorderItemFav,
  setColorItemSignIn,
  setColorItemJoin,
}) {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  // console.log("COMIC/CHARACTERID : characterIdDescri ===> ", characterIdDescri);
  // console.log(
  //   "COMIC/CHARACTERID : location.state.characterIdDescri ===> ",
  //   location.state.characterIdDescri
  //);
  // const [comicsTitle, setComicsTitle] = useState("");
  const params = useParams();
  //
  //
  useEffect(() => {
    const handleStyle = () => {
      setColorItemChar("grey");
      setBorderItemChar("#202020");
      setColorItemComics("white");
      setBorderItemComics("#e6232a");
      setColorItemFav("grey");
      setBorderItemFav("#202020");
      setColorItemSignIn("white");
      setColorItemJoin("white");
    };
    handleStyle();
  });
  //
  console.log(
    "COMICSByCHARACTERID : location.state.characterId ===> ",
    location.state.characterId
  );
  const allComicsByCharacterID = location.state.characterId;
  //
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          //local vv
          // `http://localhost:4000/comics/${params.characterId}`
          //Northflank vv
          `https://site--backend-marvel--cpx4vl465khg.code.run/comics/${params.characterId}`
        );
        // console.log(params.characterId); //id de chaque personnage
        console.log("COMICSByCHARACTERID : ====> response.data", response.data);
        setData(Object.values(response.data));
        setIsLoading(false);
      } catch (error) {
        console.log(
          "COMICSByCHARACTERID : error.response ====> ",
          error.response
        );
      }
    };
    fetchData();
  }, [allComicsByCharacterID, params.characterId]);
  //
  //
  return isLoading ? (
    <Loading />
  ) : (
    <div className=" comicsByCharacterId">
      <Results totalCount={data[1].length} />
      {data[1].map((elem, index) => {
        const jacketComics =
          elem.thumbnail.path + "." + elem.thumbnail.extension;

        return (
          <div className="styleBycomic BordRed" key={index}>
            <div className="ComicByCharId-TOP relative">
              <div className="whiteTriangleAbsoluteComicById">
                <img
                  src={whiteTriangle}
                  alt="whiteTriangleAbsoluteComicById"
                  className="whiteTriangleAbsoluteComicByIdICON"
                />
              </div>
              {elem.title}
            </div>
            <div className="ComicByCharId-BOTTOM">
              <div className="ComicByCharId-LEFT">
                <img
                  className="jacketComicsImginComicsByCharacterId"
                  src={jacketComics}
                  alt="jacket-comics"
                />
              </div>
              <div className="ComicByCharId-RIGHT">
                {/* <div style={{ color: "black" }}>{elem.title}</div> */}
                {/* <div style={{ color: "black" }}>{elem._id}</div> */}
                <div className="titleSum">RESUME</div>
                {!elem.description ? (
                  <div className="summary">Pas de résumé trouvé</div>
                ) : (
                  <>
                    <div className="summaryScroll">{elem.description}</div>
                  </>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
