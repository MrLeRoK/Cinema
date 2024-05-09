import {TCommonProps} from "./Test.types.ts";
import React from "react";

export const Test2: React.FC<TCommonProps> = ({children, name, title, isActive}) => {
    return (
        <>
            {children}
            {name}
            {title}
            {isActive}
        </>
    );
};
