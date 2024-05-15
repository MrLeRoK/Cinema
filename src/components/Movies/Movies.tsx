import {SeriesProps} from "./Movies.types.ts";
import {ListMovies} from "../ListMovies/ListMovies.tsx";
import style from './Movies.module.css';


export const Movies = ({data}: SeriesProps) => {

    console.log('movies: ', data);

    return (
        <div className={style.container}>
            <ListMovies data={data}/>
        </div>
    );
};
