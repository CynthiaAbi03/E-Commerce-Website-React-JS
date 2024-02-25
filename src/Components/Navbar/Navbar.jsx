import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Contexts/ShopContext'
// import menu_icon from '../Assets/menu_icon_hamburger.png'

const Navbar = () => {
    const menuRef = useRef()
    const menuList = useRef()
    const [menu, setMenu] = useState("shop")
    const {getTotalCartItems} = useContext(ShopContext)

    const dropdown_toggle = (e) => {
        // menuRef.current.classList.toggle('active') 
        e.currentTarget.classList.toggle('active') // an option.. because e.target already references the element that triggered the event, in this case a click.
        menuList.current.classList.toggle('nav-menu-visible')
    }

  return (
    <div className='nav-bar'>
        <div className="nav-logo">
            {/* <img src={logo} alt=''/> */}
            <p>PureSlate</p>
        </div>
        <div class="nav-dropdown" ref={menuRef} onClick={dropdown_toggle}>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
        <ul ref={menuList} className="nav-menu">
            <li onClick={() => {setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu === "shop"? <hr/>:<></>}</li>
            <li onClick={() => {setMenu("mens")}}><Link style={{textDecoration: 'none'}} to='/mens'>Men</Link>{menu === "mens"? <hr/>:<></>}</li>
            <li onClick={() => {setMenu("womens")}}><Link style={{textDecoration: 'none'}} to='/womens'>Women</Link>{menu === "womens"? <hr/>:<></>}</li>
            <li onClick={() => {setMenu("kids")}}><Link style={{textDecoration: 'none'}} to='/kids'>Kids</Link>{menu === "kids"? <hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login' style={{textDecoration: 'none'}}><button>Login</button></Link>
            <Link to='/cart' style={{textDecoration: 'none'}}><img src={cart_icon} alt=''/></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar