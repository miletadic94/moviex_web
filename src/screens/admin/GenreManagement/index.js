import React, { useEffect } from "react";
import { connect } from "react-redux";
import Table from "../../../components/Table";
import { Link } from "react-router-dom";
import { getGenresAction } from "../../../redux/actions/genres.actions";

const HEADER_ITEMS = [
  {
    key: "id",
    label: "#",
  },
  {
    key: "name",
    label: "Name",
  },
];

const GenreManagement = ({ getGenresAction, data, history, match }) => {
  useEffect(() => {
    getGenresAction();
  }, []);

  const editAction = (id) => {
    history.push(`${match.url}/edit/${id}`);
  };

  if (!data) return null;

  return (
    <div>
      <div className="row align-items-center my-3">
        <h2 className="col-md-4">Genre Management</h2>
        <Link
          to={`${match.url}/create`}
          className="col-md-2 offset-6 text-right"
        >
          Create Genre
        </Link>
      </div>
      <Table headerItems={HEADER_ITEMS} data={data} editAction={editAction} />
    </div>
  );
};

const mapStateToProp = (state) => ({
  data: state.genres,
});

const mapDispatchToProps = { getGenresAction };

export default connect(mapStateToProp, mapDispatchToProps)(GenreManagement);
