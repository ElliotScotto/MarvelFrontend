//React
import { useNavigate } from "react-router-dom";
//import Images
import CharacterInfo from "../assets/images/address-card-regular.svg";
import whiteTriangle from "../assets/images/triangle-svgrepo-com.svg";
import DrSpectrum from "../assets/images/dr-spectrum-svgrepo.svg";
//
export default function FavCharacterLine({
  fav,
  favCharacter,
  RemoveFav,
  RemoveFavCharacter,
}) {
  const navigate = useNavigate();
  //
  return (
    <div className="favCharacter">
      <div
        className="click charInfo"
        onClick={() => {
          navigate(`/character/${fav}`);
        }}
      >
        <img
          className="charInfoIcon"
          src={CharacterInfo}
          alt="character-info"
        />
      </div>
      <div className="infoFav BGMarvelBlack relative">
        <div className="whiteAngleInFav1">
          <img
            className="whiteAngle-icon"
            src={whiteTriangle}
            alt="white-triangle-Fav1"
          />
        </div>
        {favCharacter}
        <div className="whiteAngleInFav2">
          <img
            className="whiteAngle-icon"
            src={whiteTriangle}
            alt="white-triangle-Fav2"
          />
        </div>
        <div
          className="click removeFav"
          onClick={() => {
            RemoveFav(fav);
            RemoveFavCharacter(favCharacter);
          }}
        >
          <img
            className="removeFavIcon"
            src={DrSpectrum}
            alt="Cross-remove-fav"
          />
        </div>
      </div>
    </div>
  );
}
