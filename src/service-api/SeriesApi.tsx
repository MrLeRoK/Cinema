import {useEffect, useState} from "react";

interface ISeries {
    id: string;
    alternativeTitle: null;
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

export const SeriesApi = () => {
    const [series, setSeries] = useState<ISeries[]>([])

    useEffect(() => {
        async function fetchSeries() {
            const response = await fetch('https://kinobox.tv/api/films/popular?type=series')
            const series = await response.json()
            setSeries(series)
        }
        fetchSeries()
    }, []);

    return (
        <>{series.map(seriesItem => (
            <div key={seriesItem.id}>
                <img src={seriesItem.posterUrl} alt=""/>
            </div>
        ))}</>
    );
};

// 'https://kinobox.tv/api/films/popular?type=series' - только сериалы


// useEffect(() => {
//     const FetchData = async() => {
//         try {
//             const response = await fetch("https://kinobox.tv/api/films/popular?type=series")
//             // if (!response.ok) {
//             //   throw new Error('Failed to fetch data');
//             // }
//             const data = await response.json()
//             // if (!data || !data.todos || !Array.isArray(data.todos)) {
//             //   throw new Error('Invalid data format');
//             // }
//             setSeries(data)
//             console.log(data)
//             console.log(response)
//         } catch (error) {
//             console.error('error fetching', error)
//         }
//     }
//     FetchData()
// },[])
