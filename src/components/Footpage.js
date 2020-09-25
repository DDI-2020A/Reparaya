import React from 'react';
import './Footpage.css';
import { Link } from 'react-router-dom';


const Footpage =()=> {

        return(

            <footer className="page-footer font-small cyan  darken-3">


                <div className="container">


                    <div className="row">


                        <div className="col-md-12 py-1">
                            <div className="mb-4 flex-center">


                                <a className="fb-ic">
                                    <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                </a>

                                <a className="tw-ic">
                                    <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                </a>

                                <a className="wp-ic">
                                    <i className="fab fa-whatsapp fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                </a>


                            </div>
                        </div>


                    </div>


                </div>



                <div className="container">

                    <p>&copy; {(new Date().getFullYear())} REPARAYA  &middot; <a><Link to="/acerca">Acerca de</Link></a> &middot;
                        <a><Link to="/privacidad">   Privacidad</Link></a>  &middot;<Link to="/contactanos"><a>Contáctanos</a></Link></p>
                </div>


            </footer>

        );



}

export default Footpage;
