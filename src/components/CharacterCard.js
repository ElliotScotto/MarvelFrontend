import chevronDown from "../assets/images/chevron-down.svg";
import userPlus from "../assets/images/user-plus.svg";

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
                    addFav(id, character);
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
