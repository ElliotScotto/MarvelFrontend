import searchIcon from "../assets/images/searchIcon.svg";
//
export default function SearchCharacter({ characterName, setCharacterName }) {
  return (
    <div className="searchBar">
      <div className="search-image">
        <img className="searchIcon " src={searchIcon} alt="icon_searchbar" />
      </div>
      <div className="searchInput ">
        <input
          type="text"
          placeholder="Rechercher un personnage"
          value={characterName}
          onChange={(event) => setCharacterName(event.target.value)}
        />
      </div>
    </div>
  );
}
