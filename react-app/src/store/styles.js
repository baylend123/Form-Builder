

const FORMBACKGROUNDLOAD = 'FORMBACKGROUND/load'
const FORMRADIUS = 'FORMRADIUS/load'
const FORMPADDING = 'FORMPADDING/load'
const FORMHEIGHT = 'FORMHEIGHT/load'
const FORMWIDTH = 'FORMWIDTH/load'
const FORMHEADERCOLOR = 'FORMHEADERCOLOR/load'
const FORMFONT = 'FORMFONT/load'

const changeFormHeaderColor = (color) => {
    return {
        type: FORMHEADERCOLOR,
        payload: color
    }
}

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
const changeFormPadding = (number) => {
    return {
        type: FORMPADDING,
        payload: number
    }
}
const changeFormHeight = (number) => {
    return {
        type: FORMHEIGHT,
        payload: number
    }
}
const changeFormWidth = (number) => {
    return {
        type: FORMWIDTH,
        payload: number
    }
}
const changeFormFont = (font) => {
    return {
        type: FORMFONT,
        payload: font
    }
}


export const changeFormBackgroundThunk = (color) => async (dispatch) => {
    dispatch(changeFormBackground(color))
}
export const formBorderRadiusThunk = (number) => async (dispatch) => {
    dispatch(changeFormRadius(number))
}
export const formPaddingThunk = (number) => async (dispatch) => {
    dispatch(changeFormPadding(number))
}
export const formHeightThunk = (number) => async (dispatch) => {
    dispatch(changeFormHeight(number))
}
export const formWidthThunk = (number) => async (dispatch) => {
    dispatch(changeFormWidth(number))
}
export const formHeaderColorThunk = (color) => async (dispatch) => {
    dispatch(changeFormHeaderColor(color))
}
export const formFontThunk = (font) => async (dispatch) => {
    dispatch(changeFormFont(font))
}


const stylesReducer = (state = {}, action) => {
    switch (action.type) {
        case FORMBACKGROUNDLOAD:
            state.formBackground = action.payload
            return { ...state }
        case FORMHEADERCOLOR:
            state.headerColor = action.payload
            return { ...state }

        case FORMRADIUS:
            state.backgroundRadius = action.payload
            return { ...state }
        case FORMPADDING:
            state.padding = action.payload
            return { ...state }
        case FORMHEIGHT:
            state.height = action.payload
            return { ...state }
        case FORMWIDTH:
            state.width = action.payload
            return { ...state }
        case FORMFONT:
            state.font = action.payload
            return { ...state }

        default:
            return state
    }
}
export default stylesReducer
