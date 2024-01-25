import { restaurantList } from "../config";
import RestaurantCard from "./restaurantcard";
import { useState } from "react";

const Body = () => {
    const [restaurants, setrestaurants] = useState(restaurantList)
    const [searchText, setsearchText] = useState();

    console.log(restaurants)

   function filterData(searchText,restaurants){
        let output  = restaurantList.filter((restaurant) => {
            let restname = restaurant.data.name.toLowerCase();
            let searchTextLower = searchText.toLowerCase()
            return restname.includes(searchTextLower)
        })
        return output;
     }

    return (
        <div className="innerMain" style={{ marginTop: "20px" }}>
            <div className="searchblock"> 
                <input 
                    name="search" 
                    type="search"
                    onChange={(e) => setsearchText(e.target.value)} 
                    className="form-control" 
                    placeholder="Search for Restaurants" />
               <button type="button" className="btn-theme" onClick={()=>{
                  let data =  filterData(searchText,restaurants);
                  setrestaurants(data) ;
               }}>Search</button>
            </div>

            <p style={{textAlign:"center", marginTop:"10px"}}>Found {restaurants.length} results for  {searchText}</p>

            <div className="restaurant-list">
                {restaurants.map((restaurant) => {
                    //------WAY 2----- // return <RestaurantCard  data={restaurant.data}/>
                    return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
                })}
            </div>
        </div>
    )
}

export default Body;