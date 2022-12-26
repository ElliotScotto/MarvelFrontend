import slash from "../assets/images/slash-lg-svgrepo-com.svg";
//
export default function Results({ totalCount }) {
  return (
    <div className="charactersCount">
      <div className="charactersTitleResults relative">
        <p>RESULTATS :</p>
        <div className="slash1">
          <img className="iconSlash" src={slash} alt="slash-top" />
        </div>
        <div className="slash2">
          <img className="iconSlash" src={slash} alt="slash-bottom" />
        </div>
      </div>
      <div className="charactersResults">{totalCount}</div>
    </div>
  );
}
