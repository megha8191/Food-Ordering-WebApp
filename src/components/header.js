import { useState } from "react"
import { Link } from "react-router-dom"

export const Logo = () => <a href="" className="logo"><h4>Restoran</h4></a>

const Header = () => {
  // const [headColorui, setHeadColorui] = useState("#eee")
  const [isLogin, setIsLogin] = useState(false)

  return (
    <header id="header" className="headerClass">
      <Logo />
      <div className="navbar-nav">
        <ul>
          <li><Link to="" className="nav-item nav-linkactive">Home</Link></li>
          <li><Link to="/about" className="nav-item nav-link">About</Link></li>
          <li><Link to="" className="nav-item nav-link">Service</Link></li>
          <li><Link to="/contact" className="nav-item nav-link">Contact</Link></li>
        </ul>
        <Link to="" className="cartBtn">Cart</Link>
      </div>
      <Link to="/login" className="btn-theme">Login</Link>
    </header>
  )
}
export default Header;
