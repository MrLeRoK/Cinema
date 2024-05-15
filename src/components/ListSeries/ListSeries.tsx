import {SeriesProps} from "../Movies/Movies.types.ts";

export const ListSeries = ({data} : SeriesProps) => {
    return (
        <>
            {data.map(seriesItem =>
                <div key={seriesItem.id}>
                    <img src={seriesItem.posterUrl} alt=""/>
                </div>)}
        </>
    );
};
