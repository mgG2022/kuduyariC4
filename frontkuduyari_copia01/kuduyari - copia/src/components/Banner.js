import { React } from "react";
import imagen1 from '../images/bg-1.jpg';
import imagen2 from '../images/bg-2.jpg';
import imagen3 from '../images/bg-3.jpg';



const Banner = () => {
    return (

        <section>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={imagen1} className=" d-block w-100" alt="First slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="banner__titulo">Historias</h5>
                            <p>Las narraciones vinculadas al alimento</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={imagen2} className="d-block w-100" alt="Second slide" />
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



                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>


            </div>





        </section >




    )
}

export default Banner;
