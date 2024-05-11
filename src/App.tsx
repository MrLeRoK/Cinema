// import {MoviesApi} from "./service-api/MoviesApi.tsx";
// import {SeriesApi} from "./service-api/SeriesApi.tsx";

import {MoviesApi} from "./service-api/MoviesApi.tsx";

export default function App() {


    const loadMovies = async () => {
        try {
            const moviesData = await MoviesApi();
            console.log(moviesData);
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

