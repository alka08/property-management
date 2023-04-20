import React from "react";
import "./style.css";
import Home from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import ExitToApp from '@mui/icons-material/ExitToApp';
const Login = () => {
  // const navigateother = useNavigate();
  const [logindata, setLogindata] = useState({});
  // const [logindata, setLogindata] = useState({}) 
  // for Handle inout data for comes in users

  const inputHandle = (e) => {
    setLogindata((prevalue) => ({
      ...prevalue,
      [e.target.name]: e.target.value,
    }));
  };
  // calling api for login user data
  const loginForm = () => {
    axios.post("http://127.0.0.1:4000/users/login", logindata).then((res) => {
      const { role, _id , username} = res.data.data;
      if(role === "seller"){
        Call()
      }
      if(role === "buyer"){
        Call2()
      }
      localStorage.setItem('_id', _id);
      localStorage.setItem('role', role);
      localStorage.setItem('username', username);
      localStorage.setItem('loggedIn', true);


    });
    setLogindata({});

  };

  const Call = () => {
    navigate("/seller/dashboard");
  };
  const Call2 = () => {
    navigate("/buyer/dashboard");
  };

  const navigate = useNavigate();
  const GoTO = () => {
    navigate("/");
  };
  return (
    <div className="background-2">
      <button className="backtohome" onClick={() => GoTO()}>
        <Home sx={{ fontSize: 30 }} ></Home>
      </button>
      <div className="container-2-2">
        <div className="container-2">
          <div className="form">
            <h1 className="loginh1">Login <ExitToApp/> </h1>
            <input
              name="email"
              placeholder="Email:"
              onChange={inputHandle}
              value={logindata.email || ""}
            />
            <input
              type="password"
              name="password"
              onChange={inputHandle}
              value={logindata.password || ""}
              placeholder="Password:"
            />
            <button onClick={loginForm} className="Login">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;


