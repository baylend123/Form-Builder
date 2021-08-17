
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
const inputReducer = (state = initialState, action) => {
    let newState = {...state}
    switch (action.type) {
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

        default:
            return state
    }
}

export default inputReducer