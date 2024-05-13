import {Button} from "../Button/Button.tsx";
import React from "react";

interface TabsSectionProps {
    active: string;
    onChange: (current: string) => void;
}

export const TabsSection:React.FC<TabsSectionProps> = ({ active, onChange}) => {


    return (
        <div>
            <Button isActive={active === 'film'}  onClick={() => onChange('film')}>Популярные фильмы</Button>
            <Button isActive={active === 'series'}  onClick={() => onChange('series')}>Популярные сериалы</Button>
        </div>
    );
};
