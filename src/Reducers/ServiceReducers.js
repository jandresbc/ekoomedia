
const initialState = {
    messages : "Metro",
    mensaje : "",
    data : {},
    dataForm : {}
}

const Service = (state = initialState, action) => {
    switch (action.type){
        case "saveData":
            return {
                ...state,
                data: action.payload,
                mensaje : action.mensaje
            }
        case "changeMessage":
            return {
                ...state,
                messages : action.messages
            }
        default:
            return state
    }
}

export default Service