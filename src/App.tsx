import useFetch from "./hooks/useFetch.ts";
import {Movies} from "./components/Movies/Movies.tsx";
import {Series} from "./components/Series/Series.tsx";


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import style from './App.module.css'
import {TabsSection} from "./components/TabsSection/TabsSection.tsx";
import React, {useState} from "react";
import {SearchMovies} from "./components/SearchMovies/SearchMovies.tsx";
import {Layout} from "./Layout/Layout.tsx";
import {Header} from "./components/Header/Header.tsx";


export default function App() {
    const [tab, setTab] = useState<'film' | 'series' | 'new'>('film')
    const {data: series} = useFetch('series')
    const {data: movies} = useFetch('film')
    const [searchTerm, setSearchTerm] = useState('')
    const [newMovies, setMewMovies] = useState<any[]>([]);

    React.useEffect(() => {
        fetch('https://api.kinopoisk.dev/v1.4/movie?type=movie&limit=100', {
            headers: {
                'x-api-key': 'AHQQ6Z1-8S4MCYZ-P074AHD-KSY9APN'
            }
        })
            .then(res => res.json())
            .then(data => {
                setMewMovies(data.docs)
                console.log(data.docs)
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleSearch = (term: string) => {
        setSearchTerm(term)
    }

    function handleMovies() {
        setTab('film')
        setSearchTerm('')
    }

    // const filteredData = searchTerm ? [...movies, ...series].filter(movie => {
    //     return movie.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    // }) : (tab === 'film' ? movies : series)

    const filteredData = searchTerm ? [...movies, ...series, ...newMovies].filter(movie => {
        return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    }) : (tab === 'film' ? movies : (tab === 'series' ? series : newMovies));


    // const displayData = searchTerm ? filteredData : (tab === "film" ? movies : series)

    return (
        <Layout className={style.container}>
            <Header onClick={handleMovies}/>
            <SearchMovies onSearch={handleSearch}/>
            <div className={style.popular}>
                <TabsSection active={tab} onChange={(current) => setTab(current)}/>
                {tab === 'new' ? (
                    <div style={{
                        display: 'flex',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
                        gap: '24px',
                        flexWrap: 'wrap'
                    }}>
                        {newMovies.filter(item => item.poster?.url)
                            .map(item =>
                            <div key={item.id}>
                                <img style={{width: '161px', height: '242px'}}
                                     src={item.poster?.url} alt={item.title}
                                     className={style.series_image}/>
                            </div>)}
                    </div>
                ): (tab === 'film' ? <Movies data={filteredData}/> : <Series data={filteredData}/>)}
            </div>
        </Layout>
    )
}

























// export default function App() {
//     const [tab, setTab] = useState<'film' | 'series' | 'new'>('film')
//     const {data: series} = useFetch('series')
//     const {data: movies} = useFetch('film')
//     const [searchTerm, setSearchTerm] = useState('')
//     const [newMovies, setMewMovies] = useState<any[]>([]);
//
//     React.useEffect(() => {
//         fetch('https://api.kinopoisk.dev/v1.4/movie?type=movie&limit=30', {
//             headers: {
//                 'x-api-key': 'AHQQ6Z1-8S4MCYZ-P074AHD-KSY9APN'
//             }
//         })
//             .then(res => res.json())
//             .then(data => {
//                 setMewMovies(data.docs)
//                 console.log(data.docs)
//             })
//             .catch(error => console.error('Error fetching data:', error));
//     }, []);
//
//     const handleSearch = (term: string) => {
//         setSearchTerm(term)
//     }
//
//     function handleMovies() {
//         setTab('film')
//         setSearchTerm('')
//     }
//
//     // const filteredData = searchTerm ? [...movies, ...series].filter(movie => {
//     //     return movie.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
//     // }) : (tab === 'film' ? movies : series)
//
//     const filteredData = searchTerm ? [...movies, ...series, ...newMovies].filter(movie => {
//         return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
//     }) : (tab === 'film' ? movies : (tab === 'series' ? series : newMovies));
//
//
//     // const displayData = searchTerm ? filteredData : (tab === "film" ? movies : series)
//
//     return (
//         <Layout className={style.container}>
//             <Header onClick={handleMovies}/>
//             <SearchMovies onSearch={handleSearch}/>
//             <div className={style.popular}>
//                 {tab === 'new' && (
//                     <div style={{
//                         display: 'flex',
//                         gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
//                         gap: '24px',
//                         flexWrap: 'wrap'
//                     }}>
//                         {filteredData.map(item =>
//                             <div key={item.id}>
//                                 <img style={{width: '161px', height: '242px'}}
//                                      src={item.poster?.url} alt={item.title}
//                                      className={style.series_image}/>
//                             </div>)}
//                     </div>
//                 )}
//                 <TabsSection active={tab} onChange={(current) => setTab(current)}/>
//                 {tab === 'film' ? <Movies data={filteredData}/> : <Series data={filteredData}/>}
//             </div>
//         </Layout>
//     )
// }
