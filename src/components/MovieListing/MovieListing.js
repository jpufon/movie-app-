import React from "react";
import Slider from 'react-slick';
import {Settings} from "../../common/Settings";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./MovieListing.css";
const MovieListing = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  // =================================
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderMovies,
    renderShows = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
    ) : (
      <div className="shows-error">
        <h3>{shows.Error}</h3>
      </div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2 className="text-info">Movies</h2>
        <div className="movie-container">
          <Carousel responsive={responsive}>{renderMovies}</Carousel></div>
      </div>
      <div className="show-list">
        <h2 className="text-info">Shows</h2>
        <div className="movie-container">
        <Carousel responsive={responsive}>{renderShows}</Carousel></div>
      </div>
    </div>
  );
};

export default MovieListing;