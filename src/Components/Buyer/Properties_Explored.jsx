import React from "react";
import "./Properteis.css";
import axios from "axios";
import sendEmail from "../../../../Back-end-nodejs/Sendmail";
import { useEffect } from "react";
import { useState } from "react";

const Properties_Explored = (userdata) => {
  const [propertyData, setProperty] = useState([]);
  // const [showContactDetails, setShowContactDetails] = useState(false);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:4000/property")
      .then((response) => {
        setProperty(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
      // const onfinish=(userdata)=>{
      //     axios.get(`http://127.0.0.1:4000/users=${username}`).then(response=>{
      //       console.log(user)
      //     })
      // }
  }, []);
  return (
    <div class="main">
      <ul class="cards">
        {propertyData.map((data) => {
          return (
            <li class="cards_item">
              <div class="card">
                <h4>{data.username}</h4>
                <h5>{data.propertyname}</h5>
                <div class="card_image">
                  <img alt="Images" src={data.images} />
                </div>
                <div class="card_content">
                  <h2 class="card_title"> Cost:  {data.price} </h2>
                  <p class="card_text"> Location  : {data.address}</p>
                  <button class="btn-1 card_btn" onClick={() => sendEmail('alka71807@gmail.com', 'Details', 'Hello, here are the details!')} > Contact Owner </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Properties_Explored;
