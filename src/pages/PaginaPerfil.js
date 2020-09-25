import React,{useState,Fragment}from "react";
import Navigation from "../components/Navigation";
import Footpage from "../components/Footpage";
import './PaginaPerfil.css';
import {auth,app,dab} from '../Routers/firebase';
import {withRouter} from "react-router-dom";
const PagPerfil=(props)=>{
    const [publicacion,setPublicacion]=useState ([]);
    const [comentario,setComentario]=useState('');
    const [modoEdicion,setModoEdicion]=useState(false);
    const [id,setId]=useState('');
    const eliminar=async (id)=>{
        try{
            await dab.collection('Publicaciones').doc(id).delete();

            const arrayFiltrado=publicacion.filter(item=>item.id !==id);
            setPublicacion(arrayFiltrado);
        }catch(error){
            console.log(error)
        }
    }
    const activarEdicion=(item)=>{
        setModoEdicion(true)
        setComentario(item.Comentario)
        setId(item.id)

    }
    const editar=async(e)=>{
        e.preventDefault()
        if(comentario.trim()){
            console.log('vacio')
            return
        }
        try{
            await dab.collection('Publicaciones').doc(id).update(
                {
                    Comentario: comentario
                }
            )
            const arrayEditado=publicacion.map(item=>(
                item.id===id ? {id:item.id,Fecha:item.Fecha,
                Comentario: comentario} : item
            ))
            setPublicacion(arrayEditado)
            setModoEdicion(false)
            setComentario('')
            setId('')


        }catch(error){
            console.log(error)
        }

    }
    const agregar=async(e)=>{
        e.preventDefault()

        if(!comentario.trim()){
            console.log('esta vacio')
            return
        }
        try{
            const nuevoComentario={
                Comentario: comentario,
                Fecha: Date.now()

            }
            const data=await dab.collection('Publicaciones').add(nuevoComentario)
            setPublicacion([
                ...publicacion,
                {
                    ...nuevoComentario,id:data.id
                }
            ])
            setComentario('');

        }catch(error){
            console.log(error)
        }
    }
    React.useEffect(()=>{
        if(auth.currentUser){
            console.log('existe el usuario');
        }else{
            console.log('no existe un usuario');
            props.history.push('/');
        }



            const obtenerDatos=async ()=>{
                try{

                    const data=await dab.collection('Publicaciones').get();


                    const arrayData=await data.docs.map(doc=>({
                        id:doc.id,
                        ...doc.data()
                    }))
                    setPublicacion(arrayData)
                    console.log(arrayData)
                                    }catch (error){
                    console.log(error)
                }
            }
        obtenerDatos()
    },[])





    return(
        <Fragment>
            <Navigation/>
            <div>
            <div id="infoPerfil">
               <div className="card" height='480px'>
                    <div className="card-body" >
                        <img src="data:image/png;base64,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"
                             alt="imagen de perfil"/>
                        <br></br>
                        <button className="btn btn-dark">
                            Cambiar Imagen
                        </button>

                        <h5 className="card-title">Nombre de Usuario</h5>
                        <p className="card-text text-left">Celular:</p>
                        <p className="card-text text-left">Email:</p>
                        <p className="card-text text-left">Dirección:</p>
                        <p className="card-text text-left">Habilidades:</p>
                        <p className="card-text text-left">Sectores de Trabajo:</p>

                        <button className="btn btn-dark">
                            Editar Perfil
                        </button>
                    </div>
               </div>
                </div>

                <div id="contenido">


                   <div className="container mt-3">
                       <div className="row">
                            <div className="col-md-6">

                                <form onSubmit={
                                    modoEdicion ? editar : agregar}>
                                    <h3 className="text-black-50">
                                        {
                                            modoEdicion ? 'Editar Tarea':'Agregar Tarea'
                                        }
                                    </h3>
                                    <input type="text" className="form-control mb-2" placeholder="Ponga su publicación aquí"

                                           onChange={e=>setComentario(e.target.value)} value={comentario}/>
                                    <button type="submit" className={
                                        modoEdicion ? 'btn btn-warning btn-block':'btn btn-dark btn-block'
                                    }>{
                                        modoEdicion?'Editar':'Publicar'
                                    }</button>
                                </form>
                                <h2 className='text-center'>Publicaciones</h2>
                                <ul className='list-group'>
                                    {
                                        publicacion.map(item=>(
                                            <li id="comIn" className='list-group-item bg-dark' key={item.id}>Comentario:{item.Comentario}-Fecha:{
                                                item.Fecha}
                                                < button className="btn btn-danger btn-sm float-right"
                                                onClick={()=>eliminar(item.id)}>Eliminar</button>
                                                <button className="btn btn-warning btn-sm float-right"
                                                onClick={()=>activarEdicion(item)}>Editar</button>
                                            </li>

                                        ))

                                    }
                                </ul>

                       </div>

                   </div>
            </div>
                </div>
            </div>




            <Footpage/>
        </Fragment>
    );


}
export default withRouter(PagPerfil);