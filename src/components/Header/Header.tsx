import {Logo} from "../../Logo/Logo.tsx";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import style from './Header.module.css'
export const Header = () => {
    return (
        <header>
            <div className={style.container}>
                <a className={style.logo} href="">
                    <Logo/>
                    <span className={style.vodoley}>VODOLEYBOX.TV</span>
                </a>
            </div>
        </header>
    );
};

