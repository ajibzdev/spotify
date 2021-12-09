import React from "react";
import "./navbarResponsive.scss";

const NavbarResponsive = () => {
  return (
    <div className="navbar">
      <div className="navbar__left"></div>
      <div className="navbar__right">
        <div className="navbar__item"> Premium </div>
        <div className="navbar__item"> Support </div>
        <div className="navbar__item">Download</div>
        <div className="navbar__divider"></div>
        <div className="navbar__item"> Sign up </div>
        <div className="navbar__item"> Log in </div>
      </div>
    </div>
  );
};

export default NavbarResponsive;
