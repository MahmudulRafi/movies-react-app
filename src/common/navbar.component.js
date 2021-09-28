import React from "react";
import { Link } from "react-router-dom";
import Form from "./form.component";
import { getMovies } from "../services/movies.service";

class Navbar extends Form {
    state = {
        data: { searchQuery: "" },
        errors: {},
        movies: getMovies(),
    };

    clearSearch = () => {
        const data = this.state.data;
        data.searchQuery = "";

        this.setState({ ...this.state, data });
    };

    doSubmit = (event) => {};

    searchMovies = () => {
        if (this.state.data.searchQuery.trim() == "") return [];

        return this.state.movies
            .filter((movie) =>
                movie.title
                    .toLowerCase()
                    .includes(this.state.data.searchQuery.toLowerCase())
            )
            .filter((movie, idx) => idx < 10);
    };

    render() {
        const searchedMovies = this.searchMovies();

        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/home">
                        <img
                            style={{ width: "60px", height: "32px" }}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png"
                        ></img>
                    </Link>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div
                        class="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link" to="/movies">
                                    Movies
                                </Link>
                            </li>
                        </ul>
                        <form
                            class="d-flex w-50 mx-auto"
                            onSubmit={this.handleSubmit}
                        >
                            <input
                                class="form-control me-2"
                                type="search"
                                placeholder="Search"
                                name="searchQuery"
                                onChange={this.handleChange}
                                value={this.state.data.searchQuery}
                                aria-label="Search"
                            />

                            <div
                                class={
                                    searchedMovies.length
                                        ? "card"
                                        : "card d-none"
                                }
                                style={{
                                    position: "absolute",
                                    top: 50,
                                    width: "34rem",
                                }}
                            >
                                <ul class="list-group list-group-flush">
                                    {searchedMovies.map((movie, idx) => (
                                        <li
                                            key={idx}
                                            onClick={this.clearSearch}
                                            className="list-group-item"
                                            style={{ cursor: "pointer" }}
                                        >
                                            <Link
                                                style={{
                                                    textDecoration: "none",
                                                    color: "black",
                                                }}
                                                to={"/movie/" + movie.movieId}
                                            >
                                                {movie.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button
                                class="btn btn-outline-success"
                                type="submit"
                            >
                                Search
                            </button>
                        </form>
                        <ul class="navbar-nav">
                            <li class="nav-item d-flex">
                                <Link class="nav-link" to="/login">
                                    Login
                                </Link>
                            </li>
                            <li class="nav-item d-flex">
                                <Link class="nav-link" to="/sign-up">
                                    Sign Up
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
