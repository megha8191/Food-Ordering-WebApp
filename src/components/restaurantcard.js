import {cardImg} from "../config"

// --------------WAY 3-----------
  function RestaurantCard({ name, avgRating, cuisines, cloudinaryImageId }) {
    return (
      <div className="card" key={name}>
        <div className="cardImage">
          <img src={cardImg + cloudinaryImageId}></img>
        </div>
        <h4>{name}</h4>
        <p>{avgRating} stars</p>
        <p>{cuisines.join(', ')}</p>
      </div>
    );
  }
  
export default RestaurantCard;