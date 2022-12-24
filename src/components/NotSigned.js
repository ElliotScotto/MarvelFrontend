import "../assets/style-notSigned.css";
import { useNavigate } from "react-router-dom";
//import files
import sadDeadpool from "../assets/images/deadpoolsadcomic.png";
//
const NotSigned = () => {
  const navigate = useNavigate();
  return (
    <div className="fav-container-noToken">
      <div className="fav-blockLeft">
        <div className="img-deadpool">
          <img
            className="sadDeadpool-style"
            src={sadDeadpool}
            alt="sad-deadpool"
          />
        </div>
      </div>

      <div className="fav-blockRight">
        <div className="fav_shame-user">
          <p>
            Quel dommage !<br /> Vous n'êtes pas encore inscrit.
          </p>
        </div>

        <div
          className="fav-notSigned"
          onClick={() => {
            navigate("/join");
          }}
        >
          <p>
            Déjà inscrit ?<br /> Rejoins-nous ici
          </p>
        </div>

        <div>
          <p className="joinOrSign">OU</p>
        </div>
        <div
          className="fav-notSigned"
          onClick={() => {
            navigate("/signin");
          }}
        >
          <p>
            Nouveau ?<br /> Crée un compte ici
          </p>
        </div>
      </div>
    </div>
  );
};
export default NotSigned;
