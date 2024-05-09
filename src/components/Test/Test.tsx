import {TProps} from './Test.types.ts'
import React from "react";

// export const Test = ({children}: TProps) => {
//     return (
//          <div>{children}</div>
//     );
// };


export const Test: React.FC<TProps> = ({children, title, name, apperance}) => {
    return (
        <>
            <div>{children}</div>
            <p>{title}</p>
            <p>{name}</p>
            <div>{apperance}</div>
        </>

    );
};
