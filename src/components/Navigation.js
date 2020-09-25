import React,{Fragment} from 'react';
import './Navigation.css';
import logo from '../logo.png';
import {Link,withRouter} from "react-router-dom";
import {auth} from "../Routers/firebase";


const Navigation =(props)=> {

    const cerrarSesion=()=>{
        auth.signOut()
            .then(()=>{
                props.history.push('/')
            })

    }




    return  (



                <nav className="navbar  navbar-light">


                    <div id="contenedor">
                        <a href="/" className="navbar-left" ><img id="logo" src={logo}/></a>




                            {props.firebaseUser!==null?(
                                <Fragment>
                                    <Link to='/Buscador'><button  className="btn btn-primary" type="button">BUSCAR</button></Link>
                                    <Link to="/perfil"><button className="btn btn-primary" type="button">PERFIL </button></Link>
                                <button className="btn btn-primary" type="button"
                                onClick={()=>cerrarSesion()}>CERRAR SESIÓN </button>
                                </Fragment>


                            ):


                          (

                                    <Fragment>

                                        <Link to='/FormularioRegistro'><button  className="btn btn-primary" type="button">UNIRSE</button></Link>
                                        <Link to='/InicioSesion'><button  className="btn btn-primary" type="button">INICIA SESION </button></Link>
                                    </Fragment>
                                )
                            }


                    </div>


                </nav>



            );



    }

export default withRouter(Navigation);
