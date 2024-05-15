import {SeriesProps} from "./Movies.types.ts";
import {ListMovies} from "../ListMovies/ListMovies.tsx";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import style from './Movies.module.css';


export const Movies = ({data}: SeriesProps) => {

    console.log('movies: ', data);

    return (
        <div className={style.container}>
            <ListMovies data={data}/>
        </div>
    );
};
