import style from "./Header.module.css"
import { NavLink } from "react-router-dom";
const Header = () =>{
    return(
        <div>
            <header className={style.header}>
                <section className={style.header__logo}>MERN MUSIC</section>
                <menu >
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/login">
                                    Login
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/playlist">
                                    playlist
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </menu>

                <section className={style.utilisateur}>
                    <article className={style.utilisateur__Icon}></article>
                    <aside>jeandedieusessou</aside>
                </section>
            </header>
        </div>
    )
}

export default Header;