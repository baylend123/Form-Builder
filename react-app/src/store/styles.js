const FORMSTYLE = 'FORMSTYLE/load'
const LOGOUT = 'LOGOUT'

export const logoutStyles = () => {
    return {
        type: LOGOUT,
        payload: {}
    }
}
export const changeFormStyle = (data, type) => {
    return {
        type: FORMSTYLE,
        payload: {
            data:data,
            property:type
        }
    }
}

let initialState ={
  formBackground: 'white',
  headerColor: 'black',
  backgroundRadius: '10px',
  padding: '0px',
  height: '50vh',
  width: '30vw',
  borderType: 'solid',
  borderSize: '2',
  borderColor: 'black',
  shadowRight: '5',
  shadowBottom: '5',
  shadowBlur: '5',
  shadowColor: 'black'
}
const stylesReducer = (state = initialState, action) => {
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
export default stylesReducer
