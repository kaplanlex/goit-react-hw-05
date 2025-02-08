import { Link, useLocation } from "react-router-dom";
import styles from "./MovieList.module.css";

function MovieList({ movies, isLoading }) {
    const location = useLocation();
    if (isLoading) {
        return <p>Loading...</p>;
    }
    return (
        <>
            {

                movies.length > 0 ? (<ul className={styles.listMovies}>
                    {movies.map(({ id, title }) => (
                        <li key={id}>
                            <Link className={styles.link} state={{
                                prevLocation: location.pathname + location.search,
                            }} to={
                                `/movies/${id}`
                            } >{title}</Link>
                        </li>
                    ))}
                </ul>) : <p>No movies</p>
            }
        </>
    );

}

export default MovieList;
