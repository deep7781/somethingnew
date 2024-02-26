import { React, useState } from "react";
import "./Login.css";
import info from "../info.json";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../States/adminSlice";
import { useDispatch } from "react-redux";
const Register = () => {
  const dispatch = useDispatch();
  const [registerData, setregisterData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleInput = (e) => {
    setregisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setregisterData({
      username: "",
      password: "",
    });
    dispatch(registerUser(registerData));
    console.log(registerData);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="loginForm">
        <h1>Register</h1>
        <div>
          <label htmlFor="Username">Username</label>
          <input
            type="text"
            name="username"
            value={registerData.username}
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div>
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            name="password"
            id=""
            value={registerData.password}
            onChange={(e) => handleInput(e)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default Register;
