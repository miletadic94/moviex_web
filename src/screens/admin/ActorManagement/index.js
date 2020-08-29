import React, { useEffect } from "react";
import { connect } from "react-redux";
import Table from "../../../components/Table";
import { Link } from "react-router-dom";
import { getActorsAction } from "../../../redux/actions/actors.actions";

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
    key: "dateOfBirth",
    label: "Date of Birth",
    type: "date",
  },
  {
    key: "placeOfBirth",
    label: "Place of Birth",
  },
];

const UserManagement = ({ getActorsAction, data, history, match }) => {
  useEffect(() => {
    getActorsAction();
  }, []);

  const goToEditUser = (id) => {
    history.push(`${match.url}/edit/${id}`);
  };

  if (!data) return null;

  return (
    <div>
      <div className="row align-items-center my-3">
        <h2 className="col-10">Actor Management</h2>
        <Link to={`${match.url}/create`} className="col-2 text-right">
          Create Actor
        </Link>
      </div>
      <Table
        headerItems={HEADER_ITEMS}
        data={data.map((item) => ({
          ...item,
        }))}
        editAction={goToEditUser}
      />
    </div>
  );
};

const mapStateToProp = (state) => ({
  data: state.actors,
});

const mapDispatchToProps = { getActorsAction };

export default connect(mapStateToProp, mapDispatchToProps)(UserManagement);
