import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark nav-brand">
        <div className="container-fluid">
          <NavLink className="aa navbar-brand" to="/dashboard">
            <img width="30" height="30" src="/images/fola-logo.png" className="d-inline-block align-top" alt="FF-Initiative Logo"/>
          </NavLink>
          {/* <button NclassName="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                {/* <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a> */}
                <NavLink to="/dashboard" className="nav-link">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services" className="nav-link">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">About</NavLink>
              </li>
            </ul>
          </div>
          <button className="btn mr-sm-2" onClick={startLogout}>Logout</button>
        </div>
      </nav>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
