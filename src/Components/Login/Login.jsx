import { React, useEffect, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../States/adminSlice";
const Login = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginUser());
  }, [dispatch]);

  const data = useSelector((state) => state.admin.getLoginData);
  console.log("Data", data);
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const validate = () => {
    if (!data.length) {
      alert("data not found");
    } else {
      data.map((item) => {
        if (
          loginData.username === item.username &&
          loginData.password === item.password
        ) {
          if (
            loginData.username === "admin" &&
            loginData.password === "admin"
          ) {
            navigate("/admin");
          } else return navigate("/");
        } else {
          return navigate("/register");
        }
        return true;
      });
    }
  };
  const navigate = useNavigate();
  const handleInput = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginData({
      username: "",
      password: "",
    });
    validate();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="loginForm">
        <h1>Login</h1>
        <div>
          <label htmlFor="Username">Username</label>
          <input
            type="text"
            name="username"
            value={loginData.username}
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div>
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            name="password"
            id=""
            value={loginData.password}
            onChange={(e) => handleInput(e)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default Login;
