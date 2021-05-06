

const FORMBACKGROUNDLOAD = 'FORMBACKGROUND/load'
const FORMRADIUS = 'FORMRADIUS/load'


const changeFormBackground = (color) => {
    return {
        type: FORMBACKGROUNDLOAD,
        payload: color
    }
}
const changeFormRadius = (number) => {
    return {
        type: FORMRADIUS,
        payload: number
    }
}


export const changeFormBackgroundThunk = (color) => async (dispatch) => {
    dispatch(changeFormBackground(color))
}
export const formBorderRadiusThunk = (number) => async (dispatch) => {
    dispatch(changeFormRadius(number))
}


const stylesReducer = (state = {}, action) => {
    switch (action.type) {
        case FORMBACKGROUNDLOAD:
            state.formBackground = action.payload
            return { ...state }

        case FORMRADIUS:
            state.backgroundRadius = action.payload
            return { ...state }

        default:
            return state
    }
}
export default stylesReducer
