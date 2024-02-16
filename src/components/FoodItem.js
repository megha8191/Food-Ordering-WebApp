import { cardImg } from "../config";
import lo from "../assets/images/logo.jpg"

//Made for Cart items but handleremovecart fnction was not working so not used......

const FoodItem =({price,defaultPrice,imageId,name,id})=>{

    return (
     <div className="bg-white rounded-sm shadow-md" key={id}>
            {(imageId !== undefined) ? <img src={cardImg + imageId} className="rounded-t-sm aspect-video object-cover" /> : <img src={lo} className="rounded-t-sm aspect-video object-cover" />}
            <div className="p-2">
                <p className="font-bold text-2xl">{name}</p>
                <p className="text-red-800 font-semibold">Rs. {price / 100 || defaultPrice / 100}</p>
                <div className="flex mt-2">
                    <button className="bg-red-300 mr-1 py-0 px-2 font-bold text-2xl" onClick={() => handleRemoveCart(menuItem)}>-</button>
                </div>
            </div>
        </div>
    )
}
export default FoodItem;