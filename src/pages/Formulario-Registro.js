
import Navigation from "../components/Navigation";
import './Formulario-Registro.css';
import Footpage from "../components/Footpage";
import React, { Fragment} from 'react';
import {Link} from "react-router-dom";
const FormularioRegistro =()=>{



    return(
        <Fragment>
            <Navigation />
            <div id="container2">
            <form>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Nombre:</label>
                    <input type="Text" className="form-control-sm " id="exampleInputNombre1"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Apellidos:</label>
                    <input type="Text" className="form-control-sm" id="exampleInputApellido1"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Dirección Email:</label>
                    <input type="email" className="form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp"/>

                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Contraseña:</label>
                    <input type="password" className="form-control-sm" id="exampleInputPassword1"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Confirmar Contraseña:</label>
                    <input type="password" className="form-control-sm" id="exampleInputPassword2"/>
                </div>
               
                <div>
               <Link to="/perfil"><button type="submit" className="btn btn-primary">Registrarme</button></Link>
                <a>    </a>
                <Link to="/"><button id="buttoncanc" type="cancelar" className="btn btn-primary">Cancelar</button></Link>
                </div>
            </form>
            </div>
            <Footpage/>
        </Fragment>

    );

}
export default FormularioRegistro;