import React from "react";

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
    //    api
    }

    componentDidUpdate(prevProps, prevState){
        if(this.state.count != prevState.count){
            
        }
    }

    componentWillUnmount(){
        //would run when component page left, add when required
    }

    render() {
        const {count,name} =this.state;
        return <div className="innerMain">
            <h1>Contact Us</h1>
            <p>Phone:807968697</p>
            <p>Count value : {count}</p>
            <button onClick={() => {
                this.setState({     
                    count: 6
                });
            }}
            >Make count 6</button>
            <p>Name : {name}</p>
             <button onClick={() => {
                this.setState({     
                    name:"abc"
                });
            }}
            >Change name to abc</button>
            <p>Prop from with contact {this.props.whatever}</p>
          
        </div>
    }
}

export default Contact