import {SeriesProps} from "../Movies/Movies.types.ts";

export const ListMovies = ({data}: SeriesProps) => {
    return (
        <>{data.map(moviesItem =>
            <div key={moviesItem.id}>
                <img src={moviesItem.posterUrl} alt=""/>
            </div>)}</>
    );
};
