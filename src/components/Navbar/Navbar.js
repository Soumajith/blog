import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="leftNav">
        <p className="logo">Casper</p>
        <ul className="list">
          <Link className="activity" to={"/"}>
            <li>Home</li>
          </Link>
          <Link className="activity" to={"/trending"}>
            <li>Trending</li>
          </Link>
        </ul>
      </div>
      <div className="rightNav">
        <div className="activity-list">
          <Link className="activity" to={"/profile"}>
            MyProfile
          </Link>
          <Link className="activity" to={"/search"}>
            Search
          </Link>
        </div>
        <div className="register">
          <button class="button-64">
            <span class="text">Register</span>
          </button>
          <button class="button-64">
            <span class="text">Log in</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
