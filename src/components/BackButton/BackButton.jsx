import { useNavigate } from 'react-router-dom';


const BackButton = () => {
    const navigate = useNavigate();

    return (
        <button className={styles.button} onClick={() => navigate(-1)}>
            Go back
    </button>
    );
};

export default BackButton;
