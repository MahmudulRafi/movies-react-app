import React, { Component } from "react";
import Pagination from "../common/pagination.component";

class Movies extends Component {
    state = {
        movies: [
            {
                title: "The Shawshank Redemption",
                rank: "1",
                id: "tt0111161",
                imdbRating: 5,
                yourRating: false,
            },
            {
                title: "The Godfather",
                rank: "2",
                id: "tt0068646",
                imdbRating: 5,
                yourRating: false,
            },
            {
                title: "The Godfather: Part II",
                rank: "3",
                id: "tt0071562",
                imdbRating: 5,
                yourRating: false,
            },
            {
                title: "Pulp Fiction",
                rank: "4",
                id: "tt0110912",
                imdbRating: 5,
                yourRating: false,
            },
            {
                title: "The Good, the Bad and the Ugly",
                rank: "5",
                id: "tt0060196",
                imdbRating: 5,
                yourRating: false,
            },
            {
                title: "The Dark Knight",
                rank: "6",
                id: "tt0468569",
                imdbRating: 5,
                yourRating: false,
            },
            {
                title: "12 Angry Men",
                rank: "7",
                id: "tt0050083",
                imdbRating: 5,
                yourRating: false,
            },
            {
                title: "Schindler's List",
                rank: "8",
                id: "tt0108052",
                imdbRating: 5,
                yourRating: false,
            },
            {
                title: "The Lord of the Rings: The Return of the King",
                rank: "9",
                id: "tt0167260",
                imdbRating: 5,
                yourRating: false,
            },
            {
                title: "Fight Club",
                rank: "10",
                id: "tt0137523",
                imdbRating: 5,
                yourRating: false,
            },
            {
                title: "Star Wars: Episode V - The Empire Strikes Back",
                rank: "11",
                id: "tt0080684",
                imdbRating: 5,
                yourRating: false,
            },
            {
                title: "The Lord of the Rings: The Fellowship of the Ring",
                rank: "12",
                id: "tt0120737",
                imdbRating: 5,
                yourRating: false,
            },
            {
                title: "One Flew Over the Cuckoo's Nest",
                rank: "13",
                id: "tt0073486",
                imdbRating: 5,
                yourRating: false,
            },
            {
                title: "Inception",
                rank: "14",
                id: "tt1375666",
                imdbRating: 5,
                yourRating: false,
            },
            {
                title: "Goodfellas",
                rank: "15",
                id: "tt0099685",
                imdbRating: 5,
                yourRating: false,
            },
            {
                title: "Star Wars",
                rank: "16",
                id: "tt0076759",
                imdbRating: 5,
                yourRating: false,
            },
            {
                title: "Seven Samurai",
                rank: "17",
                id: "tt0047478",
                imdbRating: 5,
                yourRating: false,
            },
            {
                title: "Forrest Gump",
                rank: "18",
                id: "tt0109830",
                imdbRating: 5,
                yourRating: false,
            },
            {
                title: "The Matrix",
                rank: "19",
                id: "tt0133093",
                imdbRating: 5,
                yourRating: false,
            },
            {
                title: "The Lord of the Rings: The Two Towers",
                rank: "20",
                id: "tt0167261",
                imdbRating: 5,
                yourRating: false,
            },
            {
                title: "City of God",
                rank: "21",
                id: "tt0317248",
                imdbRating: 5,
                yourRating: false,
            },
            {
                title: "Se7en",
                rank: "22",
                id: "tt0114369",
                imdbRating: 5,
                yourRating: false,
            },
            {
                title: "The Silence of the Lambs",
                rank: "23",
                id: "tt0102926",
                imdbRating: 5,
                yourRating: false,
            },
            {
                title: "Once Upon a Time in the West",
                rank: "24",
                id: "tt0064116",
                imdbRating: 5,
                yourRating: false,
            },
            {
                title: "Casablanca",
                rank: "25",
                id: "tt0034583",
                imdbRating: 5,
                yourRating: false,
            },
            {
                title: "The Usual Suspects",
                rank: "26",
                id: "tt0114814",
                imdbRating: 5,
                yourRating: false,
            },
            {
                title: "Raiders of the Lost Ark",
                rank: "27",
                id: "tt0082971",
                imdbRating: 5,
                yourRating: false,
            },
            {
                title: "Rear Window",
                rank: "28",
                id: "tt0047396",
                imdbRating: 5,
                yourRating: false,
            },
            {
                title: "It's a Wonderful Life",
                rank: "29",
                id: "tt0038650",
                imdbRating: 5,
                yourRating: false,
            },
            {
                title: "Psycho",
                rank: "30",
                id: "tt0054215",
                imdbRating: 5,
                yourRating: false,
            },
            {
                title: "Léon: The Professional",
                rank: "31",
                id: "tt0110413",
                imdbRating: 5,
                yourRating: false,
            },
            {
                title: "Sunset Blvd.",
                rank: "32",
                id: "tt0043014",
                imdbRating: 5,
                yourRating: false,
            },
            {
                title: "American History X",
                rank: "33",
                id: "tt0120586",
                imdbRating: 5,
                yourRating: false,
            },
            {
                title: "Apocalypse Now",
                rank: "34",
                id: "tt0078788",
                imdbRating: 5,
                yourRating: false,
            },
            {
                title: "Terminator 2: Judgment Day",
                rank: "35",
                id: "tt0103064",
                imdbRating: 5,
                yourRating: false,
            },
            {
                title: "Saving Private Ryan",
                rank: "36",
                id: "tt0120815",
                imdbRating: 5,
                yourRating: false,
            },
            {
                title: "Memento",
                rank: "37",
                id: "tt0209144",
                imdbRating: 5,
                yourRating: false,
            },
            {
                title: "City Lights",
                rank: "38",
                id: "tt0021749",
                imdbRating: 5,
                yourRating: false,
            },
            {
                title: "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
                rank: "39",
                id: "tt0057012",
                imdbRating: 5,
                yourRating: false,
            },
            {
                title: "Alien",
                rank: "40",
                id: "tt0078748",
                imdbRating: 5,
                yourRating: false,
            },
            {
                title: "Modern Times",
                rank: "41",
                id: "tt0027977",
                imdbRating: 5,
                yourRating: false,
            },
            {
                title: "Spirited Away",
                rank: "42",
                id: "tt0245429",
                imdbRating: 5,
                yourRating: false,
            },
            {
                title: "North by Northwest",
                rank: "43",
                id: "tt0053125",
                imdbRating: 5,
                yourRating: false,
            },
            {
                title: "Back to the Future",
                rank: "44",
                id: "tt0088763",
                imdbRating: 5,
                yourRating: false,
            },
            {
                title: "Life Is Beautiful",
                rank: "45",
                id: "tt0118799",
                imdbRating: 5,
                yourRating: false,
            },
            {
                title: "The Shining",
                rank: "46",
                id: "tt0081505",
                imdbRating: 5,
                yourRating: false,
            },
            {
                title: "The Pianist",
                rank: "47",
                id: "tt0253474",
                imdbRating: 5,
                yourRating: false,
            },
            {
                title: "Citizen Kane",
                rank: "48",
                id: "tt0033467",
                imdbRating: 5,
                yourRating: false,
            },
            {
                title: "The Departed",
                rank: "49",
                id: "tt0407887",
                imdbRating: 5,
                yourRating: false,
            },
            {
                title: "M",
                rank: "50",
                id: "tt0022100",
                imdbRating: 5,
                yourRating: false,
            },
        ],
        itemsPerPage: 10,
        activePage: 1,
    };

    handleActivePage = (page) => {
        this.setState({ ...this.state.movies, activePage: page });
    };

    render() {
        const { movies, itemsPerPage, activePage } = this.state;
        const startPage = (activePage - 1) * itemsPerPage;
        const updatePageItems = movies.slice(
            startPage,
            startPage + itemsPerPage
        );

        return (
            <>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Rank</th>
                            <th scope="col">Id</th>
                            <th scope="col">Title</th>
                            <th scope="col">IMDB Rating</th>
                            <th scope="col">Your Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {updatePageItems.map((movie) => (
                            <tr>
                                <th scope="row">{movie.rank}</th>
                                <td>{movie.id}</td>
                                <td>{movie.title}</td>
                                <td>{movie.imdbRating}</td>
                                <td>
                                    {movie.yourRating ? "Rated" : "Unrated"}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination
                    totalItemsCount={movies.length}
                    itemsPerPage={itemsPerPage}
                    activePage={activePage}
                    onActivePage={this.handleActivePage}
                />
            </>
        );
    }
}

export default Movies;
