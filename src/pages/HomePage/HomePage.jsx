import MovieList from "../../components/MovieList/MovieList";

const HomePage = ({ movies }) => (
    <div>
        <h1>Popular Movies</h1>
        <MovieList movies={movies} />
    </div>
);

export default HomePage;