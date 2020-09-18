import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Acerca from './pages/Acerca';
import Contactanos from './pages/Contactanos';
import './index.css';
import Inicio from './pages/Inicio';
import Privacidad from './pages/Privacidad';
import FormularioRegistro from "./pages/Formulario-Registro";
import PagPerfil from "./pages/PaginaPerfil";
import InicioSesion from "./pages/InicioSesion";

ReactDOM.render(
    <Router>
        <div>
            <Switch>

                {/* Páginas */}
                <Route path='/privacidad' component={Privacidad}/>
                <Route path='/contactanos' component={Contactanos}/>
                <Route path='/InicioSesion' component={InicioSesion}/>
                <Route path='/acerca' component={Acerca}/>
                <Route path='/FormularioRegistro' component={FormularioRegistro}/>
                <Route path='/perfil' component={PagPerfil}/>
                <Route exact path='/' component={Inicio} />

            </Switch>
        </div>
    </Router>,

  document.getElementById('root')
);



