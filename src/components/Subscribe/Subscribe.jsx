import React from 'react';
import "./Subscribe.scss";
import BannerBackground from "../../assets/banner.jpg"

export default function Subscribe() {
  return (
    <section className="subscription-section">
      <div className="subscription-form">
        <h2 className="subscription-header">SUBSCRIBE</h2>
        <div className="subscribe-sign-up">
        <form className="subscription-inputs">
          <div className="top-inputs">
            <input className="name-input" type="text" name="first-name" placeholder="First Name" />
            <input className="name-input" type="text" name="last-name" placeholder="Last Name" />
          </div>
          <div className="bottom-inputs">
            <input className="bottom-input" type="text" name="email" placeholder="Email" />
            <input className="bottom-input" type="text" name="username" placeholder="User Name" />
            <input className="bottom-input" type="text" name="password" placeholder="Password" />
            <input className="bottom-input" type="text" name="name" placeholder="Repeat Password" />
          </div>
          <div className="terms-and-conditions">
            <input className="radio-btn" type="radio" checked={false} />
            <p>I Agree to Terms of Use and Privacy Policy</p>
          </div>
          <button className="sign-up-button">
            Sign Up
          </button>
        </form>
        </div>
        <img className="subscription-section-background" src={BannerBackground} alt="Subscription Background"/>
      </div>
    </section>
  )
}
