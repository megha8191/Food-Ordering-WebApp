import ProfileContext from "../utils/profileContext"
import { useContext } from "react"

const Service = () => {
    const  {user , userlocation}=useContext(ProfileContext)
    return (
        <div className="innerMain shimmer-styles" >
            <div className="">
                <h1 className="text-center text-4xl">Services</h1>
                <p className="text-center mb-8">We provide different services</p> 
                <p>Enter your country name</p> 
                <p key="jdi">{user.name}</p>
                <p key="s">{user.email}</p>

            </div>
        </div>
    )
}
export default Service