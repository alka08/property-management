import React from 'react'
import './card.css'
const Card = (props) => {
  // console.log(props);
  return (
    <div class="card-deck container-card">
      <div class="card">
      <div class="card-body">
        <h5 class="card-title">{props.propertyname}</h5>
        <h5 class="card-title-1">Price ₹ - {props.price}</h5>
        <img src={props.images} className='card-image' alt="" />
        <p class="card-text"><span> Address : </span>  {props.address}</p>
        <p class="card-text "><span>Dimensions :</span>  {props.dimensions}</p>
      </div>
    </div>
    
  </div>
  )
}

export default Card