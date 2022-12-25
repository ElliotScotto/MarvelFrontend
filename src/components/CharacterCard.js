import chevronDown from "../assets/images/chevron-down.svg";
import userPlus from "../assets/images/user-plus.svg";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//
//
export default function CharacterCard({
  id,
  cTPath,
  cTExt,
  cName,
  cDescrip,
  character,
  addFav,
}) {
  const navigate = useNavigate();
  const userToken = Cookies.get("userToken");
  //
  const imageCharacter = cTPath + "." + cTExt;
  return (
    <>
      {!imageCharacter.includes("image_not_available") && cTExt === "jpg" && (
        <div key={id} className="characters-containerForEachCharacter">
          <div className="characters-card-top ">
            <div className="container-imageCharacter shine">
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
                    // console.log("handleCookie() ====> ", handleCookie());
                    // console.log("userToken ====> ", userToken);
                    console.log("userToken ====> ", userToken);
                    console.log(
                      userToken
                        ? "On peut ajouter en favoris"
                        : navigate("/signin")
                    );
                    // addFav(id, character);
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
              <p className="descriptionCharacter hiddenCard">
                {cDescrip
                  ? cDescrip
                  : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, maxime!"}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
