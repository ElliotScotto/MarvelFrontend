import { Link } from "react-router-dom";
import logomarvel from "../assets/images/logomarvel.png";
const Header = () => {
  return (
    <div className="header-desktopNav">
      <div className="header-container-user">
        <Link className="Btn-Link" to="/signin">
          <div className="header-signin">SIGN IN</div>
        </Link>
        <div className="header-split">|</div>
        <Link className="Btn-Link" to="/join">
          <div className="header-join">JOIN</div>
        </Link>
      </div>
      <Link to="/">
        <div className="header-desktopNav-top">
          <img src={logomarvel} alt="logo_marvel" />
        </div>
      </Link>

      <div className="header-desktopNav-bottom">
        <ul className="header-desktopNav-bottom-nav">
          <Link to="/characters" className="Btn-Link">
            <li className="header-desktopNav-bottom-link">PERSONNAGES</li>
          </Link>
          <Link to="/comics" className="Btn-Link">
            <li className="header-desktopNav-bottom-link">COMICS</li>
          </Link>
          <Link to="/favoris" className="Btn-Link">
            <li className="header-desktopNav-bottom-link">FAVORIS</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default Header;
