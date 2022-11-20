import "../assets/style-header.css";
import logout from "../assets/images/logout.svg";
//
import { Link } from "react-router-dom";
import logomarvel from "../assets/images/logomarvel.png";
//
const Header = ({ handleToken, userToken }) => {
  return (
    <div className="header-desktopNav">
      <div className="header-container-user">
        {!userToken ? (
          <>
            <Link className="Btn-Link" to="/signin">
              <div className="header-signin">SIGN IN</div>
            </Link>
            <div className="header-split">|</div>
            <Link className="Btn-Link" to="/join">
              <div className="header-join">JOIN</div>
            </Link>
          </>
        ) : (
          <div
            className="logout-style"
            onClick={() => {
              handleToken();
            }}
          >
            <div>
              <img className="logout-img" src={logout} alt="logout-icon" />
            </div>
            <div className="header-quit Btn-Link">QUIT</div>
          </div>
        )}
      </div>

      <div className="header-desktopNav-top">
        <Link to="/">
          <img src={logomarvel} alt="logo_marvel" />
        </Link>
      </div>

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
