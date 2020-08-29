import React, { Fragment } from "react";
import SearchComponent from "../../components/SearchComponent";
import MoviesComponent from "../../components/MoviesComponent";

const Home = () => {
  return (
    <Fragment>
      <SearchComponent />
      <MoviesComponent />
    </Fragment>
  );
};

export default Home;
