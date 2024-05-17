import React from "react";

import {Logo} from "../../Logo/Logo.tsx";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import style from './Header.module.css'


interface HeaderProps {
    onClick: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}
export const Header: React.FC<HeaderProps> = ({onClick}) => {
    return (
        <header>
            <div className={style.container}>
                <a className={style.logo} href="">
                    <Logo/>
                    <span onClick={onClick} className={style.vodoley}>VODOLEYBOX.TV</span>
                </a>
            </div>
        </header>
    );
};

