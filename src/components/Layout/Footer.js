import React, { useState } from "react";
import "./Footer.css";
import "../UI/Navbar.css";

//Importing Images
import fb from "../../Icons/fb.svg";
import insta from "../../Icons/insta.svg";
import twitter from "../../Icons/twitter.svg";

const Footer = () => {
  const [email, setEmail] = useState('')
  const submitHandler = (event) => {
    event.preventDefault();
    fetch('https://website-a4882-default-rtdb.asia-southeast1.firebasedatabase.app//meesage.json',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email
        })
      }
    ).then(res => res.json()).then(data => console.log(data))
    alert('You will soon get a revert! Happy Shopping')
    setEmail('')
  }
  const emailHandler = (event) => {
    setEmail(event.target.value);
  }
  return (
    <div className="footer__container">
      <div className="footer__top-section">
        <div className="navbar__name">Acciojob</div>
        <div className="footer__icons">
          <img src={fb} alt="img" />
          <img src={insta} alt="img" />
          <img src={twitter} alt="img" />
        </div>
      </div>
      <hr />
      <div className="footer__bottom-section">
        <div className="footer__nav">
          <h2>Company Info</h2>
          <ul>
            <li><a href="http://">About Usc</a></li>
            <li><a href="http://">Career</a></li>
            <li><a href="http://">We are hiring</a></li>
            <li><a href="http://">Blog</a></li>
          </ul>
        </div>
        <div className="footer__nav">
          <h2>Legal</h2>
          <ul>
            <li><a href="http://">About Us </a></li>
            <li><a href="http://">Career</a></li>
            <li><a href="http://">We are hiring</a></li>
            <li><a href="http://>">Blog</a></li>
          </ul>
        </div>
        <div className="footer__nav">
          <h2>Features</h2>
          <ul>
            <li><a href="http://">Buisness Marketing</a></li>
            <li><a href="http://">User Analytics</a></li>
            <li><a href="http://">Live Chat</a></li>
            <li><a href="http://>">Unlimited Support</a></li>
          </ul>
        </div>
        <div className="footer__nav">
          <h2>Resources</h2>
          <ul>
            <li><a href="http://">IOS & Android</a></li>
            <li><a href="http://">Watch a demo</a></li>
            <li><a href="http://">Customers</a></li>
            <li><a href="http://">API</a></li>
          </ul>
        </div>
        <div className="footer__nav">
          <h2>Get In Touch</h2>
          <form onSubmit={submitHandler}>
            <input type="Email" className="input" placeholder="Your Email" onChange={emailHandler} value={email} />
            <button className="btn">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer__thumbnail">
        <p>Made With <span className="heart">&#9829;</span> at Acciojob</p>
      </div>
    </div>
  );
};

export default Footer;
