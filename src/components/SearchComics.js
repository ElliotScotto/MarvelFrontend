import searchIcon from "../assets/images/searchIcon.svg";
//
export default function SearchComics({ comicTitle, setComicTitle }) {
  return (
    <div className="searchBar">
      <div className="search-image">
        <img className="searchIcon " src={searchIcon} alt="icon_searchbar" />
      </div>
      <div className="searchInput ">
        <input
          type="text"
          placeholder="Rechercher un comics"
          value={comicTitle}
          onChange={(event) => setComicTitle(event.target.value)}
        />
      </div>
    </div>
  );
}
