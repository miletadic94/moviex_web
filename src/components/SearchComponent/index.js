import React, { useState } from "react";
import { connect } from "react-redux";

import { getMoviesAction } from "../../redux/actions/movies.actions";
import debounce from "../../utils/debounce";

const SearchComponent = ({ getMoviesAction }) => {
  const [searchValue, setSearchValue] = useState("");

  const debouncedGetMovie = debounce(getMoviesAction);

  const handleGetMovies = (event) => {
    const { value } = event.target;
    setSearchValue(value);
    debouncedGetMovie(value);
  };

  return (
    <input
      value={searchValue}
      className="search-field"
      placeholder="Looking for a movie?"
      onChange={handleGetMovies}
    />
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  getMoviesAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);
