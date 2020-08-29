import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  getCurrentUserAction,
  logoutAction,
} from "../../redux/actions/auth.actions";
import { getUserId } from "../../services/localStorage.service";
import Avatar from "./Avatar";
import NavLink from "./NavLink";
import Alert from "../Alert";
import { Link } from "react-router-dom";

const Navigation = ({ user, getCurrentUserAction, logoutAction }) => {
  const userId = getUserId();

  useEffect(() => {
    if (userId) {
      getCurrentUserAction(userId);
    }
  }, [userId]);

  const [isOpen, toggle] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        <i className="fas fa-film"></i>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        onClick={() => toggle(!isOpen)}
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        style={{ display: isOpen ? "block" : "none" }}
        className="navbar-collapse collapse"
      >
        {user?.roleId === 1 && (
          <div className="mr-auto navbar-nav">
            <NavLink to="/admin/users" label="Users" />
            <NavLink to="/admin/movies" label="Movies" />
            <NavLink to="/admin/genres" label="Genres" />
            <NavLink to="/admin/actors" label="Actors" />
            <NavLink to="/admin/receipts" label="Receipts" />
          </div>
        )}
        <hr />
        <Avatar user={user} logout={logoutAction} />
      </div>
      <Alert />
    </nav>
  );
};

const mapStateToProps = (state) => ({
  user: state.currentUser,
});

const mapDispatchToProps = {
  logoutAction,
  getCurrentUserAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
