import React, { useEffect } from "react";
import "./Home.css";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { FcHome } from "react-icons/fc";
import { BsFillPeopleFill } from "react-icons/bs";
import { RiLoginCircleFill } from "react-icons/ri";


const Home = () => {
  // For Navigation ====>register page link
  const navigate = useNavigate();
  const Register = () => {
    navigate("/register");
  };
  // For Navigation ===>Login page  link
  const navigateother = useNavigate();
  const login = () => {
    navigateother("/login");
  };
  //
  useEffect(() => {
    if (localStorage.role === "seller") {
      navigate("/seller/dashboard");
    }
    if (localStorage.role === "buyer") {
      navigate("/buyer/dashboard");
    }
  }, []);

  return (
    <div className="main-home-div">
      <div className="white-border">
        <div className="body-content">  Find a Home you'll love<FcHome/> </div>
      </div>
      <div className="quotes">
        <h4>Homeley</h4>
        <h5>Property </h5>

      </div>
        
      <div className="right-box">
        <button
          className="register from-btn"
          onClick={() => Register()}
        >
        <span className="register-icon"><BsFillPeopleFill/></span>
          Register
        </button>
        <button
          className="login from-btn"
          onClick={() => login()}
        >
        <span className="register-icon"><RiLoginCircleFill/></span>
          Login
        </button>
      </div>

      <div className="image-right-one">
        <img
          src="https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="Right-Image top one"
        />
      </div>
      <div className="image-righ-two">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80"
          alt="Right-Image top one"
        />
      </div>
      <div className="image-right-three">
        <img
          src="https://images.pexels.com/photos/2041556/pexels-photo-2041556.jpeg?cs=srgb&dl=pexels-aleksandar-pasaric-2041556.jpg&fm=jpg  "
          alt=""
        />
      </div>

      {/* <div className="image">
        <img
          src="https://images.unsplash.com/photo-1618221880373-feacd0701d84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
          alt="Home Images.."
        />
      </div> */}

      <Footer />
    </div>
  );
};

export default Home;
