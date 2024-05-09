import React from "react";

interface IMovies {
    id: string;
    alternativeTitle: string;
    posterUrl: string;
    rating: number;
    title: string;
    type: string;
    year: number;

// {
//     "id": "string",
//     "title": "string",
//     "alternativeTitle": "string",
//     "type": "string",
//     "year": int,
//     "rating": float,
//     "posterUrl": "string"
// },

}
export const MoviesApi = () => {
    const [movie, setMovie] = React.useState<IMovies[]>([])

    React.useEffect(() => {
        fetch('https://kinobox.tv/api/films/popular')
            .then(res => res.json())
            .then(data => setMovie(data))
            .catch(e => console.error('error', e))

    }, [])

    console.log(movie)

    return (
        <></>
    );
};
