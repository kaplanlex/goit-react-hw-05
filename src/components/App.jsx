import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

import Navigation from "./Navigation/Navigation";
import HomePage from "../pages/HomePage/HomePage";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYWEyMmE5NDRjMmMwOWY1MmUwZGY1MDhiYWJiMjI2MSIsIm5iZiI6MTczODUyNDAyNS44ODYwMDAyLCJzdWIiOiI2NzlmYzU3OTgwMDgyOTg2YzhjYjdiZGMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.a9v3JTSMtOwhWssbLbutI3e6MGdHnonLVMIe7vb_zaA";
const BASE_URL = "https://api.themoviedb.org/3";

function App() {
    const [topMovies, setTopMovies] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [movieDetails, setMovieDetails] = useState(null);
    const [movieCast, setMovieCast] = useState([]);

    useEffect(() => {
        axios
            .get(`${BASE_URL}/trending/movie/day`, {
                headers: { Authorization: `Bearer ${API_KEY}` },
            })
            .then((response) => setTopMovies(response.data.results))
            .catch((error) => console.error("Error:", error));
    }, []);

    const handleSearch = async (query) => {
        if (!query) return;
        try {
            const response = await axios.get(`${BASE_URL}/search/movie?query=${query}`, {
                headers: { Authorization: `Bearer ${API_KEY}` },
            });
            setSearchResults(response.data.results);
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

    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<HomePage movies={topMovies} />} />
                <Route path="/movies" element={<MoviesPage onSearch={handleSearch} searchResults={searchResults} />} />
                <Route
                    path="/movies/:movieId"
                    element={<MovieDetailsPage movieDetails={movieDetails} onFetchDetails={handleFetchMovieDetails} />}
                />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
}

export default App;
