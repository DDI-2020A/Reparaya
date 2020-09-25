import React,{Fragment} from "react";
import Navigation from "../components/Navigation";
import Footpage from "../components/Footpage";
import './Buscador.css';
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
const Buscador=()=>{
    const { Search } = Input;

    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1890ff',
            }}
        />
    );
    return(
        <Fragment>
            <Navigation/>
            <div className="text-center" id="busc">
                <h3 className="text-center">Buscador de Personas</h3>
            <Search
                    placeholder="Ingrese la palabra clave"
                    enterButton="Buscar"
                    size="large"
                    onSearch={value => console.log(value)}
                />
                <div id="res">
                    <h3 className="text-center">Resultados</h3>
                </div>
            </div>


            <Footpage/>
        </Fragment>
    );



}
export default  Buscador;