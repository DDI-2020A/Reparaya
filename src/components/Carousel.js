import React,{Component} from 'react';
import './Carousel.css';


const Carousele = () => {



        return (


                <div id="slider" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#slider" data-slide-to="0" className="active"></li>
                        <li data-target="#slider" data-slide-to="1"></li>
                        <li data-target="#slider" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="img-fluid" src="https://cdn.pixabay.com/photo/2017/09/16/13/48/grinding-2755561__340.jpg"
                            />

                        </div>
                        <div className="carousel-item">
                            <img className="img-fluid" src="https://media.istockphoto.com/photos/dishwasher-repairing-picture-id1169504170?b=1&k=6&m=1169504170&s=170667a&w=0&h=yEgQbzfooDfpy6NLm5hsm1Ul39uVtia6DqfuzDf2qy4="/>

                        </div>
                        <div className="carousel-item">
                            <img className="img-fluid" src="https://st3.depositphotos.com/12982378/32809/i/950/depositphotos_328090740-stock-photo-cropped-view-installer-tool-belt.jpg"/>

                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#slider" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#slider" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>


        );

}

export default Carousele;