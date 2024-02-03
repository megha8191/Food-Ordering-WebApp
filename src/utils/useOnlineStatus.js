import { useEffect, useState } from "react";

const useOnlineStatus =()=>{
    const [isOnline, setIsOnline] = useState(true);
    useEffect(() => {
        function showOnline(){
            setIsOnline(true);
            console.log('hi im online')
        }
        function showOffline(){
            setIsOnline(false);
            console.log('hi im offline')
        }
        window.addEventListener('online',showOnline);
        window.addEventListener('offline',showOffline) 
    }, []);
    return isOnline
} 
export default useOnlineStatus