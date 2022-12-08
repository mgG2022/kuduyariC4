import { React } from "react";
import logo from '../favicon.png';


const Login = () => {
    return (
        <section>
            <div className="container h-80">
                <div className="row align-items-center h-100">
                    <div className=" col-5 mx-auto">
                        <div className="text-center">
                            <img src={logo} alt="Ícono" className="login__logo" />
                            <h2>Formulario de Ingreso</h2>
                            <form className="form-signin">
                                <h6>Usuario</h6>
                                <input type="name" name="name" id="inputName" className="form-control form-group " placeholder="Name" required autofocus></input>
                            </form>

                            <form className="form-signin">
                                <h6>Contraseña</h6>
                                <input type="password" name="password" id="inputPassword" className="form-control form-group" placeholder="password" required autofocus></input>
                                <button class="btn btn-warning btn-block btn-signin" type="submit">Ingresar</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>


        </section>

    )
}

export default Login;
