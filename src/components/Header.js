//Images
import logout from "../assets/images/logout.svg";
import logomarvel from "../assets/images/logomarvel.png";
//React
import { Link } from "react-router-dom";
//Packages
import toast from "react-hot-toast";
//import utils
// import NavStyle from "../utils/NavStyle";
const Header = ({
  handleToken,
  userToken,
  colorItemChar,
  borderItemChar,
  colorItemComics,
  borderItemComics,
  colorItemFav,
  borderItemFav,
  colorItemSignIn,
  colorItemJoin,
}) => {
  //

  //
  return (
    <div className="header-desktopNav">
      <div className="header-container-user">
        {!userToken ? (
          <>
            <Link className="Btn-Link" to="/signin">
              <div
                className="header-signin"
                style={{
                  color: colorItemSignIn,
                }}
              >
                SIGN IN
              </div>
            </Link>
            <div className="header-split">|</div>
            <Link className="Btn-Link" to="/join">
              <div
                className="header-join"
                style={{
                  color: colorItemJoin,
                }}
              >
                JOIN
              </div>
            </Link>
          </>
        ) : (
          <div
            className="logout-style"
            onClick={() => {
              handleToken();
              toast.success(`Vous êtes déconnecté.`, {
                duration: 4000,
                style: { fontSize: 18 },
              });
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
          <img className="logo-marvel" src={logomarvel} alt="logo_marvel" />
        </Link>
      </div>

      <div className="header-desktopNav-bottom">
        <Link
          to="/characters"
          className="Btn-Link Link-Menu-Style"
          style={{
            color: colorItemChar,
            borderColor: borderItemChar,
          }}
        >
          <p className="header-desktopNav-bottom-link">PERSONNAGES</p>
        </Link>
        <Link
          to="/comics"
          className="Btn-Link Link-Menu-Style"
          style={{
            color: colorItemComics,
            borderColor: borderItemComics,
          }}
        >
          <p className="header-desktopNav-bottom-link">COMICS</p>
        </Link>
        <Link
          to="/favorites"
          className="Btn-Link Link-Menu-Style"
          style={{
            color: colorItemFav,
            borderColor: borderItemFav,
          }}
        >
          <p className="header-desktopNav-bottom-link">FAVORIS</p>
        </Link>
      </div>
    </div>
  );
};
export default Header;
