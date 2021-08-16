const MYFORMS = 'MYFORMS/load'
const MYFORMDELETE = 'MYFORMS/delete'
const NOTMYFORMS = 'NOTMYFORMS/load'

const getMyForms = (array) => {
    return {
        type: MYFORMS,
        payload: array
    }
}
const deleteMyForm = (id) => {
    return {
        type: MYFORMDELETE,
        payload: id
    }
}
const getFormsThatArentMine = (array) => {
    return {
        type: NOTMYFORMS,
        payload: array
    }
}

export const getMyFormsThunk = () => async (dispatch) => {
    const myFormsReq = await fetch('/api/forms/mine')
    const myFormsArray = await myFormsReq.json()
    if (myFormsArray) {

        dispatch(getMyForms(myFormsArray.myForms))
    }
}
export const formsThatArentMineThunk = () => async (dispatch) => {
    const notMyFormsReq = await fetch('/api/forms/all')
    const notMyFormsArray = await notMyFormsReq.json()

    if (notMyFormsArray) {
        dispatch(getFormsThatArentMine(notMyFormsArray.notMyForms))
    }
}
export const formDeleteThunk = (id) => async (dispatch) => {
    const deleteReq = await fetch(`/api/forms/${id}`, {
        method: 'DELETE'
    })
    if (deleteReq.status === 200) {

        dispatch(deleteMyForm(id))
    }

}



const myFormsReducer = (state = {}, action) => {
    const newState = {...state}
    switch (action.type) {
        case MYFORMS:
            newState.myForms = action.payload
            return newState

        case NOTMYFORMS:
            newState.notMyForms = action.payload
            return newState
        case MYFORMDELETE:
            newState.myForms = state.myForms.filter(formObj => {
                return formObj.id !== action.payload 
            })

            return newState
        default:
            return state
    }
}
export default myFormsReducer