import RestaurantCard from "./restaurantcard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";

const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState()
    const [flrRestaurants, setFlrRestaurants] = useState()
    const [searchText, setsearchText] = useState();

    function filterData(searchText, allRestaurants) {
        let output = allRestaurants.filter((restaurant) => {
            let restname = restaurant.info.name.toLowerCase();
            let searchTextLower = (!searchText) ? "" : searchText.toLowerCase();
            return restname.includes(searchTextLower)
        })
        return output;
    }

    useEffect(() => {
        getrestaurants();
    }, [])


    async function getrestaurants() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        )
        const jsonlist = await data.json();
        setAllRestaurants(jsonlist.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFlrRestaurants(jsonlist.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if (!allRestaurants) return <Shimmer></Shimmer>;
    else {
        return (
            <div className="innerMain">
                <div className="searchblock">
                    <input
                        name="search"
                        type="search"
                        onChange={(e) => setsearchText(e.target.value)}
                        className="form-control"
                        placeholder="Search for Restaurants..." />
                    <button type="button" className="btn-theme" onClick={() => {
                        let data = filterData(searchText, allRestaurants);
                        setFlrRestaurants(data);
                    }}>Search</button>
                </div>

                {(flrRestaurants.length) ? (<div className="restaurant-list">
                    {flrRestaurants.map((restaurant) => {
                        return <RestaurantCard key={restaurant.info.id} {...restaurant.info} />;
                    })}
                </div>) : (<p style={{ marginTop: "20px", textAlign: "center" }}>No Results</p>)}
            </div>
        )
    }
}


export default Body;