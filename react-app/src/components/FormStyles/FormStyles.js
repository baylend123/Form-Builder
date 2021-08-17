import React from "react"
import {
    changeFormBackgroundThunk,
    formBorderRadiusThunk,
    formPaddingThunk,
    formHeightThunk,
    formWidthThunk,
    formBorderTypeThunk,
    formBorderColorThunk,
    formBorderSizeThunk,
    formShadowRightThunk,
    formShadowBottomThunk,
    formShadowBlurThunk,
    formShadowColorThunk,
} from '../../store/styles'
import { useDispatch } from 'react-redux'
import {useState } from 'react'
const FormStyles = () => {
    const dispatch = useDispatch()

    const [formBackgroundColor, setFormBackgroundColor] = useState('')
    const [formShadowColor, setFormShadowColorState] = useState('')
    const [formBorderColor, setFormBorderColorState] = useState('')



    const setFormColor = (e) => {
        setFormBackgroundColor(e.target.value)
        dispatch(changeFormBackgroundThunk(e.target.value))

    }
    const setFormBorderRadius = (e) => {

        dispatch(formBorderRadiusThunk(e.target.value.toString() + 'px'))
    }
    const setFormPadding = (e) => {
        dispatch(formPaddingThunk(e.target.value.toString() + 'px'))
    }
    const setFormHeight = (e) => {
        dispatch(formHeightThunk(e.target.value.toString() + 'px'))
    }
    const setFormWidth = (e) => {
        dispatch(formWidthThunk(e.target.value.toString() + 'px'))
    }
    const setFormBorderType = (type) => {
        dispatch(formBorderTypeThunk(type))
    }
    const setFormBorderSize = (e) => {
        dispatch(formBorderSizeThunk(e.target.value.toString()))
    }
    const setFormBorderColor = (e) => {
        setFormBorderColorState(e.target.value)
        dispatch(formBorderColorThunk(e.target.value))
    }
    const setFormShadowRight = (e) => {
        dispatch(formShadowRightThunk(e.target.value.toString()))
    }
    const setFormShadowBottom = (e) => {
        dispatch(formShadowBottomThunk(e.target.value.toString()))
    }
    const setFormShadowBlur = (e) => {
        dispatch(formShadowBlurThunk(e.target.value.toString()))
    }
    const setFormShadowColor = (e) => {
        setFormShadowColorState(e.target.value)
        dispatch(formShadowColorThunk(e.target.value))
    }
    return (
        <>
                            <h3>Form background color</h3>
                            <input type="color"
                                value={formBackgroundColor}
                                onChange={setFormColor}
                            />

                            {/* form background border radius */}
                            <h3>Form Border radius</h3>
                            <input
                                type='range'
                                onChange={setFormBorderRadius}
                                min={0}
                                max={30}
                                default={2}
                            />

                            <h3>Form Border Type</h3>
                            <div>

                                <label>Choose a Border Type</label>
                            </div>
                            <div>

                                <div style={{ margin: '10px' }}>
                                    <input type='radio'
                                        name='formBorderType'
                                        onClick={() => setFormBorderType('none')}
                                    ></input>

                                </div>
                                <div style={{ margin: '10px', border: '1px solid black' }}>
                                    <input type='radio'
                                        name='formBorderType'
                                        onClick={() => setFormBorderType('solid')}
                                    ></input>

                                </div>
                                <div style={{ margin: '10px', border: '1px dashed black' }}>
                                    <input type='radio'
                                        name='formBorderType'
                                        onClick={() => setFormBorderType('dashed')}
                                    ></input>

                                </div>
                                <div style={{ margin: '10px', border: '1px dotted black' }}>
                                    <input type='radio'
                                        name='formBorderType'
                                        onClick={() => setFormBorderType('dotted')}
                                    ></input>

                                </div>

                            </div>
                            <div>
                                <h3>Border Size</h3>
                            </div>
                            <div>
                                <input type='range'
                                    min={1}
                                    max={10}
                                    onChange={setFormBorderSize}
                                ></input>
                            </div>
                            <div><h3>
                                Border Color
                            </h3>
                            </div>
                            <div>
                                <input type="color"
                                    value={formBorderColor}
                                    onChange={setFormBorderColor}
                                >

                                </input>
                            </div>

                            <div>
                                <h3>Form Shaddow Right</h3>
                            </div>
                            <div>
                                <input type='range'
                                    min={0}
                                    max={50}
                                    onChange={setFormShadowRight}
                                ></input>
                            </div>
                            <div>
                                <h3>Form Shadow Bottom</h3>
                            </div>
                            <div>
                                <input type='range'
                                    min={0}
                                    max={50}
                                    onChange={setFormShadowBottom}
                                ></input>
                            </div>
                            <div>
                                <h3>Form Shadow Blur</h3>
                            </div>
                            <div>
                                <input type='range'
                                    min={0}
                                    max={50}
                                    onChange={setFormShadowBlur}
                                ></input>
                            </div>
                            <div>
                                <h3>Form Shadow Color</h3>
                            </div>
                            <div>
                                <input type='color'
                                    value={formShadowColor}
                                    onChange={setFormShadowColor}
                                >

                                </input>
                            </div>
                            {/* form padding picker, CHANGE THIS */}
                            <h3>Form Padding</h3>
                            <input type='range'
                                min={0}
                                max={100}
                                onChange={setFormPadding}
                            />

                            {/* form height */}
                            <h3>Form height</h3>
                            <input type='range'
                                min={0}
                                max={1000}
                                onChange={setFormHeight}
                            />

                            {/* form width */}
                            <h3>Form width</h3>
                            <input type='range'
                                min={0}
                                max={1000}
                                onChange={setFormWidth}
                            />
                        </>
    )
}

export default FormStyles