import React from "react"; 


class Profile extends React.Component{
    render(){
        return <h1>Pofile Name : {this.props.name}</h1>
    }
}
// const Profile =(props)=>{
//     return <h1>Profile name: {props.name}</h1>
// }
export default Profile