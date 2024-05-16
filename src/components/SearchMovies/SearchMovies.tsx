import React, { useState} from "react";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import style from './SearchMovies.module.css'
import {SearchLogo} from "./SearchLogo.tsx";




export const SearchMovies = () => {
    // const input = useRef<HTMLInputElement>(null)
    // const [loading, setLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('');

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        console.log(event.target.value);
        setSearchTerm(event.target.value);
    }

    // function handleKey(event: React.KeyboardEvent<HTMLInputElement>) {
    //     if (event.key === 'Enter') {
    //         setSearchTerm(true)
    //     }
    // }



    return (

        <div>
            <form className={style.search_form} action="">
            <input className={style.search_input}
                   aria-label="search"
                   type="text"
                   placeholder="Поиск фильмо"
                   value={searchTerm}
                   onChange={handleChange}
                // ref={input}
                // onKeyDown={handleKey}
            />
                <button className={style.search_button}>
                    <SearchLogo/>
                </button>

            </form>
        </div>
    )
}
