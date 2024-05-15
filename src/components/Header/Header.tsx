
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import style from './Header.module.css'
export const Header = () => {
    return (
        <header>
            <div className={style.container}>
                <a className={style.logo} href="">
                    <svg></svg>
                    <span className={style.vodoley}>VODOLEYBOX.IN</span>
                </a>
            </div>
        </header>
    );
};
