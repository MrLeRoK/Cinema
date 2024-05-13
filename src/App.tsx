import useFetch from "./hooks/useFetch.ts";
import {Movies} from "./components/Movies/Movies.tsx";
import {Series} from "./components/Series/Series.tsx";



// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import style from './App.module.css'
import {TabsSection} from "./components/TabsSection/TabsSection.tsx";
import {useState} from "react";


export default function App() {
    const [tab, setTab] = useState('film')
    const {data: series} = useFetch('series')
    const {data: movies} = useFetch('film')

    console.log(style)

    return (
        <>
            <TabsSection active={tab} onChange={(current: string) => setTab(current)}/>
            {tab === 'film' && (
                <>
                    <Movies data={movies}/>
                </>
            )}

            {tab === 'series' && (
                <>
                    <Series data={series}/>
                </>
            )}

        </>
    )
}

