import React, { Component } from "react";
import { getMovies } from "../services/movies.service";

class Movie extends Component {
    state = {
        movies: getMovies(),
    };

    findMovie = (movieId) => {
        return this.state.movies.find((movie) => movie.movieId == movieId);
    };

    render() {
        const movie = this.findMovie(this.props.match.params.movieId);

        return (
            <div>
                <br />
                <br />
                <h3 style={{ textAlign: "center" }}>{movie.title}</h3>
                <br />
                <div
                    style={{
                        textAlign: "center",
                    }}
                >
                    <img
                        src={movie.posterurl}
                        style={{
                            width: "200px",
                            height: "200px",
                        }}
                    ></img>
                </div>
            </div>
        );
    }
}

export default Movie;
