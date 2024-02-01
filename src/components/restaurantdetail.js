import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cardImg } from "../config";
import Shimmer from "./shimmer";

const RestaurantDetail = () => {
    const [restaurant, setRestauraunt] = useState(null);
    const { Id } = useParams();

    useEffect(() => {
        const restaurant = getRestaurantDetail();
    }, [])

    async function getRestaurantDetail() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" + Id
        )
        const jsonlist = await data.json();
        setRestauraunt(jsonlist);
    }


    if (restaurant) {
        console.log("restaurant")
        console.log(restaurant)
        const resInfo = restaurant?.data?.cards[0]?.card?.card?.info;
        const menuList = (restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards).concat(restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card.itemCards);
        console.log(menuList)
        let i = 67;
        return <div className="rest-info">
            <div className="about-rest">
                <img src={cardImg + resInfo.cloudinaryImageId
                } />
                <div className="">
                    <h2>{resInfo.name}</h2>
                    <p className="" key="city">{resInfo.areaName + "," + resInfo.city}</p>
                    <p className="" key="avgRating">{resInfo.avgRating} Stars</p>
                </div>
            </div>

            <div className="restMenu">
                {menuList.map(function (menuItem) {
                    const menudish = menuItem?.card?.info;
                    return <div className="menu-Item" key={i++}>
                        <img src={cardImg + menudish?.imageId} />
                        <p>{menudish?.name}</p>
                        <strong>Rs. {menudish?.price / 100 || menudish?.defaultPrice / 100}</strong>
                    </div>
                })}
            </div>
        </div>

    }
    else {
        return <Shimmer />
    }

}
export default RestaurantDetail;