import { React } from "react";
import logo from '../logo-198x66.png';
import '../Header.css';

const Header = () =>{
    return(
        <header className="cabecera">
            
        <img src={logo} className="logo__cabecera" alt="logo" />
            <nav className="menu">
                <ul className="menu__lista">
                    <li className="menu__item"><a href = "/inicio" className="menu__link activo"> Inicio</a></li>
                    <li className="menu__item"><a href = "/receta" className="menu__link"> Recetas</a></li>
                    <li className="menu__item"><a href = "/administrador" className="menu__link"> Administrador</a></li>
                    <li className="menu__item"><a href = "/historia" className="menu__link"> Historias</a></li>
                    <li className="menu__item"><a href = "/login" className="menu__link"> Login</a></li>
                </ul>
                </nav>
      </header>



    )
} 

export default Header;
