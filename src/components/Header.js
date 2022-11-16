import { Link } from "react-router-dom";
import logomarvel from "../assets/images/logomarvel.png";
const Header = () => {
  return (
    <div className="header-desktopNav">
      <Link to="/">
        <div className="header-desktopNav-top">
          <img src={logomarvel} alt="logo_marvel" />
        </div>
      </Link>
      <div className="header-desktopNav-bottom">
        <ul className="header-desktopNav-bottom-nav">
          <Link to="/characters" className="header-link">
            <li className="header-desktopNav-bottom-link">PERSONNAGES</li>
          </Link>
          <Link to="/comics" className="header-link">
            <li className="header-desktopNav-bottom-link">COMICS</li>
          </Link>
          <Link to="/favoris" className="header-link">
            <li className="header-desktopNav-bottom-link">FAVORIS</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default Header;
