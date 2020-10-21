import axios from 'axios';

export const saveData = (data) => async dispatch => {
    await axios.post("https://api-ekoomedia-prueba.herokuapp.com/api/register",data).then((resp) => {
        let data = resp.data;
    
        if(data.code === 200){
            console.log(data)
            // setMsg(data.mensaje)
            dispatch({
                type:"saveData",
                payload: data.data,
                mensaje : data.mensaje
            })
        }else if(data.code === 500){
            console.log(data)
            // setMsg(data.mensaje)
            dispatch({
                type:"saveData",
                payload: data.data,
                mensaje: data.mensaje
            })
        }
    })
}

export const changeMessage = (mensaje) => {
   return {
    type:"changeMessage",
    messages: mensaje
   }
}