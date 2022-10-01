import React, {useContext} from "react";
import './Navbar.css'
import login from '../../Icons/login.svg'
import search from '../../Icons/search.svg'
import cart from '../../Icons/cart.svg'
import heart from '../../Icons/heart.svg'
import MyContext from "../../Context";

const Navbar = () => {
  const {data, setData} = useContext(MyContext)
  return (
    <div className="navbar">
      <div className="navbar__name">Acciojob</div>
      <div>
        <ul className="navbar__items">
          <li><a href="">Home</a> </li>
          <li><a href="">Shop</a> </li>
          <li><a href="">About</a> </li>
          <li><a href="">Blog</a> </li>
          <li><a href="">Contact</a> </li>
          <li><a href="">Pages</a></li>
        </ul>
      </div>
      <div>
        <div className="navbar__login">
          <img src={login} alt="img" className="nav-login" />
          <div className="nav-text">Login / Register</div>
          <img src={search} alt="img" className="nav-search" />
          <img src={cart} alt="img" className="nav-cart" />
          <span>{data}</span>
          <img src={heart} alt="img" className="nav-heart" />
          
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
