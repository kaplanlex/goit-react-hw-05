import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../api";
import MovieList from "../../components/MovieList/MovieList";

function HomePage() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        fetchTrendingMovies().then(setMovies).then(() => { setIsLoading(false) });
    }, []);

    return (
        <div>
            <h1>Trending Movies</h1>
            <MovieList movies={movies} isLoading={isLoading} />
        </div>
    );
}

export default HomePage;
