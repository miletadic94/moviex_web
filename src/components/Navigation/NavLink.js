import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ to = "/", label, disabled = false }) => {
  return (
    <Link to={to} className={`nav-link${disabled ? " disabled" : ""}`}>
      {label}
    </Link>
  );
};

export default NavLink;
