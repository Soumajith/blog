import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerLeft">
        <p className="logo end">Casper</p>
        <div>
          <p className="aboutHead">About Us</p>
          <p className="about">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            voluptates distinctio doloremque ut illum mollitia corporis non sint
            delectus modi.
          </p>
        </div>
      </div>
      <div className="footerRight">
        <p className="about">Facebook</p>
        <p className="about">Instagram</p>
        <p className="about">LinkedIn</p>
      </div>
    </div>
  );
};

export default Footer;
