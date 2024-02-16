import React from "react";
import { useParams } from "react-router-dom";
import { cardImg } from "../config";
import Shimmer from "./shimmer";
import useRestaurant from "../utils/useRestaurant";
import { useDispatch, useSelector } from "react-redux";
import Store from "../utils/Store";
import { addCartItem ,removeCartItem, clearCart } from "../utils/CartSlice";

const RestaurantDetail = () => {
    const { Id } = useParams();
    const restaurant = useRestaurant(Id);
    
    const cartItems= useSelector(Store=>Store.cart.items);
    const dispatch =useDispatch()
    const handleRemoveCart=(cartitem)=>{
        dispatch(removeCartItem(cartitem))
    }

    const handleAddCart=(cartitem)=>{
        dispatch(addCartItem(cartitem))
        // console.log(cartItems)
    }

    const handleClearAll=()=>{
        dispatch(clearCart());
        // console.log(cartItems)
    }

    if (restaurant) {
        // console.log(restaurant)
        const resInfo = restaurant?.data?.cards[0]?.card?.card?.info;
        const menuList = (restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards).concat(
            restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card.itemCards);
        // console.log(menuList)
        let i = 0;
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
                    return <div className="menu-Item" key={"menuItem" + i++}>
                        <img src={cardImg + menudish?.imageId} />
                        <p>{menudish?.name}</p>
                        <strong>Rs. {menudish?.price / 100 || menudish?.defaultPrice / 100}</strong>
                        <div className="flex">
                            <button className="bg-red-300 mr-1 py-0 px-2 font-bold text-2xl" onClick={()=>handleRemoveCart(menuItem)}>-</button>
                            <button className="bg-green-300 py-0 px-2 text-boldtext-2xl" onClick={()=>handleAddCart(menuItem)}> +</button>
                        </div>
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