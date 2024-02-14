import React,  { Consumer, useContext } from "react";
import ProfileContext from "../utils/profileContext";

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 1,
            count2: 2,
            name: "megha"
        }
    }

     componentDidMount(){
    //    API
    }

    componentDidUpdate(prevProps, prevState){
        if(this.state.count != prevState.count){     
        }
    }

    componentWillUnmount(){
        //would run when component page left,
        //add when required
    }

    render() {
        const {count,name} =this.state;
        return <div className="innerMain">
            <h1 className="text-3xl text-center">Contact Us</h1>
            <p>Phone:807968697</p>
            <p>Count value : {count}</p>
            <button className="text-white mt-1 mb-3 bg-blue-700 hover:bg-blue-800 focus:outline-none rounded-full px-5 py-2.5 text-center " onClick={() => {
                this.setState({     
                    count: 6
                });
            }}
            >Make count 6</button>
            <p>Name : {name} </p>
             <button className="text-white mt-1 mb-3 bg-blue-700 hover:bg-blue-800 focus:outline-none rounded-full px-5 py-2.5 text-center " onClick={() => {
                this.setState({     
                    name:"abc"
                });
            }}
            >Change name to abc</button>
            <p>Prop from with contact {this.props.whatever}</p>
            <p>
                     Name is</p>
            <ProfileContext.Consumer>
                {(par)=>{return(
 <p>
                    <br/> Location is <b>{par.userlocation.state},{par.userlocation.country}</b> </p>
                 )
                 }}
            </ProfileContext.Consumer>
        </div>
    }
}

export default Contact