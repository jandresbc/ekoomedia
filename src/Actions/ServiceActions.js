import axios from 'axios';

export const saveData = (data) => async dispatch => {
    await axios.post("http://127.0.0.1:8000/api/register",data).then((resp) => {
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