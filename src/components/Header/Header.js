import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";
import user from "../../images/user.png";
import "./Header.css";

const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (term === "") return alert("Please enter search term!");
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("");
  };
  return (
    <div className="header navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/home">
          MovieApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
  <ul className="navbar-nav ml-auto">
    <li className="nav-item">
      <Link className="nav-link" to="/home">
        <i className="fa fa-home fa-fw fa-xs "></i>Home
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/post">
        <i className="fa fa-pencil fa-fw fa-xs "></i>Post
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/">
        <i className="fa fa-list fa-fw fa-xs "></i>Posts
      </Link>
    </li>
  </ul>
</div>

<div className="search-bar">
          <form onSubmit={submitHandler} className="form-inline">
            <div className="input-group">
              <input
                type="text"
                value={term}
                placeholder="Search Movies or Shows"
                onChange={(e) => setTerm(e.target.value)}
                className="form-control"
              />
              <div className="input-group-append">
                <button type="submit" className="btn btn-primary input-group-text">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="user-image">
          <img src={user} alt="user" />
        </div>
      </div>
    </div>
  );
};

export default Header;
