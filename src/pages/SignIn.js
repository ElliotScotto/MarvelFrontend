// Import packages
import axios from "axios";
import toast from "react-hot-toast";
//Import Components

//Import React
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//
const REACT_APP_BACKEND_ENDPOINT = process.env.REACT_APP_BACKEND_ENDPOINT;
//
const SignIn = ({ handleToken }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  //
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Vos mots de passe ne sont pas identiques");
    } else {
      try {
        const response = await axios.post(
          `${REACT_APP_BACKEND_ENDPOINT}/signin`,
          {
            username: username,
            email: email,
            password: password,
          }
        );
        console.log(response.data);

        handleToken(response.data.token);
        if (response.data.token) {
          toast.success(`Bravo ${username} ! vous êtes inscrit.`, {
            duration: 5000,
          });
          navigate("/characters");
        } else {
          toast.error("L'accès est bloqué.", {
            duration: 5000,
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  //
  return (
    <div className="claws">
      <div className="signin-container">
        <div className="signin-title">
          <h1>Sign In</h1>
        </div>
        <form className="signin-form" onSubmit={handleSubmit}>
          <input
            className="userInput"
            type="text"
            placeholder="Ex: Tony Stark"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
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
            className={
              password !== confirmPassword ? "border-error" : "userInput"
            }
            type="password"
            placeholder="Mot de passe (8 caractères minimum)"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <input
            className={
              password !== confirmPassword ? "border-error" : "userInput"
            }
            type="password"
            placeholder="Confirmez votre mot de passe"
            value={confirmPassword}
            onChange={(event) => {
              setConfirmPassword(event.target.value);
            }}
          />
          <div className="BtnStyle">
            <input
              className="Btn-submit"
              type="submit"
              value="S'inscrire"
              onClick={handleSubmit}
            />
          </div>
          <Link className="Btn-Link" to="join">
            <div className="alreadysigned">
              <p>Déjà inscrit ? Connectes-toi ici</p>
            </div>
          </Link>
        </form>
      </div>
    </div>
  );
};
export default SignIn;
