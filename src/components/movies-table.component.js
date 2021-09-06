const MoviesTable = (props) => {
    const { movies, onClick } = props;
    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Poster</th>
                    <th scope="col">Title</th>
                    <th scope="col">IMDB Rating</th>
                    <th scope="col">Your Rating</th>
                </tr>
            </thead>
            <tbody>
                {movies.map((movie) => (
                    <tr>
                        <td>
                            <img
                                style={{
                                    width: "32px",
                                    height: "auto",
                                }}
                                src={movie.posterurl}
                            ></img>
                        </td>
                        <td>{movie.title}</td>
                        <td>
                            <i class="bi bi-star">{" " + movie.imdbRating}</i>
                        </td>
                        <td>
                            <i
                                onClick={() => onClick(movie.movieId)}
                                className={
                                    movie.yourRating
                                        ? "bi bi-star-fill"
                                        : "bi bi-star"
                                }
                            >
                                {movie.yourRating ? " Rated" : " "}
                            </i>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default MoviesTable;
