import React from "react";
import './Button.module.css'


type TProps = {
    children: React.ReactNode;
    onClick: () => void;
    isActive?: boolean;
}

export const Button: React.FC<TProps> = ({children, onClick, isActive}) => {
    return (
        <button className={ isActive ? 'button active' : 'button'} onClick={onClick}>
            {children}
        </button>
    );
};
