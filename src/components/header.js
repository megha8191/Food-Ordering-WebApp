import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import ProfileContext from "../utils/profileContext"
import { useSelector } from "react-redux";

export const Logo = () => <a href="" className="logo"><h4>Restoran</h4></a>

const Header = () => {
  const {user,userlocation}= useContext(ProfileContext)
  const [isLogin, setIsLogin] = useState(false)
  const online = useOnlineStatus()
   

  const cartItems= useSelector(Store=>Store.cart.items);
  return (
    <header id="header" className="headerclass">
      <Logo />
      <div className="navbar-nav">
        <ul>
          <li><Link to="" className="nav-item nav-linkactive">Home</Link></li>
          <li><Link to="/about" className="nav-item nav-link">About</Link></li>
          <li><Link to="/service" className="nav-item nav-link">Service</Link></li>
          <li><Link to="/contact" className="nav-item nav-link">Contact</Link></li>
          <li><Link to="/faq" className="nav-item nav-link">Faq</Link></li>
        </ul>
        <Link to="/cart" className="text-red-500 bg-red-50 font-bold px-4 py-2">Cart 
             <span className="text-white bg-red-700 px-2 py-1 ml-2">{cartItems.length}</span>
        </Link>
      </div>
      <div className="flex items-center">
        <Link to="/login" className="btn-theme mr-3">Login</Link>
        <div className="status w-100">
          <p>{(online)?'✅ ': '❌ '}</p>
          
          <br/>
         
        </div>
      </div>
    </header>
  )
}
export default Header;
