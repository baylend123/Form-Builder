

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

const TEXTRADIUS = 'TEXTRADIUS/load'
const TEXTPADDING = 'TEXTPADDING/load'
const TEXTHEIGHT = 'TEXTHEIGHT/load'
const TEXTWIDTH = 'TEXTWIDTH/load'
const TEXTCOLOR = 'TEXTHEADERCOLOR/load'
const TEXTFONT = 'TEXTFONT/load'
const TEXTBORDERTYPE = 'TEXTBORDERTYPE/load'
const TEXTBORDERSIZE = 'TEXTBORDERSIZE/load'
const TEXTBORDERCOLOR = 'TEXTBORDERCOLOR/load'
const TEXTSHADOWRIGHT = 'TEXTSHADOWRIGHT/load'
const TEXTSHADOWBOTTOM = 'TEXTSHADOWBOTTOM/load'
const TEXTSHADOWBLUR = 'TEXTSHADOWBLUR/load'
const TEXTSHADOWCOLOR = 'TEXTSHADOWCOLOR/load'
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



const changeTEXTColor = (color) => {
    return {
        type: TEXTCOLOR,
        payload: color
    }
}

const changeTEXTRadius = (number) => {
    return {
        type: TEXTRADIUS,
        payload: number
    }
}
const changeTEXTPadding = (number) => {
    return {
        type: TEXTPADDING,
        payload: number
    }
}
const changeTEXTHeight = (number) => {
    return {
        type: TEXTHEIGHT,
        payload: number
    }
}
const changeTEXTWidth = (number) => {
    return {
        type: TEXTWIDTH,
        payload: number
    }
}
const changeTEXTFont = (font) => {
    return {
        type: TEXTFONT,
        payload: font
    }
}
const changeTEXTBorderType = (borderType) => {
    return {
        type: TEXTBORDERTYPE,
        payload: borderType
    }
}
const changeTEXTBorderSize = (borderSize) => {
    return {
        type: TEXTBORDERSIZE,
        payload: borderSize
    }
}
const changeTEXTBorderColor = (borderColor) => {
    return {
        type: TEXTBORDERCOLOR,
        payload: borderColor
    }
}
const changeTEXTShadowRight = (number) => {
    return {
        type: TEXTSHADOWRIGHT,
        payload: number
    }
}
const changeTEXTShadowBottom = (number) => {
    return {
        type: TEXTSHADOWBOTTOM,
        payload: number
    }
}
const changeTEXTShadowBlur = (number) => {
    return {
        type: TEXTSHADOWBLUR,
        payload: number
    }
}
const changeTEXTShadowColor = (color) => {
    return {
        type: TEXTSHADOWCOLOR,
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



export const textBorderRadiusThunk = (number) => async (dispatch) => {
    dispatch(changeTEXTRadius(number))
}
export const textPaddingThunk = (number) => async (dispatch) => {
    dispatch(changeTEXTPadding(number))
}
export const textHeightThunk = (number) => async (dispatch) => {
    dispatch(changeTEXTHeight(number))
}
export const textWidthThunk = (number) => async (dispatch) => {
    dispatch(changeTEXTWidth(number))
}
export const textColorThunk = (color) => async (dispatch) => {
    dispatch(changeTEXTColor(color))
}
export const textFontThunk = (font) => async (dispatch) => {
    dispatch(changeTEXTFont(font))
}
export const textBorderTypeThunk = (type) => async (dispatch) => {
    dispatch(changeTEXTBorderType(type))
}
export const textBorderSizeThunk = (size) => async (dispatch) => {
    dispatch(changeTEXTBorderSize(size))
}
export const textBorderColorThunk = (color) => async (dispatch) => {
    dispatch(changeTEXTBorderColor(color))
}
export const textShadowRightThunk = (number) => async (dispatch) => {
    dispatch(changeTEXTShadowRight(number))
}
export const textShadowBottomThunk = (number) => async (dispatch) => {
    dispatch(changeTEXTShadowBottom(number))
}
export const textShadowBlurThunk = (number) => async (dispatch) => {
    dispatch(changeTEXTShadowBlur(number))
}
export const textShadowColorThunk = (color) => async (dispatch) => {
    dispatch(changeTEXTShadowColor(color))
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
const stylesReducer = (state = initialState, action) => {
    let newState = {...state}
    switch (action.type) {
        case FORMBACKGROUNDLOAD:
            newState.formBackground = action.payload
            return newState
        case FORMHEADERCOLOR:
            newState.headerColor = action.payload
            return newState
        case FORMRADIUS:
            newState.backgroundRadius = action.payload
            return newState
        case FORMPADDING:
            newState.padding = action.payload
            return newState
        case FORMHEIGHT:
            newState.height = action.payload
            return newState
        case FORMWIDTH:
            newState.width = action.payload
            return newState
        case FORMFONT:

            newState.font = action.payload
            return newState
        case FORMBORDERTYPE:

            newState.borderType = action.payload
            return newState
        case FORMBORDERSIZE:

            newState.borderSize = action.payload
            return newState
        case FORMBORDERCOLOR:

            newState.borderColor = action.payload
            return newState
        case FORMSHADOWRIGHT:

            newState.shadowRight = action.payload
            return newState
        case FORMSHADOWBOTTOM:

            newState.shadowBottom = action.payload
            return newState
        case FORMSHADOWBLUR:

            newState.shadowBlur = action.payload
            return newState
        case FORMSHADOWCOLOR:

            newState.shadowColor = action.payload
            return newState
        
        case TEXTRADIUS:
            newState.textInputRadius = action.payload
            return newState
        case TEXTWIDTH:
            newState.textInputWidth = action.payload
            return newState
        case TEXTCOLOR:
            newState.textInputColor = action.payload
            return newState
        case TEXTBORDERTYPE:
            newState.textInputBorder = action.payload
            return newState
        case TEXTBORDERSIZE: 
            newState.textInputBorderSize = action.payload
            return newState
        case TEXTBORDERCOLOR:
            newState.textInputBorderColor = action.payload
            return newState
        case TEXTSHADOWRIGHT:
            newState.textInputBoxShadowRight = action.payload
            return newState
        case TEXTSHADOWBOTTOM:
            newState.textInputBoxShadowBottom = action.payload
            return newState
        case TEXTSHADOWBLUR:
            newState.textInputBoxShadowBlur = action.payload
            return newState
        case TEXTSHADOWCOLOR:
            newState.textInputBoxShadowColor = action.payload
            return newState
        case LOGOUT:
        newState = action.payload
        return state

        default:
            return state
    }
}
export default stylesReducer
