import { cardImg } from "../config"
import { useSelector } from "react-redux";
import lo from "../assets/images/logo.jpg"
import { useDispatch, useSelector } from "react-redux";
import { addCartItem, removeCartItem, clearCart } from "../utils/CartSlice";
import FoodItem from "./FoodItem";
const Cart = () => {
    const cartItems = useSelector(Store => Store.cart.items);
    const dispatch = useDispatch()
    const handleRemoveCart = (cartitem) => {
        dispatch(removeCartItem(cartitem))
        // console.log(cartItems)
    }

    const handleClearAll = () => {
        dispatch(clearCart());
    }
    let totalCart =0;

    return (<div className="innerMain  bg-gray-50">
        <h1 className="text-center font-bold text-3xl">Cart</h1>
        <button className="bg-red-700 py-2 px-4 mb-4 text-bold ml-auto block text-white" onClick={() => handleClearAll()}>Clear All</button>
        <div className="cartItems grid grid-cols-2 md:grid-cols-5 gap-6">
            {cartItems.map(function (menuItem) {
                const menudish = menuItem?.card?.info;
                if (!(isNaN(menudish.price||  menudish.defaultPrice))) totalCart += menudish.price / 100 || menudish.defaultPrice/ 100
                return (
                    <div className="bg-white rounded-sm shadow-md" key={menudish.id}>
                        {(menudish?.imageId !== undefined) ? <img src={cardImg + menudish?.imageId} className="rounded-t-sm aspect-video object-cover" /> : <img src={lo} className="rounded-t-sm aspect-video object-cover" />}
                        <div className="p-2">
                            <p className="font-bold text-2xl">{menudish?.name}</p>
                            <p className="text-red-800 font-semibold">Rs. {menudish?.price / 100 || menudish?.defaultPrice / 100}</p>
                            <div className="flex mt-2">
                                <button className="bg-red-300 mr-1 py-0 px-2 font-bold text-2xl" onClick={() => handleRemoveCart(menuItem)}>-</button>
                            </div>
                        </div>
                    </div>
                ) 
            })}
        </div>
        <div className="border-t-slate-700 border-t mt-12 pb-3">
            <h4 className="text-3xl font-semibold mt-6 ">Total :Rs. {totalCart} </h4>
        </div>
    </div>)
}
export default Cart