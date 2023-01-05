// import react
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//Import Components

//import package
import axios from "axios";
import toast from "react-hot-toast";
//
const REACT_APP_BACKEND_ENDPOINT = process.env.REACT_APP_BACKEND_ENDPOINT;
//
const Join = ({
  handleToken,
  handleHeader,
  setColorItemFav,
  setBorderItemFav,
  setColorItemChar,
  setBorderItemChar,
  setColorItemComics,
  setBorderItemComics,
  setColorItemSignIn,
  setColorItemJoin,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  //
  //
  useEffect(() => {
    const handleStyle = () => {
      setColorItemFav("grey");
      setBorderItemFav("#202020");
      setColorItemChar("grey");
      setBorderItemChar("#202020");
      setColorItemComics("grey");
      setBorderItemComics("#202020");
      handleHeader("Join");
      setColorItemSignIn("white");
      setColorItemJoin("#e6232a");
    };
    handleStyle();
  });
  //
  //
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password.length >= 8) {
      try {
        const response = await axios.post(
          `${REACT_APP_BACKEND_ENDPOINT}/join`,
          {
            email: email,
            password: password,
          }
        );

        console.log(response.data);
        handleToken(response.data.token);
        if (response.data.token) {
          toast.success(`Bon retour parmi nous ${response.data.username} !`, {
            duration: 4000,
          });
          navigate("/characters");
        } else {
          toast.error("Etes-vous bien inscrit ?", {
            duration: 5000,
          });
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("Votre mot de passe doit contenir 8 caractères minimum.");
    }
  };
  //
  return (
    <div className="join-container">
      <div className="join-title">
        <h1>Join</h1>
      </div>
      <form className="join-form" onSubmit={handleSubmit}>
        <input
          className="userInput"
          type="email"
          placeholder="Ex: tony.stark@starkindustries.com"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          className="userInput"
          type="password"
          placeholder="Mot de passe (8 caractères minimum)"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <div className="BtnStyle">
          <input
            className="Btn-submit"
            type="submit"
            value="Se Connecter"
            onClick={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
};
export default Join;
