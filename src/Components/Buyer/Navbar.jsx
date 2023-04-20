import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
   const navigate = useNavigate() 

   const logout=()=>{
      localStorage.clear()
      navigate('/')
   }

  return (
    <div className="navbar_buyer">
      <NavLink
        className="link"
        activeClassName="menu_active"
        to="/buyer/dashboard/properties_explored"
        active
      >
        properties explored
      </NavLink>
      {/* <NavLink
        className="link"
        activeClassName="menu_active"
        to="/buyer/dashboard/List_all_orders"
      >
        List all orders
      </NavLink> */}
      <div>
        <button className="buyer_logout" onClick={logout}>
          <p>Logout</p>
        </button>
      </div>
    </div>
    
  );
};

export default Navbar;
