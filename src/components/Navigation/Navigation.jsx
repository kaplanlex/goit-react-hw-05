import { Link } from "react-router-dom";

const Navigation = () => (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Search Movies</Link>
    </nav>
);

export default Navigation;