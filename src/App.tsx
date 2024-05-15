import useFetch from "./hooks/useFetch.ts";
import {Movies} from "./components/Movies/Movies.tsx";
import {Series} from "./components/Series/Series.tsx";



// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import style from './App.module.css'
import {TabsSection} from "./components/TabsSection/TabsSection.tsx";
import {useState} from "react";
import {SearchMovies} from "./components/SearchMovies/SearchMovies.tsx";
import {Layout} from "./Layout/Layout.tsx";


export default function App() {
    const [tab, setTab] = useState<'film' | 'series'>('film')
    const {data: series} = useFetch('series')
    const {data: movies} = useFetch('film')

    console.log(style)


    return (
       <Layout className={style.container}>
            <SearchMovies />
           <div className={style.popular}>
            <TabsSection active={tab} onChange={(current) => setTab(current)}/>

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
           </div>

       </Layout>
    )
}

