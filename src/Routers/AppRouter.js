import react from 'react';
import {Route,Switch} from'react-router-dom';
import Acerca from "../pages/Acerca";
import Contactanos from "../pages/Contactanos";
import Inicio from "../pages/Inicio";
import iniciosesion from "../pages/iniciosesion";
import Privacidad from "../pages/Privacidad";
import Routes from "../constan/routes";

const AppRputer = () => {

    return (



        <Switch>
            <Route exact path={Routes.HOME}>
                <Inicio />
            </Route>
            <Route path={Routes.CONTACT}>
                <Contactanos/>
            </Route>
            <Route path={Routes.ABOUT}>
                <Acerca/>
            </Route>
            <Route path={Routes.PRIVACITY}>
                <Privacidad/>
            </Route>
            <Route path={Routes.LOGIN}>
                <iniciosesion/>
            </Route>


        </Switch>


            );

};
export default AppRputer;

