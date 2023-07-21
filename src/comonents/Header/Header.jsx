import React from "react";
import "./Header.css";
import logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header className="header">
      {/* logo container  */}
      <Link to="/" className="nav-logo">
        <img src={logo} alt="brand-log" />
        <p>Fashion Frenzy Boutique</p>
      </Link>

      {/* menu container  */}
      <div className="menu">
        <NavLink
          to="/"
          title="Home"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Home
        </NavLink>

        <NavLink
          to="/shop"
          title="Shop"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Shop
        </NavLink>

        <NavLink
          to="/cart"
          title="Order Cart"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          <ShoppingBagIcon className="cart-icon" />
        </NavLink>

        <NavLink
          to="/About"
          title="About Us"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          About
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
