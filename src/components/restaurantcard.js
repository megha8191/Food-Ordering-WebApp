
// --------------WAY 1-----------
// const RestaurantCardsList = () => {
//   let all = restaurantList.map(function (item) {
//     let res = item.data;
//     return (
//       <div className="card" key={res.name} >
//         <div className="cardImage">
//           <img src="/images/about-1.jpg"></img>
//         </div>
//         <h4>{res.name}</h4>
//         <p>{res.avgRating} stars</p>
//         <p>{res.cuisines.join(",")}</p>
//       </div>
//     )
//   })
//   return all
// }


// --------------WAY 2-----------
// const RestaurantCard=(props)=>{
//   return (
//     <div className="card" key={props.data.name} >
//       <div className="cardImage">
//           <img src="/images/about-1.jpg"></img>
//       </div>
//       <h4>{props.data.name}</h4>
//       <p>{props.data.avgRating} stars</p>
//       <p>{props.data.cuisines.join(', ')}</p>
//     </div>
//   )
// }

// --------------WAY 3-----------
const RestaurantCard=({name,avgRating,cuisines,cloudinaryImageId})=>{
    return (
        <div className="card" key={name} >
          <div className="cardImage">
             <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId}></img>
          </div>
          <h4>{name}</h4>
          <p>{avgRating} stars</p>
          <p>{cuisines.join(', ')}</p>
        </div>
    )
  }
  
export default RestaurantCard;