import React,{Component} from 'react';
import './Navigation.css';
import logo from '../logo.png';
import {Link} from "react-router-dom";



const Navigation =()=> {


            return(



                <nav className="navbar navbar-expand-lg navbar-light">
                    <div >
                        <a href="/" className="navbar-left" id="logo"><img src={logo}/></a>
                    </div>

                    <div id="botones">
                        <form className="form-inline mt-2 mt-md-0 float-right" id="form">

                            <Link to='/Sesion'><button className="btn btn-outline-success my-2 my-sm-2" type="primary-button">UNIRSE</button></Link>
                            <Link to='/InicioSesion'><button className="btn btn-outline-success my-2 my-sm-2" type="primary-button">INICIA SESION </button></Link>
                        </form>
                    </div>


                </nav>


            );



    }

export default Navigation;
