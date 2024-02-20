import { React, useState } from "react";
import "./Login.css";
import info from "../info.json";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const responseGoogle = (response) => {
    console.log("Google Sign-In Response:", response);
    if (response?.profileObj) {
      const { email } = response.profileObj;

      if (email) {
        onLogin(email);
        navigate("/");
      } else {
        console.error("Error: Email not found in Google response", response);
      }
    } else {
      console.error("Error: profileObj not found in Google response", response);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username);

    const user = info.info.find((u) => u.username === username);

    if (user && user.pass === pass) {
      onLogin(user.username);
      setError("");
      navigate("/");
    } else {
      setError("Invalid Usename and Password");
    }

    setPass("");
    setUsername("");
  };

  return (
    <div>
      <div className="loginNav">
        <div className="Navlogo">Avion</div>
      </div>
      <div className="login">
        <fieldset>
          <legend>Login</legend>
          <form action="" className="form" onSubmit={handleSubmit}>
            <div className="user">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                name="Username"
                placeholder="Enter username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className="pass">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="pass"
                id="pass"
                value={pass}
                placeholder="Enter password"
                onChange={(e) => {
                  setPass(e.target.value);
                }}
              />
            </div>
            <button className="submit" type="submit">
              Submit
            </button>
            <GoogleLogin
              clientId="625296793075-mc8dhutumgq8c2scopqo2nkpbrab5pb2.apps.googleusercontent.com"
              buttonText="Signup with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
              redirectUri="https://9c90-2405-201-2014-1818-d4de-74b4-f212-81ce.ngrok-free.app"
            />
            {error && <p className="error">{error}</p>}
          </form>
        </fieldset>
      </div>
    </div>
  );
};

export default Login;
