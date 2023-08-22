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
          <Link className="activity" to={"/addPost"}>
            Add Post +
          </Link>
          <Link className="activity" to={"/profile"}>
            MyProfile
          </Link>
          <Link className="activity" to={"/search"}>
            Search
          </Link>
        </div>
        <div className="register">
          <button className="button-64 button-register">
            <Link to={"/register"} className="button-link">
              <span className="text">Register</span>
            </Link>
          </button>

          <button className="button-64 button-register">
            <Link to={"/login"} className="button-link">
              <span className="text">Log in</span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
