import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import ProfileContext from "../utils/profileContext"

export const Logo = () => <a href="" className="logo"><h4>Restoran</h4></a>

const Header = () => {
  const {user,userlocation}= useContext(ProfileContext)
  const [isLogin, setIsLogin] = useState(false)
  const online = useOnlineStatus() 

  return (
    <header id="header" className="headerClass">
      <Logo />
      <div className="navbar-nav">
        <ul>
          <li><Link to="" className="nav-item nav-linkactive">Home</Link></li>
          <li><Link to="/about" className="nav-item nav-link">About</Link></li>
          <li><Link to="/service" className="nav-item nav-link">Service</Link></li>
          <li><Link to="/contact" className="nav-item nav-link">Contact</Link></li>
        </ul>
        <Link to="/faq" className="text-red-500 bg-red-50 font-bold px-4">Faq</Link>
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
