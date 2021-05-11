const MYFORMS = 'MYFORMS/load'

const getMyForms = (array) => {
    return {
        type: MYFORMS,
        payload: array
    }
}


export const getMyFormsThunk = () => async (dispatch) => {
    const myFormsReq = await fetch('/api/forms/mine')
    const myFormsArray = await myFormsReq.json()
    dispatch(getMyForms(myFormsArray.myForms))
}



const myFormsReducer = (state = {}, action) => {
    switch (action.type) {
        case MYFORMS:
            state.myForms = action.payload
            return {
                ...state,
            }
        default:
            return state
    }
}
export default myFormsReducer