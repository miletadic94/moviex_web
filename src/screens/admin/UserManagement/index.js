import React, { useEffect } from "react";
import { connect } from "react-redux";
import Table from "../../../components/Table";
import { Link } from "react-router-dom";
import { getUsersAction } from "../../../redux/actions/users.actions";

const ROLE_LABELS = {
  1: "ADMIN",
  2: "USER",
};

const HEADER_ITEMS = [
  {
    key: "id",
    label: "#",
  },
  {
    key: "firstName",
    label: "First Name",
  },
  {
    key: "lastName",
    label: "Last Name",
  },
  {
    key: "email",
    label: "Email",
  },
  {
    key: "phoneNumber",
    label: "Phone Number",
  },
  {
    key: "role",
    label: "Role",
  },
];

const UserManagement = ({ getUsersAction, data, history, match }) => {
  useEffect(() => {
    getUsersAction();
  }, []);

  const goToEditUser = (id) => {
    history.push(`${match.url}/edit/${id}`);
  };

  if (!data) return null;

  return (
    <div>
      <div className="row align-items-center my-3">
        <h2 className="col-10">User Management</h2>
        <Link to={`${match.url}/create`} className="col-2 text-right">
          Create User
        </Link>
      </div>
      <Table
        headerItems={HEADER_ITEMS}
        data={data.map((item) => ({
          ...item,
          role: ROLE_LABELS[item.roleId],
        }))}
        editAction={goToEditUser}
        activateAction={true}
      />
    </div>
  );
};

const mapStateToProp = (state) => ({
  data: state.users,
});

const mapDispatchToProps = { getUsersAction };

export default connect(mapStateToProp, mapDispatchToProps)(UserManagement);
