import { useState } from "react" 

export const Logo = ()=><a href="" className="logo"><h4>Restoran</h4></a>


const Header = () => {
  const [headColorui, setHeadColorui] = useState("#eee")
    return (
      <header id="header" className="headerClass" style={{backgroundColor:headColorui, color:"#000"}}>
       <Logo/>
       <button type="button" className="btn-theme" onClick={()=>{
          if(headColorui==="grey"){
              setHeadColorui("#eee")
          }
          else{
               setHeadColorui("grey")
          }
      }}> HeaderTheme</button>
        <div className="navbar-nav">
          <ul>
            <li><a href="" className="nav-item nav-link active">Home</a></li>
            <li><a href="" className="nav-item nav-link">About</a></li>
            <li><a href="" className="nav-item nav-link">Service</a></li>
            <li><a href="" className="nav-item nav-link">Dishes</a></li>
          </ul>
        </div>
        <a href="" className="cartBtn">Cart</a>
      </header>
    )
  }
  export default  Header;
