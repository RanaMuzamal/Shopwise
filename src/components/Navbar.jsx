import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const state=useSelector((state)=>state.handleCart)
  return (
      <nav className="navbar navbar-expand-lg bg-info bg-gradient">
        <div className="container">
          <NavLink className="navbar-brand fw-bold text-light" to="/">
            Shopwise
          </NavLink>
          <div className="buttons">
            <NavLink to="/" className=" btn text-light">
              SHOP
            </NavLink>
            <NavLink to="/cart" className=" btn text-light">
              CART ({state.length})
            </NavLink>
          </div>
        </div>
      </nav>
    
  );
}

export default Navbar;
