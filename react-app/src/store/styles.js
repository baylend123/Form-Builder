

const FORMBACKGROUNDLOAD = 'FORMBACKGROUND/load'
const FORMRADIUS = 'FORMRADIUS/load'
const FORMPADDING = 'FORMPADDING/load'
const FORMHEIGHT = 'FORMHEIGHT/load'
const FORMWIDTH = 'FORMWIDTH/load'
const FORMHEADERCOLOR = 'FORMHEADERCOLOR/load'
const FORMFONT = 'FORMFONT/load'
const FORMBORDERTYPE = 'FORMBORDERTYPE/load'
const FORMBORDERSIZE = 'FORMBORDERSIZE/load'
const FORMBORDERCOLOR = 'FORMBORDERCOLOR/load'
const FORMSHADOWRIGHT = 'FORMSHADOWRIGHT/load'
const FORMSHADOWBOTTOM = 'FORMSHADOWBOTTOM/load'
const FORMSHADOWBLUR = 'FORMSHADOWBLUR/load'
const FORMSHADOWCOLOR = 'FORMSHADOWCOLOR/load'
const LOGOUT = 'LOGOUT'

const logout = () => {
    return {
        type: LOGOUT,
        payload: {}
    }
}


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
const changeFormBorderType = (borderType) => {
    return {
        type: FORMBORDERTYPE,
        payload: borderType
    }
}
const changeFormBorderSize = (borderSize) => {
    return {
        type: FORMBORDERSIZE,
        payload: borderSize
    }
}
const changeFormBorderColor = (borderColor) => {
    return {
        type: FORMBORDERCOLOR,
        payload: borderColor
    }
}
const changeFormShadowRight = (number) => {
    return {
        type: FORMSHADOWRIGHT,
        payload: number
    }
}
const changeFormShadowBottom = (number) => {
    return {
        type: FORMSHADOWBOTTOM,
        payload: number
    }
}
const changeFormShadowBlur = (number) => {
    return {
        type: FORMSHADOWBLUR,
        payload: number
    }
}
const changeFormShadowColor = (color) => {
    return {
        type: FORMSHADOWCOLOR,
        payload: color
    }
}

export const logoutStylesThunk = () => async (dispatch) => {
    dispatch(logout())
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
export const formBorderTypeThunk = (type) => async (dispatch) => {
    dispatch(changeFormBorderType(type))
}
export const formBorderSizeThunk = (size) => async (dispatch) => {
    dispatch(changeFormBorderSize(size))
}
export const formBorderColorThunk = (color) => async (dispatch) => {
    dispatch(changeFormBorderColor(color))
}
export const formShadowRightThunk = (number) => async (dispatch) => {
    dispatch(changeFormShadowRight(number))
}
export const formShadowBottomThunk = (number) => async (dispatch) => {
    dispatch(changeFormShadowBottom(number))
}
export const formShadowBlurThunk = (number) => async (dispatch) => {
    dispatch(changeFormShadowBlur(number))
}
export const formShadowColorThunk = (color) => async (dispatch) => {
    dispatch(changeFormShadowColor(color))
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
        case FORMBORDERTYPE:
            state.borderType = action.payload
            return { ...state }
        case FORMBORDERSIZE:
            state.borderSize = action.payload
            return { ...state }
        case FORMBORDERCOLOR:
            state.borderColor = action.payload
            return { ...state }
        case FORMSHADOWRIGHT:
            state.shadowRight = action.payload
            return { ...state }
        case FORMSHADOWBOTTOM:
            state.shadowBottom = action.payload
            return { ...state }
        case FORMSHADOWBLUR:
            state.shadowBlur = action.payload
            return { ...state }
        case FORMSHADOWCOLOR:
            state.shadowColor = action.payload
            return { ...state }
        case LOGOUT:
            state = action.payload
            return state

        default:
            return state
    }
}
export default stylesReducer
