import React, {useRef, useState} from "react";


export const SearchMovies = () => {
    const input = useRef<HTMLInputElement>(null)
    // const [loading, setLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState(false);

    // function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    //     console.log(event.target.value);
    //     setSearchTerm(event.target.value);
    // }

    function handleKey(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            setSearchTerm(true)
        }
    }


    return (

        <div>
            <h3 style={{color: 'white'}}>Input value: {searchTerm && input.current?.value}</h3>
            <input type="text"
                   ref={input}
                   onKeyDown={handleKey}
                   // value={searchTerm}
                   // onChange={handleChange}
            />

        </div>
    )
}
