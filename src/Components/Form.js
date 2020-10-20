import React, { useState,useEffect } from 'react'
import { useForm } from 'react-hook-form'
// import axios from 'axios'

// Redux
import {connect} from 'react-redux';
import { saveData } from '../Actions/ServiceActions';

function Form(props) {

    const [mensaje, setMensaje] =  useState('Metro');
    const {register, errors, handleSubmit} = useForm();
    const {msg, setMsg} = useState('');

    // useEffect(()=>{
    //     props.Service.mensaje = 'Metro'
    // },[props.Service.mensaje])


    const valForm = (data) => {
        let response = { state : true, message: ""}

        if (data.edad < 18 || data.edad > 100){
            response = {
                state : false,
                message : "La edad debe estar entre 18 y 100 años"
            }
            document.getElementById("edad").style.borderColor = "red"
        } 
        if(data.nombres == ''){
            response = {
                state : false,
                message : "El nombre no debe estar vacio"
            }
            document.getElementById("nombres").style.borderColor = "red"
        } 
        if(data.email == ''){
            response = {
                state : false,
                message : "El nombre no debe estar vacio"
            }
            document.getElementById("email").style.borderColor = "red"
        }
        if(data.celular == ''){
            response = {
                state : false,
                message : "El celular no debe estar vacio"
            }
            document.getElementById("celular").style.borderColor = "red"
        }
        
        if(response.state == true){
            document.getElementById("edad").style.borderColor = "#DDD"
        }

        props.Service.mensaje = response.message

        return response
    }

    const onSubmit = (data, e) => {
        console.log(props)
        let val = valForm(data)
        if(val.state === true){
            props.saveData(data)

            e.target.reset()
        }
    }
    
    return (
        <div className="container-center">
            {console.log(props)}
            <h3>Hola bienvenido sabemos que quieres viajar en un {props.Service.messages}. Por favor diligencia el siguiente formulario:</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="elements">
                    <input type="text" id="nombres" name="nombres" className="" placeholder="Nombre Completo" ref={register({
                        // required: {
                        //     value: true, 
                        //     message: 'Nombre es requerido'
                        // },
                    })}/>
                    <input type="email" id="email" name="email" className="" placeholder="Email" ref={register({
                        required: {
                            // value: true, 
                            // message: 'Email es requerido',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address"
                            }
                        },
                    })}/>
                    <input type="number" id="celular" name="celular" className="" placeholder="Celular" ref={register({
                        // required: {
                        //     value: true, 
                        //     message: 'Celular es requerido'
                        // },
                    })}/>
                    <input type="number" id="edad" name="edad" className="" placeholder="Edad" ref={register({
                        required: {
                            // value: true, 
                            // message: 'Edad es requerido',
                            maxLength: {
                                value: 20,
                                message: 'No más de 20 carácteres!'
                            }
                        }
                    })}/>
                    <br/>
                    <input type="submit" className="btn" value="Enviar"/>
                </div>
                <div id="errorsForm">
                    {props.Service.mensaje}
                    <span className="text-danger text-small d-block mb-2">
                        {errors.message}
                    </span>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        Service : state.Service
    }
}

const mapDispatchToProps = {
    saveData
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);