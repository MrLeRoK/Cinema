import useFetch from "./hooks/useFetch.ts";
import {Movies} from "./components/Movies.tsx";
import {Series} from "./components/Series.tsx";

export default function App() {
    const {data: series} = useFetch('series')
    const {data: movies} = useFetch('film')

    return (

        <>
              <Series data={series}/>
              <Movies data={movies}/>
        </>
    )
}

