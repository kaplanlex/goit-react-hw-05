import { useEffect, useState } from "react";
import axios from "axios";

const MovieCast = ({ movieId }) => {
    const [cast, setCast] = useState([]);

    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYWEyMmE5NDRjMmMwOWY1MmUwZGY1MDhiYWJiMjI2MSIsIm5iZiI6MTczODUyNDAyNS44ODYwMDAyLCJzdWIiOiI2NzlmYzU3OTgwMDgyOTg2YzhjYjdiZGMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.a9v3JTSMtOwhWssbLbutI3e6MGdHnonLVMIe7vb_zaA`)
            .then((response) => setCast(response.data.cast))
            .catch((error) => console.error("Error:", error));
    }, [movieId]);

    return (
        <div>
            <h2>Cast</h2>
            <ul>
                {cast.map((actor) => (
                    <li key={actor.id}>
                        <p>{actor.name}</p>
                        <p>{actor.character}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieCast;
