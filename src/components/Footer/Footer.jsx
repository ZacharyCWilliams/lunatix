import React from 'react';
import "./Footer.scss";
import GooglePlay from "../../assets/google-play.jpg";
import AppStore from "../../assets/iphone-app-store.jpg";
import FooterSearchBar from "../../assets/search-bar-2.png"
import { Link } from "react-router-dom";
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function Footer() {
  return (
    <section className="footer-container">
      <div className="app-store-container">
        <img src={GooglePlay} className="app-store-button" alt="google-play"/>
        <img src={AppStore} className="app-store-button" alt="app-store"/>
      </div>
      <img src={FooterSearchBar} alt="footer-search-bar" className="footer-search-bar"/>
      <div className="venmo">
        <p className="venmo-paragraph">Powered By</p>
        <h2 className="venmo-header">venmo</h2>
      </div>
      <div className="footer-links">
         <Link to="/about" className="footer-link">About</Link> <p className="footer-seperator">|</p> <Link to="/support" className="footer-link">Support</Link> <p className="footer-seperator">|</p> <Link to="/terms" className="footer-link">Terms And Conditions</Link>
      </div>
      <div className="copyright">
        <p>Copyright © 2020 Sl Tickets | All Rights Reserved</p>
      </div>
      <div className="social-icons">
        <div className="icon-circle">
          <TwitterIcon />
        </div>
        <div className="icon-circle">
          <FacebookIcon />
        </div>
        <div className="icon-circle">
          <InstagramIcon />
        </div>
      </div>
    </section>
  )
}