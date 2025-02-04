import { useEffect } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../../components/BackButton/BackButton";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";

const MovieDetailsPage = ({ onFetchDetails, movieDetails, onFetchCast, movieCast, onFetchReviews, movieReviews }) => {
    const { movieID } = useParams();

    useEffect(() => {
        onFetchDetails(movieID);
        onFetchCast(movieID);
        onFetchReviews(movieID);
    }, [movieID, onFetchDetails, onFetchCast, onFetchReviews]);

    if (!movieDetails) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <BackButton />
            <h1>{movieDetails.title}</h1>
            <p>{movieDetails.overview}</p>

            <h2>Actors</h2>
            <MovieCast movieId={movieID} cast={movieCast} />

            <h2>Reviews</h2>
            <MovieReviews movieId={movieID} reviews={movieReviews} />
        </div>
    );
};

export default MovieDetailsPage;
