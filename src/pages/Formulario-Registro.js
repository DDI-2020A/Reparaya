
import Navigation from "../components/Navigation";
import './Formulario-Registro.css';
import Footpage from "../components/Footpage";
import React, { Fragment,useState} from 'react';
import {withRouter,Link} from "react-router-dom";
import {auth,db} from '../Routers/firebase';
const FormularioRegistro =(props)=>{

    const[email,setEmail]=useState('');
    const[contraseña,setContraseña]=useState('');
    const[contraseña2,setContraseña2]=useState('');
    const[error,setError]=useState(null);
    const[estado,setEstado]=useState(false);


    const procesarDatos=e=>{
        e.preventDefault();


        if(!email.trim()){
            //console.log("Ingrese contraseña")
            setError("Ingrese un email");
            setEstado(true);
            return
        }
        if(!contraseña.trim()){
            //console.log("Ingrese verificación de contraseña");
            setError("Ingrese una contraseña");
            setEstado(true);
            return
        }
        if(!contraseña2.trim()){
            //console.log("Ingrese verificación de contraseña");
            setError("Ingrese verificación de contraseña");
            setEstado(true);
            return
        }


        if(contraseña.length <  6){
            //console.log("Contraseña de minimo 6 valores")
            setError("Contraseña de minimo 6 valores");
            setEstado(true);
            return
        }
        if(contraseña!=contraseña2){
            //console.log("Las contraseñas no coinciden")
            setError("Las contraseñas no coinciden");
            setEstado(true);
            return
        }
        if(estado===false)
        {
            Registrar();
        }
        setEstado(false)
        setError(null)
        console.log("Paso validaciones")

    }
    const Registrar=React.useCallback(async ()=>{
        try{
                const res= await auth.createUserWithEmailAndPassword(
                    email,contraseña)
                props.history.push('/perfil');

                await db.collection('usuarios').doc(res.user.email).set(
                    {
                        email: res.user.email,
                        uid:res.user.id
                    }
                )

            setError('')
            setContraseña('')
            setContraseña2('')
            setEmail('')
            //console.log(res)
        }catch(error){
                console.log(error)
            if(error.code==='auth/invalid-email'){
            setError('Email no válido')}
            if(error.code==='auth/email-already-in-use'){
                setError('Email ya utilizado')
            }
        }
    },[ email,contraseña,props.history])
    return(
        <Fragment>
            <Navigation />
            <div id="container2">
                <h2 className="text-center">Registro de Nuevo Usuario</h2>
                    <hr/>
                <div className="row justify-content-center">

                <div className="col-12 col-sm-8 col-md-6 col-xl-4">
            <form onSubmit={procesarDatos}>
                {
                    error && (
                        <div className="alert alert-primary">
                            {error}
                        </div>
                    )
                }



                <input type="email" className="form-control mb-2" placeholder="Ingrese su email"
                       onChange={e=>setEmail(e.target.value)}/>

                <input type="password" className="form-control mb-2" placeholder="Ingrese su contraseña"
                       onChange={e=>setContraseña(e.target.value)}/>

                <input type="password" className="form-control mb-2" placeholder="Confirme su contraseña"
                       onChange={e=>setContraseña2(e.target.value)}/>

               
                <div>
                    <button type="submit" className="btn btn-primary">Registrarme</button>
                <a>    </a>
                <Link to="/"><button id="buttoncanc" type="button" className="btn btn-primary">Cancelar</button></Link>
                </div>
            </form>
            </div>
        </div>
            </div>
            <Footpage/>
        </Fragment>

    );

}
export default withRouter(FormularioRegistro);