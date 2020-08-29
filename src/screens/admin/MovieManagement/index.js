import React, { useEffect } from "react";
import { connect } from "react-redux";
import Table from "../../../components/Table";
import { Link } from "react-router-dom";
import { getMoviesAction } from "../../../redux/actions/movies.actions";

const HEADER_ITEMS = [
  {
    key: "id",
    label: "#",
  },
  {
    key: "title",
    label: "Title",
  },
  {
    key: "director",
    label: "Director",
  },
  {
    key: "genres",
    label: "Genres",
  },
];

const MovieManagement = ({ getMoviesAction, data, history, match }) => {
  useEffect(() => {
    getMoviesAction();
  }, []);

  const goToEditMovie = (id) => {
    history.push(`${match.url}/edit/${id}`);
  };

  const goToAddProduct = (id) => {
    history.push(`${match.url}/add-product/${id}`);
  };

  if (!data) return null;

  return (
    <div>
      <div className="row align-items-center my-3">
        <h2 className="col-md-4">Movie Management</h2>
        <Link
          to={`${match.url}/create`}
          className="col-md-2 offset-6 text-right"
        >
          Create Movie
        </Link>
      </div>
      <Table
        headerItems={HEADER_ITEMS}
        data={data}
        editAction={goToEditMovie}
        addProductAction={goToAddProduct}
      />
    </div>
  );
};

const mapStateToProp = (state) => ({
  data: state.movies,
});

const mapDispatchToProps = { getMoviesAction };

export default connect(mapStateToProp, mapDispatchToProps)(MovieManagement);
