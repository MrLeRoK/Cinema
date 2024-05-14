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
    return (

            <button className={isActive ? style.active : style.button} onClick={onClick}>
                {children}
            </button>


    );
};

