import { createContext } from "react";

const ProfileContext = createContext({
    user:{
        name:'megha',
        email:'megha@reactdev.com',
    },
    userlocation:{
        state:'Haryana',
        country:'India'
    }
});
ProfileContext.displayName = "ProfileContname"
export default ProfileContext;