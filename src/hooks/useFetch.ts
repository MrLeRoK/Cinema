import { useState, useEffect } from 'react';

type ContentType = 'film' | 'series'; // Сужение типов

export interface ISeries {
    id: string;
    alternativeTitle: string | null;
    posterUrl: string;
    rating: number;
    title: string;
    type: string;
    year: number;
}

interface UseFetchResult {
   data: ISeries[]
}

// http://www.omdbapi.com/?apikey=a18c60c9
// https://api.kinopoisk.dev/v1.4/movie?year=2023&genres.name=криминал
// https://kinobox.tv/api/films/popular?type=${type}


const useFetch = (type: ContentType): UseFetchResult => {
    const [data, setData] = useState<ISeries[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://kinobox.tv/api/films/popular?type=${type}`);
                if (!response.ok) {
                    throw new Error('ошибка');
                }
                const result = await response.json();
                setData(result);
            } catch (e) {
                console.error(e);
            }
        };

        fetchData();

    }, [type]);

    return {data}

};

export default useFetch;
