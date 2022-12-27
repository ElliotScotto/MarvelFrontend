import arrowUp from "../assets/images/circle-arrow-up-solid.svg";
import arrowLeft from "../assets/images/arrow-left.svg";
import arrowRight from "../assets/images/arrow-right.svg";
//Navigation
import { HashLink } from "react-router-hash-link";
//
export default function Footer({ page, setPage }) {
  return (
    <footer>
      <div className="arrowUp-style">
        <HashLink to="#top">
          <img
            className="icon-arrow-up"
            src={arrowUp}
            alt="icon-top-page"
            style={{
              marginLeft: "10%",
              textDecoration: "none",
              color: "black",
            }}
          />
        </HashLink>
      </div>
      <div className="pages">
        <div
          className="Btn-page"
          onClick={() => {
            page > 1 && setPage(page - 1);
          }}
        >
          <img
            className="icon-arrow-left"
            src={arrowLeft}
            alt="icon-arrow-left"
          />
        </div>
        <div className="Btn-page" onClick={() => setPage(page + 1)}>
          <img
            className="icon-arrow-right"
            src={arrowRight}
            alt="icon-arrow-right"
          />
        </div>
      </div>
    </footer>
  );
}
