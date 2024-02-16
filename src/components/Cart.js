import { cardImg } from "../config"
import { useSelector } from "react-redux";
import lo from "../assets/images/logo.jpg"
import { useDispatch, useSelector } from "react-redux";
import { addCartItem, removeCartItem, clearCart } from "./CartSlice";
import FoodItem from "./FoodItem";
const Cart = () => {
    const cartItems = useSelector(Store => Store.cart.items);
    const dispatch = useDispatch()
    const handleRemoveCart = (cartitem) => {
        dispatch(removeCartItem(cartitem))
        // console.log(cartItems)
    }

    const handleAddCart = (cartitem) => {
        dispatch(addCartItem(cartitem))
        // console.log(cartItems)

    }

    const handleClearAll = () => {
        dispatch(clearCart());
        // console.log(cartItems)
    }
    let totalCart = 0;

    let totalCart22 = 0;

    return (<div className="innerMain  bg-gray-50">
        <h1 className="text-center font-bold text-3xl">Cart</h1>
        <button className="bg-red-700 py-2 px-4 mb-4 text-bold ml-auto block text-white" onClick={() => handleClearAll()}>Clear All</button>
        <div className="cartItems grid grid-cols-2 md:grid-cols-5 gap-6">
            {cartItems.map(function (menuItem) {
                const menudish = menuItem?.card?.info;

                <FoodItem {...menudish}></FoodItem>

            })}
        </div>
        <div className="border-t-slate-700 border-t mt-20 pb-3">
            <h4 className="text-3xl font-semibold mt-6 ">Total :Rs. {totalCart} </h4>
        </div>
    </div>)
}
export default Cart