
import { SeriesProps } from "../Movies/Movies.types";
import style from './ListMovies.module.css';

export const ListMovies = ({ data }: SeriesProps) => {
    return (
        <>
            {data.map(moviesItem => (
                <div className={style.movie_item} key={moviesItem.id}>
                    <div className={style.movie_poster_container}>
                        <img src={moviesItem.posterUrl} alt="" className={style.movie_poster} />
                        <div className={style.movie_info}>
                            <div className={style.movie_year}>{moviesItem.year}</div>
                            <div className={style.movie_rating}>{Number(moviesItem.rating).toFixed(1)}</div>
                        </div>
                    </div>
                    <div className={style.movie_title}>{moviesItem.title}</div>
                </div>
            ))}
        </>
    );
};


// return (
//     <>
//         {data.map(moviesItem => (
//             <div className="movie-item" key={moviesItem.id}>
//                 <div className="movie-poster-container">
//                     <img src={moviesItem.posterUrl} alt="" className="movie-poster" />
//                     <div className="movie-info">
//                         <div className="movie-year">{moviesItem.year}</div>
//                         <div className="movie-rating">{Number(moviesItem.rating).toFixed(1)}</div>
//                     </div>
//                 </div>
//                 <div className="movie-title">{moviesItem.title}</div>
//             </div>
//         ))}
//     </>
// );
