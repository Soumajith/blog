import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Error.css";
const Error = () => {
  return (
    <>
      <Navbar />
      <div className="error-section">
        <p className="error-head">404</p>
        <p className="error-subHead">Not Found</p>
        <p className="error-message">
          Sorry, the page you were looking for in this blog does not exist.
        </p>
        <button class="button-64">
          <span class="text">Home</span>
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Error;
