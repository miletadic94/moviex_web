import React, { Fragment } from "react";
import clickOutsideHOC from "../hoc/clickOutsideHoc";
import NavLink from "./NavLink";
import ShoppingCart from "./ShoppingCart";
import { ROLE } from "../../utils/constants";

const AvatarDropdown = ({ user, open, logout }) => {
  return (
    <div className="nav-item dropdown">
      {user.isConfirmed ? (
        <span className="pointer">{`${user.firstName} ${user.lastName}`}</span>
      ) : (
        <span className="pointer">Not Confirmed</span>
      )}
      {open && (
        <div className="dropdown-menu d-block">
          <a className="dropdown-item" href="/user-profile">
            My Profile
          </a>
          {user.roleId === ROLE.USER.KEY && (
            <a className="dropdown-item" href="/user-receipts">
              My Orders
            </a>
          )}
          <hr />
          <a className="dropdown-item" onClick={logout} href="#">
            Logout
          </a>
        </div>
      )}
    </div>
  );
};

export const AvatarDropdownHoc = clickOutsideHOC(AvatarDropdown);

const Avatar = ({ user, shoppingCart, logout }) => {
  if (!user) {
    return (
      <div className="nav">
        <NavLink to="/login" label="Login" />
        <NavLink to="/register" label="Register" />
      </div>
    );
  } else if (user.isConfirmed) {
    return (
      <Fragment>
        {user.roleId === ROLE.USER.KEY && (
          <div className="navbar-brand">
            <ShoppingCart shoppingCart={shoppingCart} />
          </div>
        )}
        <AvatarDropdownHoc user={user} logout={logout} />
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <AvatarDropdownHoc user={user} logout={logout} />
      </Fragment>
    );
  }
};

export default Avatar;
