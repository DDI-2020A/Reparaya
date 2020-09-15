import React from 'react';
import './InicioSesion.css';
import { Form, Input, Button, Checkbox } from 'antd';
import logo from '../logo.png';
import {Link} from "react-router-dom";

const InicioSesion=()=>{
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


        const onFinish = (values) => {
            console.log('Success:', values);
        };
        const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
        };
    return(






            <div id="container">
                <Link to="/">< img src={logo}/></Link>

                <Form {...layout} name="basic" initialValues={{remember: true,}} onFinish={onFinish} onFinishFailed={onFinishFailed}>
                    <Form.Item label="Mail" name="Mail" rules={[{required: true, message: 'Ingrese el Usuario',},]}>
                        <Input type="mail"/>
                    </Form.Item>

                    <Form.Item label="Contraseña" name="Contraseña" rules={[{required: true, message: 'Ingrese la Contraseña',},]}>
                        <Input.Password id="cont" />
                    </Form.Item>

                    <Form.Item {...tailLayout} name="Recuerdame" valuePropName="checked">
                        <Checkbox id="check">     Recordar Contraseña</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Ingresar
                        </Button>
                    </Form.Item>
                </Form>
            </div>








    )



}
export default InicioSesion;