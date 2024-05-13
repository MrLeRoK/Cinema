import {ISeries} from "../../hooks/useFetch.ts";

interface SeriesProps {
    data: ISeries[]
}

export const Series = ({data}: SeriesProps) => {
    console.log('series', data);

    return (
        <>{data.map(seriesItem =>
            <div key={seriesItem.id}>
                <img src={seriesItem.posterUrl} alt=""/>
            </div>)}</>
    )
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
