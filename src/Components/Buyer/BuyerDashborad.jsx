import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import "./Buyer.css";
import "./Properties_Explored";
import Properties_Explored from "./Properties_Explored";


const BuyerDashborad = () => {
  //  const navigate= useNavigate()
  //   const logOut=()=>{
  //     localStorage.clear()
  //      navigate('/')
  //   }
  
  return (
   <>
    <div className="buyer_page">
     
    <Navbar />
    
       <Outlet/>

       
     <Properties_Explored/>
     






      
    </div>
    </>
  );
};

export default BuyerDashborad;
