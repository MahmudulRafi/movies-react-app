import React, { Component, useEffect } from "react";
import Pagination from "../common/pagination.component";
import "bootstrap-icons/font/bootstrap-icons.css";
import Filtering from "../common/filtering.component";
import "../assets/movies.css";
import { getMovies, getGenres } from "../services/movies.service";
import MoviesTable from "./movies-table.component";

class Movies extends Component {
    state = {
        movies: getMovies(),
        genres: [{ name: "All Genres" }, ...getGenres()],
        itemsPerPage: 7,
        activePage: 1,
        selectedGenre: "All Genres",
    };

    handleSelectedGenre = (genre) => {
        this.setState({ ...this.state, selectedGenre: genre, activePage: 1 });
    };

    filterMovies = () => {
        const { movies, selectedGenre } = this.state;

        const filteredMovies = movies.filter((movie) => {
            if (selectedGenre === "All Genres") return movie;
            if (movie.genres.includes(selectedGenre)) return true;
            else return false;
        });
        return filteredMovies;
    };

    paginateMovies = (movies) => {
        const { itemsPerPage, activePage } = this.state;
        const startPage = (activePage - 1) * itemsPerPage;
        const paginatedMovies = movies.slice(
            startPage,
            startPage + itemsPerPage
        );

        return paginatedMovies;
    };

    handleUserRating = (id) => {
        const moviesList = this.state.movies;

        moviesList.forEach((movie) => {
            if (movie.movieId === id)
                movie.yourRating === false
                    ? (movie.yourRating = true)
                    : (movie.yourRating = false);
        });

        this.setState({ movies: moviesList });
    };

    handleActivePage = (page) => {
        this.setState({ ...this.state.movies, activePage: page });
    };

    render() {
        const filteredMovies = this.filterMovies();
        const movies = this.paginateMovies(filteredMovies);

        return (
            <>
                <div class="container-fluid">
                    <div className="row">
                        <Filtering
                            items={this.state.genres.map((genre, index) => ({
                                id: index,
                                name: genre.name,
                            }))}
                            selectedItem={this.state.selectedGenre}
                            onClick={this.handleSelectedGenre}
                        />
                        <div className="col-lg-10">
                            <div className="heading">
                                <img
                                    className="page-heading"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png"
                                ></img>
                                {/* <h3 className="page-heading">IMDb</h3> */}

                                <h6 className="show-selected-genre">
                                    Gerne : &nbsp;
                                    {this.state.selectedGenre === ""
                                        ? null
                                        : this.state.selectedGenre}
                                    &nbsp; &nbsp;
                                </h6>
                                <h6 className="page-content-count">
                                    Showing {filteredMovies.length} Movies
                                    &nbsp; &nbsp;
                                </h6>
                            </div>
                            <MoviesTable
                                movies={movies}
                                onClick={this.handleUserRating}
                            />
                            <Pagination
                                totalItemsCount={filteredMovies.length}
                                itemsPerPage={this.state.itemsPerPage}
                                activePage={this.state.activePage}
                                onActivePage={this.handleActivePage}
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Movies;
