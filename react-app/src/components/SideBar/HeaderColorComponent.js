import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {changeFormStyle} from '../../store/styles'
const HeaderColorComponent = () => {
    const dispatch  = useDispatch()
    const formHeaderColor = useSelector(state => state.stylesReducer.headerColor)
    // setting header text
    const setHeader = (e) => {
        const startFormHeader = document.getElementById('form-header')
        startFormHeader.innerText = e.target.value
    }
    return (
    <>
        <h3>Type what you want to be your header</h3>
        <input type="text" onChange={setHeader}></input>
        <h3>Form Header Color</h3>
        <input type='color'
            value={formHeaderColor}
            onChange={(e) => dispatch(changeFormStyle(e.target.value, 'headerColor'))}
        />
    </>
    )
}
export default HeaderColorComponent