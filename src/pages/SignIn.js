import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const SignIn = ({ handleToken }) => {
  const REACT_APP_BACKEND_ENDPOINT = process.env.REACT_APP_BACKEND_ENDPOINT;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  //
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_ENDPOINT}/signin`,
        {
          username: username,
          email: email,
          password: password,
        }
      );

      console.log(response.data);
      handleToken(response.data.token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  //
  return (
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
          className="userInput"
          type="password"
          placeholder="Mot de passe (8 caractères minimum)"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <input
          className="Btn-submit"
          type="submit"
          value="S'inscrire"
          onClick={handleSubmit}
        />
        <Link className="Btn-Link" to="join">
          <div className="alreadysigned">
            <p>Déjà inscrit au MCU ? Connectes-toi ici</p>
          </div>
        </Link>
      </form>
    </div>
  );
};
export default SignIn;
