import {SeriesProps} from "../Movies/Movies.types.ts";

import './ListMovies.css'

export const ListMovies = ({data}: SeriesProps) => {
    return (
        <>
            {data.map(moviesItem => (
                <div className="movie-item" key={moviesItem.id}>
                    <div className="movie-poster-container">
                        <img src={moviesItem.posterUrl} alt="" className="movie-poster" />
                        <div className="movie-info">
                            <div className="movie-year">{moviesItem.year}</div>
                            <div className="movie-rating">{Number(moviesItem.rating).toFixed(1)}</div>
                        </div>
                    </div>
                    <div className="movie-title">{moviesItem.title}</div>
                </div>
            ))}
        </>
    );
};




// return (
//     <>{data.map(moviesItem =>
//         <div key={moviesItem.id}>
//             <img src={moviesItem.posterUrl} alt=""/>
//             {moviesItem.year}
//             {moviesItem.rating}
//
//             <div>{moviesItem.title}</div>
//         </div>
//     )}
//
//     </>
// );
