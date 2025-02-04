import MovieList from "../../components/MovieList/MovieList";

const HomePage = ({ movies }) => {
    return (<div>
        <h1>Popular movies</h1>
        <MovieList movies={movies} />
    </div>);
};

export default HomePage;
