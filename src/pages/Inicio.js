import Navigation from "../components/Navigation";
import Carousele from "../components/Carousel";
import Footpage from "../components/Footpage";
import './Inicio.css';
import React, {Component,Link} from "react";

class Inicio extends Component {
    render() {

        return (


            <div id="Inicio">
                <Navigation/>

                <div id="container1">
                    <Carousele/>
                </div>
                <div>
                    <p id="separador2">¿Deseas encontrar personas que puedan ayudarte? o
                        ¿Quieres ofrecer tus servicios?<br/>
                        Registrate con nosotros e ingresa a nuestra plataforma para obtener información <br/>
                        acerca de personas que requieren tus servicios o te ayudarán con tus problemas


                    </p>
                </div>




                    <div id="sep"><p id="separador">COMENTARIOS DE NUESTROS USUARIOS</p></div>

                <div className="containercomentarios">

                    <div className="row">

                        <div className="col-lg-4">

                            <img className="bd-placeholder-img rounded-circle"
                                 src="https://cdn.pixabay.com/photo/2016/11/21/14/53/adult-1845814__340.jpg"/>
                            <h2>Juan Flores</h2>
                            <p className="parrafo">Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.
                                Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac
                                consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>

                        </div>

                        <div className="col-lg-4">
                            <img className="bd-placeholder-img rounded-circle"
                                 src="https://cdn.pixabay.com/photo/2015/03/03/08/55/portrait-657116__340.jpg"/>
                            <h2>Diana Pazmiño</h2>
                            <p className="parrafo">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                                lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce
                                dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>

                        </div>

                        <div className="col-lg-4">
                            <img className="bd-placeholder-img rounded-circle"
                                 src="https://cdn.pixabay.com/photo/2016/03/09/15/10/man-1246508__340.jpg"/>
                            <h2>Juan Zuñiga</h2>
                            <p className="parrafo">Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas
                                eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac
                                cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet
                                risus.</p>

                        </div>

                    </div>

                </div>


                <Footpage/>
            </div>




        );
    }
}

export default Inicio;