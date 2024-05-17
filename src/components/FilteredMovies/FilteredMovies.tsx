// import React from "react";
// import {ISeries} from "../../hooks/useFetch.ts";
//
// // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// // @ts-expect-error
// import style from './FilteredMovies.module.css'
//
// interface FilteredMoviesProps {
//     data: ISeries[];
// }
//
// export const FilteredMovies: React.FC<FilteredMoviesProps> = ({ data }) => {
//
//     return (
//         <>
//             {data.map(movieItem => (
//                 <div className={style.movie_item} key={movieItem.id}>
//                     <div className={style.movie_poster_container}>
//                         <img src={movieItem.posterUrl} alt={movieItem.title} className={style.movie_image} />
//                         <div className={style.movie_info}>
//                             <div className={style.movie_year}>{movieItem.year}</div>
//                             <div className={style.movie_rating}>{Number(movieItem.rating).toFixed(1)}</div>
//                         </div>
//                     </div>
//                     <div className={style.movie_title}>{movieItem.title}</div>
//                 </div>
//             ))}
//         </>
//     );
// };
