//Images
import logout from "../assets/images/logout.svg";
import logomarvel from "../assets/images/logomarvel.png";
import Burger from "../assets/images/burger-menu-svgrepo-com.svg";
//React
import { Link, useNavigate } from "react-router-dom";
//Packages
import toast from "react-hot-toast";
// import Cookies from "js-cookie";
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
  const navigate = useNavigate();
  console.log("HEADER : userToken  ======> ", userToken);
  //
  return (
    <div className="header-desktopNav">
      {!userToken ? (
        <div
          className="burgerResponsive click visibleBurger"
          onClick={() => {
            navigate("/signin");
          }}
        >
          <img
            src={Burger}
            className="burgerResponsiveIcon"
            alt="burger-menu"
          />
        </div>
      ) : (
        <div
          className="burgerResponsive click invisibleBurger"
          onClick={() => {
            navigate("/signin");
          }}
        >
          <img
            src={Burger}
            className="burgerResponsiveIcon"
            alt="burger-menu"
          />
        </div>
      )}

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
            className="logout-style BordGreen"
            onClick={() => {
              handleToken();
              toast.success(`Vous êtes déconnecté.`, {
                duration: 2000,
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

      <div className="header-desktopNav-bottom BordRed">
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
