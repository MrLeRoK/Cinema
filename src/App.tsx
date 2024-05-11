// import {MoviesApi} from "./service-api/MoviesApi.tsx";
// import {SeriesApi} from "./service-api/SeriesApi.tsx";


import {MoviesApi} from "./service-api/MoviesApi.tsx";

export default function App() {

    const loadMovies = async () => {
        try {
            MoviesApi();
        } catch (error) {
            console.error(error);
        }
    }
    loadMovies()

    return (

        <>
            {/*<MoviesApi/>*/}
            {/*<SeriesApi/>*/}
        </>
    )
}

