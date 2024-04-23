import React, { useState } from 'react'
import './NavBar.css'
import Logo from '../Assets/Morgan_Market.png'
import { FiShoppingBag } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { Link } from 'react-router-dom';
const NavBar = () => {
  const [isSearchOpened, setIsSearchOpend] = useState(false);
  const [menu, setMenu] = useState("shop");
  const handleSearchClick = () => {
    setIsSearchOpend(!isSearchOpened);
  }
  return (
    <div className='heropage'>
      <nav>
        <div className="logo-setion">
          <img src={Logo} alt="Header-Logo" />
        </div>
        {
          isSearchOpened ? <div></div>
            : <ul className='nav-menu'>
              <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: 'none', color: 'white' }} to='/'>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
              <li onClick={() => { setMenu("mens") }}><Link style={{ textDecoration: 'none', color: 'white' }} to='/mens'>Men</Link>{menu === "mens" ? <hr /> : <></>}</li>
              <li onClick={() => { setMenu("womens") }}><Link style={{ textDecoration: 'none', color: 'white' }} to='/womens'>Women</Link>{menu === "womens" ? <hr /> : <></>}</li>
              <li onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: 'none', color: 'white' }} to='/kids'>Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
              <li onClick={() => { setMenu("about") }}><Link style={{ textDecoration: 'none', color: 'white' }} to='/about'>About</Link>{menu === "about" ? <hr /> : <></>}</li>
            </ul>
        }
        <div className='nav-icons'>
          <div class="search-box" onClick={handleSearchClick}>
            <button class="btn-search"><IoMdSearch /></button>
            <input type="text" class="input-search" placeholder="Type to Search..."/>
          </div>
        <Link style={{ textDecoration: 'none' }} to='/login'> <button className='nav-btn'>Login</button> </Link>
        <Link style={{ textDecoration: 'none' }} to='/cart'> <p className='shopping-cart'>
          <FiShoppingBag />
          <div className="nav-cart-count">0</div> </p></Link>
    </div>
      </nav >
    </div >
  )
}

export default NavBar
