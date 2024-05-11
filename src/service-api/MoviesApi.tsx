import React, {useEffect} from "react";

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

    useEffect(() => {
        getMovies()
    }, []);

   async function getMovies() {
             try {
                 const response = await fetch('https://kinobox.tv/api/films/popular')
                 const movie = await response.json()
                 setMovie(movie)
                 console.log(movie)

             } catch (error) {
                 console.error()
             }

    }

    return (
         <>{movie.map(movieItem => (
            <div key={movieItem.id}>
                <img src={movieItem.posterUrl} alt=""/>
            </div>
        ))}</>
    );
};

// React.useEffect(() => {
//     fetch('https://kinobox.tv/api/films/popular')
//         .then(res => res.json())
//         .then(data => setMovie(data))
//         .catch(e => console.error('error', e))
//
// }, [])
