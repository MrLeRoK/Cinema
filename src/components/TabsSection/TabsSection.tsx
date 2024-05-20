import {Button} from "../Button/Button.tsx";
import React from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import style from './TabSection.module.css'

interface TabsSectionProps {
    active: 'film' | 'series' | 'new';
    onChange: (current: 'film' | 'series' | 'new') => void;
}



export const TabsSection:React.FC<TabsSectionProps> = ({ active, onChange}) => {

    return (
        <div className={style.popularSwitch}>
            <Button isActive={active === 'film'}  onClick={() => onChange('film')}>Популярные фильмы</Button>
            <Button isActive={active === 'series'}  onClick={() => onChange('series')}>Популярные сериалы</Button>
            <Button isActive={active === 'new'}  onClick={() => onChange('new')}>Другой Api</Button>
        </div>
    );
};
