import React, {useEffect, useState} from "react";

import {Logo} from "../../Logo/Logo.tsx";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import style from './Header.module.css'


interface HeaderProps {
    onClick: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}
export const Header: React.FC<HeaderProps> = ({onClick}) => {
    const [now, setNow] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => setNow(new Date()), 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [now]);

    return (
        <header>
            <div className={style.container}>
                <a className={style.logo} href="">
                    <Logo/>
                    <span onClick={onClick} className={style.vodoley}>VODOLEYBOX.TV</span>
                </a>
                <div className={style.now_data}>
                    <span className={style.time_circle}>{now.getHours().toString().padStart(2, '0')}</span>
                    <span className={style.time_separator}>:</span>
                    <span className={style.time_circle}>{now.getMinutes().toString().padStart(2, '0')}</span>
                    <span className={style.time_separator}>:</span>
                    <span className={style.time_circle}>{now.getSeconds().toString().padStart(2, '0')}</span>
                </div>
            </div>
        </header>
    );
};

