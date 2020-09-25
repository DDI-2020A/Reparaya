import React, {useState} from 'react';
import './InicioSesion.css';
import logo from '../logo.png';
import {Link,withRouter} from "react-router-dom";
import {auth} from '../Routers/firebase';

const InicioSesion=(props)=>{

    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
    };
    const [email,setEmail]=useState('');
    const [contraseña,setContraseña]=useState('');
    const [error,setError]=useState(null);
    const [estado,setEstado]=useState(false);
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
        if(estado===false){
            login();
        }
        setEstado(false)
        setError(null)

    }



        const login=React.useCallback(async()=>{
            try{
                const res= await auth.signInWithEmailAndPassword(email,contraseña)
                console.log(res.user)
                props.history.push('/perfil');
                setError('')
                setContraseña('')
                setEmail('')
            } catch(error){
                console.log(error)
                if(error.code==='auth/invalid-email'){
                    setError('Email no valido')
                }
                if(error.code==='auth/user-not-found'){
                    setError('Email no registrado')
                }
                if(error.code==='auth/wrong-password'){
                    setError('Contraseña Incorrecta')
                }


            }
        },[email,contraseña, props.history])
    return(




            <div id="container">

                <Link to="/">< img src={logo}/></Link>
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




                    <div>
                        {/*<Link to="/perfil">*/}<button type="submit" className="btn btn-primary bg-green">Ingresar</button>{/*</Link>*/}

                    </div>
                </form>
            </div>








    )



}
export default withRouter(InicioSesion);