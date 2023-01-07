import chevronDown from "../assets/images/chevron-down.svg";
import userPlus from "../assets/images/user-plus.svg";
import whiteTriangle from "../assets/images/triangle-svgrepo-com.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import packages
import Cookies from "js-cookie";
import toast from "react-hot-toast";
//
//
export default function CharacterCard({
  id,
  cTPath,
  cTExt,
  cName,
  cDescrip,
  data,
  addFav,
  addFavCharacter,
  addFavDescri,
  setFavCharacterDescri,
  fav,
}) {
  const [characterIdDescri] = useState();
  console.log("CHARACTERCARD : characterIdDescri ===> ", characterIdDescri);
  const navigate = useNavigate();
  const userToken = Cookies.get("userToken");
  //
  const imageCharacter = cTPath + "." + cTExt;
  //

  //
  return (
    <>
      {!imageCharacter.includes("image_not_available") && cTExt === "jpg" && (
        <div key={id} className="characters-containerForEachCharacter">
          <div className="characters-card-top">
            <div
              className="container-imageCharacter shine click"
              onClick={() => {
                navigate(`/character/${id}`, {
                  state: { characterIdDescri: cDescrip },
                });
                setFavCharacterDescri(cDescrip);
              }}
            >
              <img
                className="imageCharacter"
                src={imageCharacter}
                alt="image_character"
              />
            </div>
          </div>

          <div className="characters-card-bottom">
            <div className="showCard"></div>

            <div className="characters-card-bottom-animation"></div>
            <div className="container-nameCharacter">
              <p className="nameCharacter visible">
                {cName}

                <img
                  className="icon-user-plus"
                  src={userPlus}
                  alt="user-fav-icon-plus"
                  onClick={() => {
                    userToken ? (
                      fav[0].length < 10 ? (
                        <>
                          {addFav(data._id, "character")};
                          {addFavCharacter(cName)}
                          {addFavDescri(cDescrip)}
                          {console.log("cDescrip ==== > ", cDescrip)};
                          {console.log(
                            "cDescrip.length ==== > ",
                            cDescrip.length
                          )}
                          {cDescrip.length > 2 ? (
                            navigate("/favorites", {
                              state: { characterIdDescri: cDescrip },
                            })
                          ) : (
                            <>
                              {navigate("/favorites", {
                                state: {
                                  characterIdDescri:
                                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Voluptate, maxime!",
                                },
                              })}
                            </>
                          )}
                          ;
                        </>
                      ) : (
                        <>
                          {toast.error(
                            "Vous avez déjà 10 personnages dans votre liste !",
                            {
                              duration: 4000,
                              style: { fontSize: 18 },
                            }
                          )}
                        </>
                      )
                    ) : (
                      navigate("/signin")
                    );
                  }}
                />
              </p>

              <img
                className="icon-arrow-right"
                src={chevronDown}
                alt="icon-chevron-down"
              />
            </div>
            <div className="container-descriptionCharacter">
              <div className="descriptionCharacter hiddenCard">
                {cDescrip
                  ? cDescrip
                  : "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Voluptate, maxime!"}
              </div>
            </div>
            <div className="whiteAngle">
              <img
                className="whiteAngle-icon"
                src={whiteTriangle}
                alt="white_angle"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
