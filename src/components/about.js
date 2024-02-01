import { useState } from "react";
import Contact from "./contact";
import Profile from "./profile";

const About=()=>{

    const [count]=useState();

    return(
    <div className="innerMain">
        <h1>About </h1>
        <Profile name="megha"/>
        <p>HI</p>
        <Contact  whatever="prop-ex"/>
    </div> )
}
export default About;