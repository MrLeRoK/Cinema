// import {ISeries,} from "../../hooks/useFetch.ts";

import {SeriesProps} from "./Movies.types.ts";


export const Movies = ({data}: SeriesProps) => {

    console.log('movies: ', data);

    return (
        <>{data.map(moviesItem =>
            <div key={moviesItem.id}>
                <img src={moviesItem.posterUrl} alt=""/>
            </div>)}</>
    );
};
