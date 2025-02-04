import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import HomePage from "../pages/HomePage/HomePage";
import Navigation from "./Navigation/Navigation";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYWEyMmE5NDRjMmMwOWY1MmUwZGY1MDhiYWJiMjI2MSIsIm5iZiI6MTczODUyNDAyNS44ODYwMDAyLCJzdWIiOiI2NzlmYzU3OTgwMDgyOTg2YzhjYjdiZGMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.a9v3JTSMtOwhWssbLbutI3e6MGdHnonLVMIe7vb_zaA";
const BASE_URL = "https://api.themoviedb.org/3";

export default function App() {
    const [topMovies, setTopMovies] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    const [movieDetails, setMovieDetails] = useState(null);
    const [movieCast, setMovieCast] = useState([]);
    const [movieReviews, setMovieReviews] = useState([]);

    useEffect(() => {
        axios
            .get(`${BASE_URL}/trending/movie/day`, {
                headers: { Authorization: `Bearer ${API_KEY}` },
            })
            .then(response => setTopMovies(response.data.results))
            .catch(error => console.error("Error:", error));
    }, []);

    const handleSearch = async (query) => {
        if (!query) return;
        try {
            const response = await axios.get(`${BASE_URL}/search/movie?query=${query}`, {
                headers: { Authorization: `Bearer ${API_KEY}` },
            });
            setSearchResult(response.data.results);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleFetchMovieDetails = async (movieID) => {
        try {
            const response = await axios.get(`${BASE_URL}/movie/${movieID}`, {
                headers: { Authorization: `Bearer ${API_KEY}` },
            });
            setMovieDetails(response.data);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleFetchMovieCast = async (movieID) => {
        try {
            const response = await axios.get(`${BASE_URL}/movie/${movieID}/credits`, {
                headers: { Authorization: `Bearer ${API_KEY}` },
            });
            setMovieCast(response.data.cast);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleFetchMovieReviews = async (movieID) => {
        try {
            const response = await axios.get(`${BASE_URL}/movie/${movieID}/reviews`, {
                headers: { Authorization: `Bearer ${API_KEY}` },
            });
            setMovieReviews(response.data.results);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<HomePage movies={topMovies} />} />
                <Route path="/movies" element={<MoviesPage onSearch={handleSearch} searchResults={searchResult} />} />
                <Route
                    path="/movies/:movieID"
                    element={<MovieDetailsPage
                        onFetchDetails={handleFetchMovieDetails}
                        movieDetails={movieDetails}
                        onFetchCast={handleFetchMovieCast}
                        movieCast={movieCast}
                        onFetchReviews={handleFetchMovieReviews}
                        movieReviews={movieReviews}
                    />}
                />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
}
