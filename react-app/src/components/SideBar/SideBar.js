import React from 'react';
import { useState } from 'react'
import TextInput from '../TextInput'
import EmailInput from '../EmailInput';
import PasswordInput from '../PasswordInput';
import NumberInput from '../NumberInput'
import ButtonArea from '../ButtonArea'
import {
    changeFormBackgroundThunk,
    formBorderRadiusThunk,
    formPaddingThunk,
    formHeightThunk,
    formWidthThunk,
    formHeaderColorThunk,
    formFontThunk,
    formBorderTypeThunk,
    formBorderColorThunk,
    formBorderSizeThunk,
    formShadowRightThunk,
    formShadowBottomThunk,
    formShadowBlurThunk,
    formShadowColorThunk,
} from '../../store/styles'
import { useDispatch } from 'react-redux'
import './Sidebar.css'
import github from '../../images/download.png'


const Sidebar = () => {
    const thanks = 'Hey, thanks for using my APP! Love You <3'
    const dispatch = useDispatch();
    // Form Font Styling Variables
    const [formFont, setFormFont] = useState('')
    // open close input menus
    const [openFormHeader, setOpenFormHeader] = useState(false)
    const [openFormFont, setOpenFormFont] = useState(false)
    const [openTextInput, setOpenTextInput] = useState(false)
    const [openNumberInput, setOpenNumberInput] = useState(false)
    const [openEmailInput, setOpenEmailInput] = useState(false)
    const [openPasswordInput, setOpenPasswordInput] = useState(false)
    const [openButtonArea, setOpenButtonArea] = useState(false)
    const [openFormStylesArea, setOpenFormStylesArea] = useState(true)

    //form styles state variable
    const [formHeaderColor, setFormHeaderColor] = useState('')
    const [formBackgroundColor, setFormBackgroundColor] = useState('')
    const [formShadowColor, setFormShadowColorState] = useState('')
    const [formBorderColor, setFormBorderColorState] = useState('')

    //menu button array
    const menuButtonArray = [openFormHeader, openFormFont, openTextInput, openNumberInput, openEmailInput, openPasswordInput, openButtonArea, openFormStylesArea]

    const menuButtonFunc = (string) => {
        menuButtonArray.forEach(e => {
            if (string === 'header') {
                setOpenFormHeader(true)
            } else {
                setOpenFormHeader(false)
            } if (string === 'font') {
                setOpenFormFont(true)
            } else {
                setOpenFormFont(false)
            }
            if (string === 'text') {
                setOpenTextInput(true)
            } else {
                setOpenTextInput(false)
            }
            if (string === 'email') {
                setOpenEmailInput(true)
            } else {
                setOpenEmailInput(false)
            }
            if (string === 'password') {
                setOpenPasswordInput(true)
            } else {
                setOpenPasswordInput(false)
            } if (string === 'number') {
                setOpenNumberInput(true)
            }
            else {
                setOpenNumberInput(false)
            }
            if (string === 'buttons') {
                setOpenButtonArea(true)
            } else {
                setOpenButtonArea(false)
            }
            if (string === 'form') {
                setOpenFormStylesArea(true)
            } else {
                setOpenFormStylesArea(false)
            }
        })
    }
    // setting header text
    const setHeader = (e) => {
        const startFormHeader = document.getElementById('form-header')
        startFormHeader.innerText = e.target.value
    }
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
    const setHeaderColor = (e) => {
        setFormHeaderColor(e.target.value)
        dispatch(formHeaderColorThunk(e.target.value))
    }
    const setFormFont2 = (e) => {
        dispatch(formFontThunk(e.target.value))
        setFormFont(e.target.value)
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
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className='sidebar'>
                {/* form header change and style area */}
                <div>

                    <button
                        style={{

                            cursor: 'pointer',
                            fontFamily: 'Source Code Pro ',
                            width: '100%',
                            height: '40px',
                            borderRadius: '5px',
                            backgroundColor: 'rgb(168,254,255)',
                            opacity: '0.7',
                            border: '1px solid white',
                            textAlign: 'left'
                        }}
                        onClick={() => menuButtonFunc('header')}>Form Header</button>
                    {openFormHeader ?
                        <>
                            <h3>Type what you want to be your header</h3>
                            <input type="text" onChange={setHeader}></input>
                            <h3>Form Header Color</h3>
                            <input type='color'
                                value={formHeaderColor}
                                onChange={setHeaderColor}
                            />
                        </>
                        : ''
                    }
                </div>
                {/* form Font area */}
                <div>

                    <button
                        style={{
                            cursor: 'pointer',
                            fontFamily: 'Source Code Pro ',
                            width: '100%',
                            height: '40px',
                            borderRadius: '5px',
                            backgroundColor: 'rgb(168,254,255)',
                            opacity: '0.7',
                            border: '1px solid white',
                            textAlign: 'left'
                        }}
                        onClick={() => menuButtonFunc('font')}>Form Font</button>
                </div>
                <div>
                    {openFormFont ?
                        <>
                            <label htmlFor="font-select">Select Font Below</label>
                            <select name='font-select'

                                onChange={setFormFont2}
                            >

                                <option value='Source Code Pro' style={{ fontFamily: ' Source Code Pro , monospace ' }}>Source Code Pro</option>
                                <option value='Archivo' style={{ fontFamily: 'Archivo monospace' }}>Archivo</option>
                                <option value='Bree Serif' style={{ fontFamily: 'Bree Serif, monospace' }}>Bree Serif</option>
                                <option value='Cormorant Garamond' style={{ fontFamily: 'Cormorant Garamond, monospace' }}>Cormorant Garamond</option>
                                <option value='Jost' style={{ fontFamily: 'Jost, monospace' }}>Jost</option>
                                <option value='Lobster' style={{ fontFamily: 'Lobster, monospace' }}>Lobster</option>
                                <option value='Permanent Marker' style={{ fontFamily: 'Permanent Marker, monospace' }}>Permanent Marker</option>
                                <option value='Questrial' style={{ fontFamily: 'Questrial, monospace' }}>Questrial</option>
                                <option value='Rokkitt' style={{ fontFamily: 'Rokkitt, monospace' }}>Rokkitt</option>
                                <option value='Sacramento ' style={{ fontFamily: 'Sacramento, monospace' }}>Sacramento </option>


                            </select>
                            <h3>Example Text</h3>
                            <p style={{ fontFamily: formFont }}>{thanks} </p>
                        </>
                        : ''
                    }
                </div>

                {/* Text input styling and placeholder menu area  */}
                <div>

                    {/* open close menu button */}
                    <button
                        style={{
                            cursor: 'pointer',
                            fontFamily: 'Source Code Pro ',
                            width: '100%',
                            height: '40px',
                            borderRadius: '5px',
                            backgroundColor: 'rgb(168,254,255)',
                            opacity: '0.7',
                            border: '1px solid white',
                            textAlign: 'left'
                        }}
                        onClick={() => menuButtonFunc('text')}>Text Input</button>
                </div>
                <div
                    style={{
                        height: openTextInput ? '100%' : '',
                        overflow: openTextInput ? 'scroll' : '',


                    }}
                >
                    {openTextInput ?
                        <TextInput />
                        : ''
                    }
                </div>

                {/* Email Input styling nd placeholder area */}
                <div>

                    <button
                        style={{
                            cursor: 'pointer',
                            fontFamily: 'Source Code Pro ',
                            width: '100%',
                            height: '40px',
                            borderRadius: '5px',
                            backgroundColor: 'rgb(168,254,255)',
                            opacity: '0.7',
                            border: '1px solid white',
                            textAlign: 'left'
                        }}
                        onClick={() => menuButtonFunc('email')}>Email Input</button>
                </div>
                <div
                    style={{
                        height: openEmailInput ? '100%' : '',
                        overflow: openEmailInput ? 'scroll' : '',

                    }} >
                    {openEmailInput ?
                        <EmailInput />
                        : ''
                    }

                </div>
                {/* password input area */}
                <div>

                    <button
                        style={{
                            cursor: 'pointer',
                            fontFamily: 'Source Code Pro ',
                            width: '100%',
                            height: '40px',
                            borderRadius: '5px',
                            backgroundColor: 'rgb(168,254,255)',
                            opacity: '0.7',
                            border: '1px solid white',
                            textAlign: 'left'
                        }}
                        onClick={() => menuButtonFunc('password')}>Password Input</button>
                </div>
                <div
                    style={{
                        height: openPasswordInput ? '100%' : '',
                        overflow: openPasswordInput ? 'scroll' : '',

                    }} >

                    {openPasswordInput ?
                       <PasswordInput />
                        : ''
                    }
                </div>

                {/* number input menu area */}
                <div>

                    <button
                        style={{
                            cursor: 'pointer',
                            fontFamily: 'Source Code Pro ',
                            width: '100%',
                            height: '40px',
                            borderRadius: '5px',
                            backgroundColor: 'rgb(168,254,255)',
                            opacity: '0.7',
                            border: '1px solid white',
                            textAlign: 'left'
                        }}
                        onClick={() => menuButtonFunc('number')}>Number input</button>
                </div>
                <div
                    style={{
                        height: openNumberInput ? '100%' : '',
                        overflow: openNumberInput ? 'scroll' : '',

                    }} >

                    {openNumberInput ?
                        <NumberInput />
                        : ''
                    }
                </div>

                {/* button text change and style picking area */}
                <div>

                    <button
                        style={{
                            cursor: 'pointer',
                            fontFamily: 'Source Code Pro ',
                            width: '100%',
                            height: '40px',
                            borderRadius: '5px',
                            backgroundColor: 'rgb(168,254,255)',
                            opacity: '0.7',
                            border: '1px solid white',
                            textAlign: 'left'
                        }}
                        onClick={() => menuButtonFunc('buttons')}>Buttons</button>
                </div>
                <div
                    style={{
                        height: openButtonArea ? '100%' : '',
                        overflow: openButtonArea ? 'scroll' : '',

                    }}
                >


                    {openButtonArea ?

                        <ButtonArea />
                        : ''
                    }

                </div>
                {/* form Styles area */}
                <div>

                    <button
                        onClick={() => menuButtonFunc('form')}
                        style={{
                            cursor: 'pointer',
                            fontFamily: 'Source Code Pro ',
                            width: '100%',
                            height: '40px',
                            borderRadius: '5px',
                            backgroundColor: 'rgb(168,254,255)',
                            opacity: '0.7',
                            border: '1px solid white',
                            textAlign: 'left'
                        }}
                    >
                        Form Styles
                    </button>
                </div>
                <div
                    style={{
                        height: openFormStylesArea ? '100%' : '',
                        overflow: openFormStylesArea ? 'scroll' : ''
                    }}
                >

                    {/* form Background color picker */}
                    {openFormStylesArea ?
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
                        : ''}
                </div>
            </div >

            <div style={{ width: '200px', height: '10vh', marginTop: '10px', display: 'flex', flexDirection: 'row' }} >
                <img style={{ height: '10vh', width: '100px', borderRadius: '20px' }} src={github} alt=''></img>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ marginTop: '10px' }}>Baylen Doss</div>
                    <a style={{ marginTop: '10px' }} href="https://github.com/baylend123">GitHub</a>
                    <a style={{ marginTop: '10px' }} href='https://www.linkedin.com/in/baylen-doss-6899541bb/'>LinkdIn</a>
                </div>
            </div>
        </div >

    )
}
export default Sidebar
