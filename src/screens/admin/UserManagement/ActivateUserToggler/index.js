import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { editUserAction } from "../../../../redux/actions/users.actions";

const Toggler = ({ name, value, onClick }) => (
  <div className="custom-control custom-switch d-inline-block">
    <input
      id={name}
      name={name}
      type="checkbox"
      className="custom-control-input"
      checked={value}
      onChange={(e) => onClick(e.target.checked)}
    />
    <label htmlFor={name} className="custom-control-label" />
  </div>
);

const ActivateUserToggler = ({ user, editUserAction }) => {
  const [isConfirmed, setIsConfirmed] = useState(user.isConfirmed);

  const toggleUserActivation = (isConfirmed) => {
    if (user) {
      editUserAction(user.id, { ...user, isConfirmed });
      setIsConfirmed(isConfirmed);
    }
  };

  return (
    <td key={`activate-${user.id}`} className="text-center">
      <Toggler value={isConfirmed} onClick={toggleUserActivation} />
    </td>
  );
};

const mapDispatchToProps = {
  editUserAction,
};

export default connect(null, mapDispatchToProps)(ActivateUserToggler);
