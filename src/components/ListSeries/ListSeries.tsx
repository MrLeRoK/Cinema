import {SeriesProps} from "../Movies/Movies.types.ts";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import style from './ListSeries.module.css'

export const ListSeries = ({data} : SeriesProps) => {
    return (
        <>
            {data.map(seriesItem => (
                <div className={style.series_item} key={seriesItem.id}>
                    <div className={style.series_poster_container}>
                        <img src={seriesItem.posterUrl} alt={seriesItem.title} className={style.series_image} />
                        <div className={style.series_info}>
                            <div className={style.series_year}>{seriesItem.year}</div>
                            <div className={style.series_rating}>{Number(seriesItem.rating).toFixed(1)}</div>
                        </div>
                    </div>
                    <div className={style.series_title}>{seriesItem.title}</div>
                </div>
            ))}
        </>
    );
};
