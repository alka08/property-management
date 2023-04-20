import React from "react";
import "./Properteis.css";
import axios from "axios";
import { Routes } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
const Contactowner = () => {
  const [propertyData, setProperty] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:4000/users={username}")
      .then((response) => {
        setProperty(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div class="main">
      <ul class="cards">
        {propertyData.map((data) => {
          return (
            <li class="cards_item">
              <div class="card">
                <h4>{data.username}</h4>
                <h5>{data.email}</h5>
                {/* <div class="card_image">
                  <img alt="Images" src={data.images} />
                </div> */}
                <div class="card_content">
                  {/* <h2 class="card_title"> Cost:  {data.price} </h2> */}
                  <p class="card_text"> Location  : {data.number}</p>
                 
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Contactowner;
