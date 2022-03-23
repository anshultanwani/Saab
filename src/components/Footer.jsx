import React from 'react';
import {  Link } from "react-router-dom";
import './header.scss';

const Footer = props => {
    return (
        <div className='footer'>
        <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/my-ratings">My Ratings</Link>
    </li>
    <li>
      <Link to="/my-dishes">My Dishes</Link>
    </li>
    <li>
      <Link to="/payments">Payment</Link>
    </li>
        </div>
    )
};

export default Footer;