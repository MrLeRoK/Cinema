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
import {Header} from "./components/Header/Header.tsx";



export default function App() {
    const [tab, setTab] = useState<'film' | 'series'>('film')
    const {data: series} = useFetch('series')
    const {data: movies} = useFetch('film')
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearch = (term: string) => {
        setSearchTerm(term)
    }

      function handleMovies() {
          setTab(tab)
    }

  const filteredData = searchTerm ? [...movies, ...series].filter(movie => {
      return movie.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  }) : (tab === 'film' ? movies : series)


    // const displayData = searchTerm ? filteredData : (tab === "film" ? movies : series)

    return (
        <Layout className={style.container}>
            <Header onClick={handleMovies}/>
            <SearchMovies onSearch={handleSearch}/>
            <div className={style.popular}>
                <TabsSection active={tab} onChange={(current) => setTab(current)}/>
                {tab === 'film' ? <Movies data={filteredData}/> : <Series data={filteredData} />}
            </div>
        </Layout>
    )
}

// { searchTerm ? (
//     <FilteredMovies data={popularMovies} />
// ): (
//     <>
//         {tab === 'film' && <Movies data={movies}/>}
//         {tab === 'series' && <Series data={series}/>}
//     </>
// )
//
// }
