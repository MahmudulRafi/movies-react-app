import React, { Component } from "react";
import Pagination from "../common/pagination.component";
import "bootstrap-icons/font/bootstrap-icons.css";
import Filtering from "../common/filtering.component";
import "../assets/movies.css";
import { getMovies, getGenres } from "../services/movies.service";
import MoviesTable from "./movies-table.component";
import _ from "lodash";

class Movies extends Component {
    state = {
        movies: getMovies(),
        genres: [{ name: "All Genres" }, ...getGenres()],
        itemsPerPage: 6,
        activePage: 1,
        selectedGenre: "All Genres",
        sortColumn: { path: "title", order: "asc" },
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

    sortMovies = (movies) => {
        const { sortColumn } = this.state;
        const sortedMovies = _.orderBy(
            movies,
            [sortColumn.path],
            [sortColumn.order]
        );
        return sortedMovies;
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

    handleSort = (sortColumn) => {
        this.setState({ ...this.state, sortColumn });
    };

    handleActivePage = (page) => {
        this.setState({ ...this.state.movies, activePage: page });
    };

    render() {
        const filteredMovies = this.filterMovies();
        const sortedMovies = this.sortMovies(filteredMovies);
        const movies = this.paginateMovies(sortedMovies);

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
                            onSelectItem={this.handleSelectedGenre}
                        />
                        <div className="col-lg-10">
                            <div className="heading">
                                {/* <img
                                    className="page-heading"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png"
                                ></img> */}
                                <h3
                                    style={{ color: "rgb(235, 204, 30)" }}
                                    className="text-center"
                                >
                                    IMDb Top Movies
                                </h3>

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
                                onRating={this.handleUserRating}
                                onSort={this.handleSort}
                                sortColumn={this.state.sortColumn}
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
