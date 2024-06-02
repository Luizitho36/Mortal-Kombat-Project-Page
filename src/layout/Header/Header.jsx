import React from 'react';
import MKHeader from "../../img/Header.jpg";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
        {/* Imágen principal de la web */}
        <NavLink to="/" className="Header">
          <img className="Header" src={MKHeader}></img>
        </NavLink>
    </>
  )
}

export default Header;