import {cardImg} from "../config"
import { Link } from "react-router-dom";
// --------------WAY 3-----------
  function RestaurantCard({ name, avgRating, cuisines, cloudinaryImageId,id}) {
    return (
      <Link to={"/restaurant/"+ id} className="card" key={name}>
        <div className="cardImage">
          <img src={cardImg + cloudinaryImageId}></img>
        </div>
        <h4 style={{
          color:"green",
          fontStyle:"italic",
          fontSize:"24px"
        }}>{name}</h4>
        <p>{avgRating} stars</p>
        <p>{cuisines.join(', ')}</p>
      </Link>
    );
  }
  
export default RestaurantCard;