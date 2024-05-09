// ts
// React.ReactNode // boolean, string, number, jsxElement
// React.JSX.Element
// React.Element

import React from "react";

type TPropsExtends = {
    name: string
}

export type TProps = {
    children: React.ReactNode;
    title: string | number;
    apperance: TApperance
} & TPropsExtends & {isActive?: boolean}

// type TBoolean = {
//     isActive?: boolean
// }

export type TCommonProps = TProps



export type TApperance = "orange" | "black" | "white"




// utils
export type TOmitProps = Omit<TCommonProps, "title">  // Исключает поля из тип !

export type TPickProps = Pick<TCommonProps, "name" | "title"> // Включает только указанные поля из тип !

export type TPartialProps = Partial<TCommonProps>    // Делает все поля не обязательными !

export type TRequiredProps = Required<TCommonProps> // Делает все поля обязательными !





