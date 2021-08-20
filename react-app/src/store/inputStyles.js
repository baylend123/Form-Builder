const FORMSTYLE = 'FORMSTYLE/load';
const LOGOUT = 'LOGOUT'
export const changeTextStyle = (data, type) => {
    return {
        type: FORMSTYLE,
        payload: {
            data:data,
            property:type
        }
    }
}
export const logoutStyles = () => {
    return {
        type: LOGOUT,
        payload: {}
    }
}

let initialState ={
    textInputRadius: '',
    textInputWidth: '100',
    textInputColor: '',
    textInputBorder: '',
    textInputBorderSize:'2',
    textInputBorderColor: 'black',
    textInputBoxShadowBottom: '2',
    textInputBoxShadowRight: '2',
    textInputBoxShadowBlur: '2',
    textInputBoxShadowColor: 'lightblue',
}
const inputReducer = (state = initialState, action) => {
    let newState = {...state}
    switch (action.type) {
        case FORMSTYLE:
            newState[action.payload.property] = action.payload.data
            return newState
        case LOGOUT:
            return action.payload
        default:
            return state
    }
}

export default inputReducer