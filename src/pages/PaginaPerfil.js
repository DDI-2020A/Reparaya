import React,{useState}from "react";
import Navigation from "../components/Navigation";
import Footpage from "../components/Footpage";
import './PaginaPerfil.css';
import {auth} from '../Routers/firebase';
import {withRouter} from "react-router-dom";
const PagPerfil=(props)=>{
    const [nombre,setNombre]=useState ('');
    const[user,setUser]=React.useState(null);
    React.useEffect(()=>{
        if(auth.currentUser){
            console.log('existe el usuario');
        }else{
            console.log('no existe un usuario');
            props.history.push('/');
        }

    },[props.history])
    return(
        <div>
            <Navigation/>

               <div className="card">
                    <div className="card-body">
                        <img src="" alt=""/>
                        <h5 className="card-title">Nombre de Usuario</h5>
                        <p className="card-text">Email:</p>
                        <button className="btn btn-dark">
                            Editar Nombre
                        </button>
                    </div>

               </div>


            <Footpage/>
        </div>
    );


}
export default withRouter(PagPerfil);