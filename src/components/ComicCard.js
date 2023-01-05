export default function ComicCard({
  data,
  comId,
  comTPath,
  comTExt,
  comTitle,
  comDescrip,
  addFav,
}) {
  const imageComic = comTPath + "." + comTExt;
  return (
    !imageComic.includes("image_not_available") &&
    comTPath !== "jpg" && (
      <div key={comId} className="comics-containerForEachComic">
        <div className="comics-left-block">
          <img className="imageComic" src={imageComic} alt="jacket_comics" />
        </div>
        <div className="comics-right-block">
          <div className="comics-right-block-animation">
            <div className="comics-info-title">
              <p className="comics-title">{comTitle}</p>
            </div>
            <div className="comics-info-details">
              <p className="comics-details">
                {comDescrip
                  ? comDescrip
                  : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quod perspiciatis quae velit corporis vitae ipsa nemo, voluptate odio architecto."}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
