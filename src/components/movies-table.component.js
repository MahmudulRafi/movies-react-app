import React from "react";
import Table from "../common/table.component";

const MoviesTable = ({ movies, onClick }) => {
    const columns = [
        {
            label: "Poster",
            content: (movie) => (
                <td>
                    <img
                        style={{
                            width: "32px",
                            height: "auto",
                        }}
                        src={movie.posterurl}
                    ></img>
                </td>
            ),
        },
        {
            label: "Title",
            content: (movie) => <td>{movie.title}</td>,
        },
        {
            label: "IMDB Rating",
            content: (movie) => (
                <td>
                    <i class="bi bi-star">{" " + movie.imdbRating}</i>
                </td>
            ),
        },
        {
            label: "Your Rating",
            content: (movie) => (
                <td>
                    <i
                        onClick={() => onClick(movie.movieId)}
                        className={
                            movie.yourRating ? "bi bi-star-fill" : "bi bi-star"
                        }
                    >
                        {movie.yourRating ? " Rated" : " "}
                    </i>
                </td>
            ),
        },
    ];

    return <Table items={movies} onClick={onClick} columns={columns} />;
};

export default MoviesTable;
