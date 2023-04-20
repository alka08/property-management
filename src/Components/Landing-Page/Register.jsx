import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Home from '@mui/icons-material/Home';


const Register = () => {
  const [formdata, setFormdata]= useState({});
  
  useEffect(()=>{
    axios.get("http://127.0.0.1:4000/users").then((response)=>{
      // console.log(response.data);
    }).catch((err)=>{
        console.log(err);
    })
  },[])
  const inputHandle=(e)=>{
      setFormdata((prevalue)=>({...prevalue,[e.target.name]:e.target.value}))
  }

  const registerForm=()=>{
  if (formdata.username == null  || formdata.email == null  || formdata.phone == null  || formdata.password == null  || formdata.role == null   ) {
    alert("Please Fill  Input details")
  }else{
    axios.post("http://127.0.0.1:4000/users",formdata)
    .then((res)=>{
          setFormdata({})
          alert("Data Submitted Successfully");
          navigate("/login");
    }).catch((err)=>{
          console.log(err);
    });
  }
  }

  const navigate = useNavigate();
  const goTO = () => {
    navigate("/");
  };

  return (
    <div className="background">
      <button className="backtohome" onClick={() => goTO()}>
      <Home sx={{ fontSize: 30 }} ></Home>
      </button>
      <div className="container">
        <div className="container-1">
         <div className="form">
            <h1 className="registerh1">Register</h1>
            <input name="username" onChange={inputHandle} value={formdata.username || ''} placeholder="Username:" />
            <input name="email" onChange={inputHandle} value={formdata.email || ''} placeholder="Email:" />
            <input name="phone" onChange={inputHandle} value={formdata.phone || ''} placeholder="Phone:" />
            <div className="radio">
              <h5>Role:</h5>
              {/* <input className="role" type="radio" value={"admin"} onChange={inputHandle} name="role" />
              <span>Admin</span> */}
              <input className="role" type="radio" value={"buyer"} onChange={inputHandle} name="role" />
              <span>Buyer</span>
              <input className="role" type="radio" value={"seller"} onChange={inputHandle}  name="role" />
              <span>Seller</span>
            </div>

            <input type="password" onChange={inputHandle} value={formdata.password || ''} name="password" placeholder="Password:" />
            <button onClick={registerForm}>Register</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
