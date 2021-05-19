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
    console.log(notMyFormsArray)
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
    switch (action.type) {
        case MYFORMS:
            state.myForms = action.payload
            return {
                ...state,
            }
        case NOTMYFORMS:
            state.notMyForms = action.payload
            return {
                ...state,
            }
        case MYFORMDELETE:
            state.myForms = state.myForms.filter(formObj => {
                if (formObj.id !== action.payload) {
                    console.log(formObj)
                    return formObj
                }
            })

            return {
                ...state,
            }
        default:
            return state
    }
}
export default myFormsReducer