// import react
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import package
import axios from "axios";
const Join = ({ handleToken }) => {
  const REACT_APP_BACKEND_ENDPOINT = process.env.REACT_APP_BACKEND_ENDPOINT;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  //
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_ENDPOINT}/join`,
        {
          email: email,
          password: password,
        }
      );

      console.log(response.data);
      handleToken(response.data.token);
      navigate("/characters");
    } catch (error) {
      console.log(error);
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
        <input
          className="Btn-submit"
          type="submit"
          value="Se Connecter"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};
export default Join;
