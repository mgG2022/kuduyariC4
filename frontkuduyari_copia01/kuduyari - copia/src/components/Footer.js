import { React } from "react";
import logoFacebook from '../facebook.png';
import logoInstagram from '../instagram.png';
import logoEmail from '../email-hover.png';
import logo from '../logo-inverse-198x66.png';


const Footer = () => {
    return (
        <footer className="footer">
            <img src={logo} className="footer__logo" alt="Kuduyarí" />
            <div className="footer__groupMedia_nav">


            <ul className="footer__social">

                <li><a href="https://www.facebook.com" className="footer__midia"><img src={logoFacebook} alt="Facebook" /></a></li>
                <li><a href="https://www.instagram.com" className="footer__midia"><img src={logoInstagram} alt="Instagram" /></a></li>
                <li><a href="https://www.gmail.com" className="footer__midia"><img src={logoEmail} alt="Email" /></a></li>
            </ul>

            <nav>
                <ul className="footer__navegacion">
                    <li className="footer__enlace"><a href="/inicio">Inicio</a></li>
                    <li className="footer__enlace"><a href="/receta">Recetas</a></li>
                    <li className="footer__enlace"><a href="/administrador">Administrador</a></li>
                    <li className="footer__enlace"><a href="/historia">Historias</a></li>
                </ul>
            </nav>
            </div>
        </footer>
    )
}

export default Footer;
