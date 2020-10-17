import { ArrowDropDown } from "@material-ui/icons";
import React, { useState } from "react";
import "./MyCart.scss";
import ArrowDropDownCircleOutlinedIcon from '@material-ui/icons/ArrowDropDownCircleOutlined';

export default function DropDown({ title, items, select = false, selection, setSelection }) {
  
  const [open, setOpen] = useState(true)
  // const [selection, setSelection] = useState(1)
  
  function handleClick(item) {
    setSelection(item.value)
    console.log(selection)
  }

  return (
    <div className="dropdown-wrapper">
      <div className="dropdown-header" onClick={() => setOpen(!open)}>
        <div className="dropdown-menu">
          <p className="paragraph-icon">{<ArrowDropDownCircleOutlinedIcon fontSize="large" />}</p>
          {open ? <p className="selection-paragraph">{selection}</p> : 
          <>
          <p className="selection-paragraph">Select</p>
          <ul className="dropdown-menu-ul">
            {items.map(item => (
              <li key={item.value} className="dropdown-li">
                <button className="dropdown-btn" onClick={() => handleClick(item)}>
                  <span>{item.value}</span>
                </button>
              </li>
            ))}
          </ul>
          </>}
        </div>
      </div>
    </div>
  )
}