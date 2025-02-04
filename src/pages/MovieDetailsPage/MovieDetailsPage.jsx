import { useEffect } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../../components/BackButton/BackButton";

const MovieDetailsPage = ({
    onFetchDetails,
    movieDetails,
    onFetchCast,
    movieCast,
    onFetchReviews,
    movieReviews
}) => {
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
            <ul>
                {movieCast.map(cast => (
                    <li key={cast.id}>{cast.name} - {cast.character}</li>
                ))}
            </ul>
            <h2>Reviews</h2>
            <ul>
                {movieReviews.map(review => (
                    <li key={review.id}>
                        <p><strong>{review.author}</strong>: {review.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieDetailsPage;
