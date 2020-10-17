import React, { useState } from 'react';
import "./MyCart.scss";
import BannerBackground from "../../assets/banner.jpg"
import DropDown from "./DropDown";
import Delete from "../../assets/trash.png";

export default function MyCart({ event }) {

  const [open, setOpen] = useState(false)
  const [quantity, setQuantity] = useState(1)


  const money = quantity * 500

  const values = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 }
  ]

  const changeValue = (val) => {
    setQuantity(val)
  }

  return (
    <section className="my-cart-section">
      <div className="my-cart">
        <div className="my-cart-top">
          <h2>MY CART</h2>
          <button className="exit-btn">
            X
          </button>
        </div>
        <div className="my-cart-middle">
          <div className="left-column">
            <h2 className="left-column-item">EVENT 1</h2>
            <p className="left-column-item col-item">Venue</p>
            <p className="left-column-item col-item">Date</p>
            <div className="left-col-dropdown">
              <h2 className="left-column-item">QUANTITY</h2>
              <DropDown title="Select" items={values} selection={quantity} setSelection={setQuantity} />
            </div>
          </div>
          
          <h2 className="price">
            ${money}
          </h2>
          <img className="delete-btn" src={Delete} alt="Delete-Button"/>
          {/* <li className="nav-item" onClick={() => setOpen(!open)}>
            {open}
          </li> */}
        </div>
        <div className="my-cart-bottom">
          <button className="bottom-cart-button-one">Continue Shopping</button>
          <button className="bottom-cart-button-two">Checkout</button>
        </div>
      </div>
      <img className="my-cart-section-background" src={BannerBackground} alt="Banner Background"/>
    </section>
  )
}
