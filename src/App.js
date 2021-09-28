import "./App.css";
import Navbar from "./common/navbar.component";
import Home from "./components/home.component";
import Movies from "./components/movies.component";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFound from "./components/not-found.component";
import Login from "./components/login.component";
import SignUp from "./components/sign-up.component";
import AddMovie from "./components/add-movie.component";
import Movie from "./components/movie.component";

function App() {
    return (
        <>
            <Navbar />
            <Switch>
                <Route>
                    <Route path="/movie/:movieId" component={Movie} />
                    <Route path="/movies" component={Movies} />
                    <Route path="/add-movie" component={AddMovie} />
                    <Route path="/login" component={Login} />
                    <Route path="/sign-up" component={SignUp} />
                    <Route exact path="/" component={Home} />
                    <Route path="/not-found" component={NotFound} />
                    <Redirect path="/not-found" />
                </Route>
            </Switch>
        </>
    );
}

export default App;
