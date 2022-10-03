import React, { useContext } from "react";
import './Navbar.css'
import login from '../../Icons/login.svg'
import search from '../../Icons/search.svg'
import cart from '../../Icons/cart.svg'
import heart from '../../Icons/heart.svg'
import MyContext from "../../Context";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UnderDev from "./UnderDev";
import Products from "../Product/Products";
import Main from "./Main";


const Navbar = () => {
  const { data, setData } = useContext(MyContext)
  return (
    <Router>
      <div className="navbar">
        <div className="navbar__name">Acciojob</div>
        <div>
          <ul className="navbar__items">
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/shop">Shop</Link></li>
            <li> <Link to="/underDev">About</Link></li>
            <li> <Link to="/underDev">Blog</Link></li>
            <li> <Link to="/underDev">Contact</Link></li >
            <li> <Link to="/underDev">Pages</Link></li >
          </ul >
        </div >

        <div className="navbar__login">
          <img src={login} alt="img" className="nav-login" />
          <div className="nav-text">Login / Register</div>
          <img src={search} alt="img" className="nav-search" />
          <img src={cart} alt="img" className="nav-cart" />
          <span>{data}</span>
          <img src={heart} alt="img" className="nav-heart" />


        </div>
      </div>
      <Switch>
        <Route path="/underDev">
          <UnderDev />
        </Route>
        <Route path="/Shop">
          <Products />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>

    </Router>
  );
};

export default Navbar;
