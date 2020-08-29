import React from "react";
import Loader from "../Loader";

export const Button = ({ type, label, onClick, isLoading }) => (
  <button
    className="btn btn-lg btn-outline-info btn-block"
    onClick={onClick ? onClick : undefined}
    type={type}
  >
    {isLoading ? <Loader /> : label}
  </button>
);
