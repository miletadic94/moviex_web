import React, { useState, Fragment, useEffect } from "react";
import { connect } from "react-redux";
import BasicInfoCard from "./cards/BasicInfo";
import Trailer from "./cards/Trailer";
import Review from "./cards/Review";
import { getMovieAction } from "../../redux/actions/movies.actions";
import { addReviewAction } from "../../redux/actions/review.actions";

const TABS = [
  { key: "basicInfo", label: "Basic Info" },
  { key: "trailer", label: "Trailer" },
  { key: "review", label: "Review" },
];

function SingleMovie({
  getMovieAction,
  addReviewAction,
  movie,
  currentUser,
  match,
}) {
  const [activeTab, setActiveTab] = useState("basicInfo");

  useEffect(() => {
    getMovieAction(match.params.id);
  }, []);

  function renderCard() {
    switch (activeTab) {
      case "basicInfo":
        return <BasicInfoCard movie={movie} />;
      case "trailer":
        return <Trailer trailerLink={movie.youtubeLink} />;
      case "review":
        return (
          <Review
            movieId={movie.id}
            addReview={addReviewAction}
            reviews={movie.reviews}
            display={currentUser?.isConfirmed}
          />
        );
      default:
        return null;
    }
  }

  if (!movie) return null;

  return (
    <Fragment>
      <header className="card__header">
        <nav className="movie_card_nav">
          <ul>
            {TABS.map(({ key, label }) => (
              <li
                key={key}
                className={activeTab === key ? "active" : ""}
                onClick={() => setActiveTab(key)}
              >
                <label>{label}</label>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {renderCard()}
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  movie: state.movie,
});

const mapDispatchToProps = {
  getMovieAction,
  addReviewAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleMovie);
