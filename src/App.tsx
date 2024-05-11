// import {MoviesApi} from "./service-api/MoviesApi.tsx";
// import {SeriesApi} from "./service-api/SeriesApi.tsx";

import {MoviesApi} from "./service-api/MoviesApi.tsx";
import {useEffect, useState} from "react";


interface IMovies {
    id: string;
    alternativeTitle: string;
    posterUrl: string;
    rating: number;
    title: string;
    type: string;
    year: number;


}

export default function App() {
    const [movies, setMovies] = useState<IMovies[]>([])

        const loadMovies = async () => {
            try {
                const moviesData = await MoviesApi();
                setMovies(moviesData)
                console.log(moviesData);
            } catch (error) {
                console.error(error);
            }
        }

        loadMovies();


    return (

        <> {movies}
            {/*<MoviesApi/>*/}
            {/*<SeriesApi/>*/}
        </>
    )
}

