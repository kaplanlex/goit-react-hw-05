import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
    if (!movies || movies.length === 0) {
        return <p>Movies not found :(</p>;
    }

    return (
        <ul>
            {movies.map(movie => (
                <li key={movie.id}>
                    <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                </li>
            ))}
        </ul>
    );
};

export default MovieList;
