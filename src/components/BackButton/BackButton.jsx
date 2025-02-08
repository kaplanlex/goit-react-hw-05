import { useNavigate, useLocation } from "react-router-dom";
import styles from "./BackButton.module.css";

function BackButton() {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <button className={styles.backButton} onClick={() => navigate(location.state ?.prevLocation || "/")}>
            Go Back
    </button>
    );
}

export default BackButton;
