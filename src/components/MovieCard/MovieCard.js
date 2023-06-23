import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieCard = (props) => {
  const { data } = props;

  return (
    <div className="card card-item">
      <Link to={`/movie/${data.imdbID}`}>
        <div className="card-img-container">
          <img className="card-img" src={data.Poster} alt={data.Title} />
        </div>
        <div className="card-body">
          <h5 className="card-title">{data.Title}</h5>
          <p className="card-text">{data.Year}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
