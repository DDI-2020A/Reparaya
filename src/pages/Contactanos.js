import Navigation from "../components/Navigation";
import Footpage from "../components/Footpage";
import Formulario from "../components/Formulario";
import Mapa from "../components/Mapa";
import './Contactanos.css';
import React from "react";
import {auth} from "../Routers/firebase";
const Contactanos =()=> {
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


        return (

                    <div id="Contactanos">
                        <Navigation firebaseUser={firebaseUser}/>


                        <div>
                            <main role="main" className="flex-shrink-0 mt-5">

                                <div className="contenedor">

                                    <h1 className="mb-5">Contáctanos</h1>

                                    <div className="row">

                                        <div className="col-md-6">

                                            <Formulario />

                                        </div>

                                        <div className="col-md-6">

                                            <Mapa />

                                        </div>

                                    </div>
                                </div>


                            </main>
                        </div>
                        <Footpage/>

                    </div>

                )

            }



        export default Contactanos;










