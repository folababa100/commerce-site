import React from 'react';
import { NavLink } from "react-router-dom";

const HeaderFilterDesign = () => {
  return (
    <div>
      <nav className="navbar navbar-adjust-all navbar-expand-lg navbar-light">
        <div className="container">
          <NavLink className="aa navbar-brand brand-adjust" to="/dashboard">
            <img width="50" height="70" src="/images/fola-logo.png" className="d-inline-block align-top" alt="FF-Initiative Logo" />
            FF-Initiative
          </NavLink>
          <form className="mr-4 flex reset-search">
            <input type="search" className="form-control reset-form" placeholder="Search Products" />
            <button className="btn reset-btn">
              <i className="ion-ios-search"></i>
            </button>
          </form>
          <ul className="navbar-nav">
            <li className="nav-item flex">
              <i className="ion-android-favorite-outline x3"></i>
              <NavLink to="/store-locator" className="nav-link line-adjust">Liked Items</NavLink>
            </li>
            <li className="nav-item flex">
              <i className="ion-ios-cart-outline x3"></i>
              <NavLink to="/dial" className="nav-link line-adjust">Cart</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default HeaderFilterDesign;
