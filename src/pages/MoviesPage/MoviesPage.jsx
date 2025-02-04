import { Formik, Form, Field } from "formik";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = ({ onSearch, searchResults }) => (
    <div>
        <h1>Search Movies</h1>
        <Formik
            initialValues={{ query: "" }}
            onSubmit={(values, { setSubmitting }) => {
                onSearch(values.query);
                setSubmitting(false);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Field type="text" name="query" placeholder="Search..." />
                    <button type="submit" disabled={isSubmitting}>
                        Search
                    </button>
                </Form>
            )}
        </Formik>

        <MovieList movies={searchResults} />
    </div>
);

export default MoviesPage;