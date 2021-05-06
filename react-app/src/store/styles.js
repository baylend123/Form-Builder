

const FORMBACKGROUNDLOAD = 'FORMBACKGROUND/load'


const changeFormBackground = (color) => {
    return {
        type: FORMBACKGROUNDLOAD,
        payload: color
    }
}


export const changeFormBackgroundThunk = (color) => async (dispatch) => {
    dispatch(changeFormBackground(color))
}


const stylesReducer = (state = {}, action) => {
    switch (action.type) {
        case FORMBACKGROUNDLOAD:
            state.formBackground = action.payload
            return { ...state }

        default:
            return state
    }
}
export default stylesReducer