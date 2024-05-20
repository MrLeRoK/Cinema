import React from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import style from './Button.module.css'


type TProps = {
    children: React.ReactNode;
    onClick: () => void;
    isActive?: boolean;
}

export const Button: React.FC<TProps> = ({children, onClick, isActive}) => {

    // React.useEffect(() => {
    //
    //     fetch('https://api.kinopoisk.dev/v1.4/movie?type=movie&limit=100', {
    //         headers: {
    //             'x-api-key': 'AHQQ6Z1-8S4MCYZ-P074AHD-KSY9APN'
    //         }
    //     }).then(res => res.json()).then(data => console.log(data))
    //
    //
    // }, [])


    return (

            <button className={isActive ? style.active : style.button} onClick={onClick}>
                {children}
            </button>


    );
};

