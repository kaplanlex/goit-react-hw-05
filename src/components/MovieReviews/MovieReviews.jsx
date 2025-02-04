import { useEffect, useState } from "react";
import axios from "axios";

const MovieReviews = ({ movieId }) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYWEyMmE5NDRjMmMwOWY1MmUwZGY1MDhiYWJiMjI2MSIsIm5iZiI6MTczODUyNDAyNS44ODYwMDAyLCJzdWIiOiI2NzlmYzU3OTgwMDgyOTg2YzhjYjdiZGMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.a9v3JTSMtOwhWssbLbutI3e6MGdHnonLVMIe7vb_zaA`)
            .then((response) => setReviews(response.data.results))
            .catch((error) => console.error("Error:", error));
    }, [movieId]);

    return (
        <div>
            <h2>Reviews</h2>
            {reviews.length > 0 ? (
                <ul>
                    {reviews.map((review) => (
                        <li key={review.id}>
                            <strong>{review.author}</strong>
                            <p>{review.content}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                    <p>No reviews available.</p>
                )}
        </div>
    );
};

export default MovieReviews;
