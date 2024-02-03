import { useEffect, useState } from "react";
import { menuApi } from "../config";

const useRestaurant=(Id)=>{
    const [restaurant, setRestauraunt] = useState(null);
    useEffect(() => {
        const restaurant = getRestaurantDetail();
    }, [])
    
    async function getRestaurantDetail() {
        const data = await fetch(
            menuApi + Id
        )
        const jsonlist = await data.json();
        setRestauraunt(jsonlist);
    }
    return restaurant;
}
export default useRestaurant; 