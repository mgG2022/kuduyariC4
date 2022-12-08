import { React } from "react";
import imagen1 from '../images/bg-1.jpg';
import imagen2 from '../images/bg-2.jpg';
import imagen3 from '../images/bg-3.jpg';



const Banner = () => {
    return (

        <section>
            <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel">

                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={imagen1} className=" d-block w-100" alt="First slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="banner__titulo">Historias</h5>
                            <p>Las narraciones vinculadas al alimento</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={imagen2} className="d-block w-100" alt="Second slide"></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="banner__titulo">Administrador</h5>
                            <p>Añade nuevas recetas e historias</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={imagen3} className="d-block w-100" alt="Third slide"></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="banner__titulo">Recetas</h5>
                            <p>Tradición culinaria en el Vaupés</p>
                        </div>
                    </div>




                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>


                
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>

                
            </div>





        </section>




    )
}

export default Banner;
