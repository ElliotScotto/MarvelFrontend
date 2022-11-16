import { useState, useEffect } from "react";
import axios from "axios";
const Characters = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  // console.log(process.env.REACT_APP_ELLIOT_MARVELS_APIKEY); // OK
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-marvel.herokuapp.com/characters"
        );
        setData(response.data.results);
        setIsLoading(false);
        console.log(response.data);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [page]);

  return isLoading ? (
    <span className="loading" style={{ marginBottom: "430px" }}>
      Loading...
    </span>
  ) : (
    <div className="characters-main-container">
      <div className="characters-title-page">Page Characters</div>
      <div className="characters-all-cards">
        {data.slice(0, 99).map((character, index) => {
          const imageCharacter =
            character.thumbnail.path + "." + character.thumbnail.extension;
          // console.log(imageCharacter);
          return (
            !imageCharacter.includes("image_not_available") &&
            character.thumbnail.extension === "jpg" && (
              <div key={index} className="characters-containerForEachCharacter">
                <div className="characters-card-top">
                  <div className="container-imageCharacter">
                    <img
                      className="imageCharacter"
                      src={imageCharacter}
                      alt="image_character"
                    />
                  </div>
                </div>
                <div className="characters-card-bottom">
                  <div className="characters-card-bottom-animation"></div>
                  <div className="container-nameCharacter">
                    <p className="nameCharacter visible">{character.name}</p>
                  </div>
                  <div className="container-descriptionCharacter">
                    <p className="showCard">DEVOILER LA CARTE</p>
                    <p className="descriptionCharacter hidden">
                      {character.description
                        ? character.description
                        : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, maxime!"}
                    </p>
                  </div>
                </div>
              </div>
            )
          );
        })}
      </div>
      <div className="pages">
        <button onClick={() => setPage(page - 1)}>Page précédente</button>
        <button onClick={() => setPage(page + 1)}>Page suivante</button>
      </div>
    </div>
  );
};
export default Characters;
