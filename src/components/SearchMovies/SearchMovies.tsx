import {ChangeEvent, useState} from "react";





export const SearchMovies = () => {
    const [loading, setLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('');

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        console.log(event.target.value)
        setSearchTerm(event.target.value)
    }

    return (

        <>
            <input type="text"  onChange={handleChange}

            />

        </>
    )
}
