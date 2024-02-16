import React , { useContext } from "react"; 
import ProfileContext from "../utils/profileContext.js";

const Profile=(props)=>{  
    const { user, userlocation, setUserlocation } = useContext(ProfileContext);
        return (
        <div>
            <h1 className="text-3xl">Profile</h1>
            <h1>Pofile Name (props example) : { props.name}</h1>
            <h4 className="mt-3 text-2xl font-bold ">Context Example</h4>
            <p>{user.email}</p>
            <p>{user.name}</p>
            <input type="text" value={userlocation.country} onChange={(e)=>{
             setUserlocation({
                ...userlocation,
                country: e.target.value,
             })
      }}  className="form-control"/>
        </div>
     )
}


export default Profile