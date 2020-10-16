import React from "react";
import { Link, Route } from "react-router-dom";
import "./NavBar.scss";
import Logo from "../../assets/logo.png";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

export default function NavBar() {
  return (
    <section className="navbar-container">
      <section className="logo-section">
        <Link to="/">
          <img src={Logo} alt="Logo" className="logo-image"/>
        </Link>
      </section>
      <section className="main-navigation">
        <Link to="/sports" className="main-nav-link">SPORTS</Link>
        <Link to="/concerts" className="main-nav-link">CONCERTS</Link>
        <Link to="/theatre" className="main-nav-link">THEATRE</Link>
        <Link to="/" className="main-nav-link">MORE</Link>
      </section>
      <section className="my-tickets-section">
        <h2 className="ticket-h2">MY TICKETS</h2>
        <AccountCircleOutlinedIcon className="profile-icon" style={{ fontSize: "4rem" }} />
      </section>
    </section>
  )
}