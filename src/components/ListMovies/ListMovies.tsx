import {SeriesProps} from "../Movies/Movies.types";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import style from './ListMovies.module.css';

export const ListMovies = ({data}: SeriesProps) => {
    console.log(data)


    return (
        <>
            {data.map(moviesItem => {
                const ratingClass = moviesItem.rating >= 7
                    ? style.high_rating
                    : moviesItem.rating >= 5
                        ? style.average_rating
                        : style.low_rating;

                return (
                    <div className={style.movie_item} key={moviesItem.id}>
                        <div className={style.movie_poster_container}>
                            <img src={moviesItem.posterUrl} alt={moviesItem.title} className={style.movie_image}/>
                            <div className={style.movie_info}>
                                <div className={style.container_movie_year}>
                                    <div className={style.movie_year}>{moviesItem.year}</div>
                                </div>
                                <div className={style.container_movie_rating}>
                                    <div className={`${style.movie_rating} ${ratingClass}`}>
                                        {Number(moviesItem.rating).toFixed(1)}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.movie_title}>{moviesItem.title}</div>
                    </div>
                )

            })}
        </>
    );
};


