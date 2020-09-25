import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Acerca from './pages/Acerca';
import Contactanos from './pages/Contactanos';
import './index.css';
import Inicio from './pages/Inicio';
import Privacidad from './pages/Privacidad';
import FormularioRegistro from "./pages/Formulario-Registro";
import PagPerfil from "./pages/PaginaPerfil";
import InicioSesion from "./pages/InicioSesion";
import Buscador from "./pages/Buscador";
import {auth} from "./Routers/firebase";

function App(){
    const[firebaseUser,setFirebaseuser]=React.useState(false)
    React.useEffect(()=>{
        auth.onAuthStateChanged(user=>{
           console.log(user)
           if(user){
               setFirebaseuser(user)
           } else{
               setFirebaseuser(null)
           }
        })

    },[])


    return firebaseUser!==false?(


        <Router>
            <div>
                <Switch>

                    {/* Páginas */}
                    <Route path='/privacidad' component={Privacidad} firebaseUser={firebaseUser}/>
                    <Route path='/buscador' component={Buscador} firebaseUser={firebaseUser}/>
                    <Route path='/contactanos' component={Contactanos} firebaseUser={firebaseUser}/>
                    <Route path='/InicioSesion' component={InicioSesion} firebaseUser={firebaseUser}/>
                    <Route path='/acerca' component={Acerca} firebaseUser={firebaseUser}/>
                    <Route path='/FormularioRegistro' component={FormularioRegistro} firebaseUser={firebaseUser}/>
                    <Route path='/perfil' component={PagPerfil} firebaseUser={firebaseUser}/>
                    <Route exact path='/' component={Inicio} firebaseUser={firebaseUser}/>

                </Switch>
            </div>
        </Router>
    ):(

        <h2>Cargando...</h2>

    )

}
export default App;