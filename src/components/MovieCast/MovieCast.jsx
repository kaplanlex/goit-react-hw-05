import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../api";

function MovieCast() {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetchMovieCast(movieId).then(setCast).then(() => { setIsLoading(false) });
    }, [movieId]);
    if (isLoading) {
        return <p>Loading...</p>;
    }
    return (

        <div>
            <h2>Actors</h2>
            {cast.length > 0 ? (
                <ul>
                    {cast.map(actor => (
                        <li key={actor.id}>
                            <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} />
                            <h3>{actor.name}</h3>
                            <p>Caracter: {actor.character}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                    <p>Not Actors</p>
                )}
        </div>
    );
}

export default MovieCast;
