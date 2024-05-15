// import {ISeries,} from "../../hooks/useFetch.ts";

import {SeriesProps} from "./Movies.types.ts";
import {ListMovies} from "../ListMovies/ListMovies.tsx";


export const Movies = ({data}: SeriesProps) => {

    console.log('movies: ', data);

    return (
        <>
            <ListMovies data={data}/>
        </>
    );
};
