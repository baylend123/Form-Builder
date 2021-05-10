import React from 'react';
import { useState, useEffect } from 'react'

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
    formBorderSizeThunk
} from '../../store/styles'
import { useDispatch } from 'react-redux'
import './Sidebar.css'
const Sidebar = () => {
    const thanks = 'Hey, thanks for using my APP! Love You <3'
    const dispatch = useDispatch();


    // input placeholder state variables
    const [textPlaceholder, setTextPlaceholder] = useState('')
    const [emailPlaceholder, setEmailPlaceholder] = useState('')
    const [passwordPlaceholder, setPasswordPlaceholder] = useState('')


    // number label state variables
    const [numberInputLabel, setNumberInputLabel] = useState('')


    // input styling state variables
    const [textInputRadius, setTextInputRadius] = useState('')
    const [textInputWidth, setTextInputWidth] = useState('100')
    const [textInputcolor, setTextInputColor] = useState('')
    const [textInputBorder, setTextInputBorder] = useState('')
    const [textInputBorderSize, setTextInputBorderSize] = useState('2')
    const [textInputBorderColor, setTextInputBorderColor] = useState('black')
    const [textInputBoxShadowBottom, setInputBoxShadowBottom] = useState('2')
    const [textInputBoxShadowRight, setInputBoxShadowRight] = useState('2')
    const [textInputBoxShadowBlur, setInputBoxShadowBlur] = useState('2')
    const [textInputBoxShadowColor, steInputBoxShadowColor] = useState('red')

    // Form Font Styling Variables
    const [formFont, setFormFont] = useState('')


    //button styling state variables
    const [buttonBorderRadius, setButtonBorderRadius] = useState('')
    const [buttonBorderType, setButtonBorderType] = useState('')
    const [buttonBorderSize, setButtonBorderSize] = useState('2')
    const [buttonBorderColor, setButtonBorderColor] = useState('')
    const [buttonWidth, setButtonWidth] = useState('')
    const [buttonHeight, setButtonHeight] = useState('')
    const [buttonColor, setButtonColor] = useState('')
    const [buttonShadowRight, setButtonShadowRight] = useState('2')
    const [buttonShadowBottom, setButtonShadowBottom] = useState('2')
    const [buttonShadowBlur, setButtonShadowBlur] = useState('2')
    const [buttonShadowColor, setButtonShadowColor] = useState('black')


    // open close input menus
    const [openFormHeader, setOpenFormHeader] = useState(false)
    const [openFormFont, setOpenFormFont] = useState(false)
    const [openTextInput, setOpenTextInput] = useState(false)
    const [openNumberInput, setOpenNumberInput] = useState(false)
    const [openEmailInput, setOpenEmailInput] = useState(false)
    const [openPasswordInput, setOpenPasswordInput] = useState(false)
    const [openButtonArea, setOpenButtonArea] = useState(false)
    const [openFormStylesArea, setOpenFormStylesArea] = useState(false)



    // drag start function
    const dragStart = e => {
        const target = e.target
        e.dataTransfer.setData('elementId', target.id)
    }
    // setting header text
    const setHeader = (e) => {
        const startFormHeader = document.getElementById('form-header')
        startFormHeader.innerText = e.target.value
    }
    // setting submit button text
    const setSubmitButtonText = (e) => {
        const startFormHeader = document.getElementById('submit')
        startFormHeader.innerText = e.target.value
    }
    // setting normal button text
    const setNormalButtonText = (e) => {
        const startFormHeader = document.getElementById('normal-button')
        startFormHeader.innerText = e.target.value
    }
    // setting form styles  into redux store for use in form builder component
    const setFormColor = (e) => {
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
        dispatch(formBorderColorThunk(e.target.value))
    }



    return (
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
                        border: '1px solid white',
                        textAlign: 'left'
                    }}
                    onClick={() => setOpenFormHeader(!openFormHeader)}>Form Header</button>
                {openFormHeader ?
                    <>
                        <input type="text" onChange={setHeader}></input>
                        <h3>Form Header Color</h3>
                        <input type='color'
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
                        border: '1px solid white',
                        textAlign: 'left'
                    }}
                    onClick={() => setOpenFormFont(!openFormFont)}>Form Font</button>
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
            <div >

                {/* open close menu button */}
                <button
                    style={{
                        cursor: 'pointer',
                        fontFamily: 'Source Code Pro ',
                        width: '100%',
                        height: '40px',
                        borderRadius: '5px',
                        backgroundColor: 'rgb(168,254,255)',
                        border: '1px solid white',
                        textAlign: 'left'
                    }}
                    onClick={() => setOpenTextInput(!openTextInput)}>Text Input</button>
                {openTextInput ?
                    <>
                        <div >

                            {/* placeholder edit */}
                            <h3>Placeholder for the input:</h3>
                            <input value={textPlaceholder} type='text' onChange={(e) => setTextPlaceholder(e.target.value)} />
                        </div>


                        {/* draggable div */}
                        <div
                            onDragStart={dragStart}
                            draggable='true'
                            id='elementId'
                        >

                            <input type='text'
                                id='input-text'
                                placeholder={textPlaceholder}
                                style={{
                                    fontFamily: `${formFont}`,
                                    marginTop: '20px',
                                    borderRadius: textInputRadius,
                                    backgroundColor: textInputcolor,
                                    border: `${textInputBorderSize}px ${textInputBorder} ${textInputBorderColor}`,
                                    width: `${textInputWidth}px`,
                                    boxShadow: `${textInputBoxShadowRight}px ${textInputBoxShadowBottom}px ${textInputBoxShadowBlur}px ${textInputBoxShadowColor}`
                                }}
                            ></input>
                        </div>


                        {/* styling area */}
                        <h3>Text Input Styles</h3>


                        {/* input width */}
                        <div style={{ marginTop: '10px' }}>
                            <label htmlFor='textInputWidth' style={{ marginTop: '10px' }}>Text Input Width</label>
                            <input type='range' name='textInputWidth'
                                min={50}
                                max={700}
                                onChange={(e) => setTextInputWidth(e.target.value.toString())}
                            />

                        </div>


                        {/* border radius edit slider */}
                        <label htmlFor='textradius'>Text Input Radius</label>
                        <input type='range'
                            min={0}
                            max={30}
                            onChange={(e) => setTextInputRadius(e.target.value.toString() + 'px')}
                        />


                        {/* background color picker */}
                        <label htmlFor='textinputcolor'>Text Input Background Color</label>
                        <input type='color'
                            name='textinputcolor'
                            onChange={(e) => setTextInputColor(e.target.value)}
                        />


                        {/* Border style picker area */}
                        <div style={{ marginTop: '10px' }}>
                            <label htmlFor='textborderstyle'>Text Border Style</label>
                            <div style={{ border: '3px solid black', marginTop: '10px' }}>
                                none
                                <input
                                    name='textborderstyle'
                                    type='radio'
                                    onClick={() => setTextInputBorder('')}

                                />
                            </div>
                            <div style={{ border: '3px solid black', marginTop: '10px' }}>
                                <input
                                    name='textborderstyle'
                                    type='radio'
                                    onClick={() => setTextInputBorder('solid')}

                                />
                            </div>
                            <div style={{ border: '3px dotted black', marginTop: '10px' }}>
                                <input
                                    name='textborderstyle'
                                    type='radio'
                                    onClick={() => setTextInputBorder('dotted')}

                                />
                            </div>
                            <div style={{ border: '3px dashed black', marginTop: '10px' }}>
                                <input
                                    name='textborderstyle'
                                    type='radio'
                                    onClick={() => setTextInputBorder('dashed')}

                                />
                            </div>

                        </div>


                        {/* border size picker */}
                        <div style={{ marginTop: '10px' }}>
                            <label htmlFor='textInputBorderSize'>Text Input Border Size</label>
                            <input type='range'
                                min={0}
                                max={10}
                                onChange={(e) => setTextInputBorderSize(e.target.value.toString())}
                            />
                        </div>


                        {/* border color picker */}
                        <div style={{ marginTop: '10px' }}>
                            <label htmlFor='textInputBorderColor'>Text Input Border Color</label>
                            <input type='color'
                                onChange={(e) => setTextInputBorderColor(e.target.value)}
                            />
                        </div>


                        {/* box shadow length right  */}
                        <div style={{ marginTop: '10px' }}>
                            <label htmlFor='textInputBoxShadowRight' >Box Shadow length Right </label>
                            <input name='textInputBoxShadowRight' type='range'
                                min={0}
                                max={25}
                                onChange={(e) => setInputBoxShadowRight(e.target.value.toString())}
                            />

                            {/* box shadow length bottom */}
                            <label htmlFor='textInputBoxShadowBottom' >Box Shadow Length Bottom </label>
                            <input name='textInputBoxShadowBottom' type='range'
                                min={0}
                                max={25}
                                onChange={(e) => setInputBoxShadowBottom(e.target.value.toString())}
                            />


                            {/* box shadow blur */}
                            <label htmlFor='textInputBoxShadowBlur' > Box Shadow blur </label>
                            <input name='textInputBoxShadowBlur' type='range'
                                min={0}
                                max={25}
                                onChange={(e) => setInputBoxShadowBlur(e.target.value.toString())}
                            />
                            {/* box shadow blur */}
                            <label htmlFor='textInputBoxShadowColor' >Box Shadow color </label>
                            <input type='color'
                                onChange={(e) => steInputBoxShadowColor(e.target.value)}
                            />
                        </div>

                    </>
                    : ''
                }
            </div>

            {/* Email Input styling nd placeholder area */}
            <div >
                <button
                    style={{
                        cursor: 'pointer',
                        fontFamily: 'Source Code Pro ',
                        width: '100%',
                        height: '40px',
                        borderRadius: '5px',
                        backgroundColor: 'rgb(168,254,255)',
                        border: '1px solid white',
                        textAlign: 'left'
                    }}
                    onClick={() => setOpenEmailInput(!openEmailInput)}>Email Input</button>
                {openEmailInput ?
                    <>
                        <div >
                            {/* placeholder edit */}
                            <h3>Placeholder for the input:</h3>
                            <input value={emailPlaceholder} type='text' onChange={(e) => setEmailPlaceholder(e.target.value)} />
                        </div>


                        {/* draggable div */}
                        <div
                            onDragStart={dragStart}
                            draggable='true'
                            id='elementId'
                        >

                            <input type='email'
                                style={{
                                    fontFamily: `${formFont}`,
                                    marginTop: '20px',
                                    borderRadius: textInputRadius,
                                    backgroundColor: textInputcolor,
                                    border: `${textInputBorderSize}px ${textInputBorder} ${textInputBorderColor}`,
                                    width: `${textInputWidth}px`,
                                    boxShadow: `${textInputBoxShadowRight}px ${textInputBoxShadowBottom}px ${textInputBoxShadowBlur}px ${textInputBoxShadowColor}`
                                }}

                                placeholder={emailPlaceholder}

                            ></input>
                        </div>


                        {/* styling for mail input */}
                        <h3>Email Input Styles</h3>
                        <div style={{ marginTop: '10px' }}>
                            <label htmlFor='textInputWidth' style={{ marginTop: '10px' }}>Email Input Width</label>
                            <input type='range' name='textInputWidth'
                                min={50}
                                max={700}
                                onChange={(e) => setTextInputWidth(e.target.value.toString())}
                            />


                            {/* border radius slider */}
                        </div>
                        <label htmlFor='textradius'>Email Input Radius</label>
                        <input type='range'
                            min={0}
                            max={30}

                            onChange={(e) => setTextInputRadius(e.target.value.toString() + 'px')}
                        />


                        {/* input background color picker */}
                        <label htmlFor='textinputcolor'>Email Input Background Color</label>
                        <input type='color'
                            name='textinputcolor'
                            onChange={(e) => setTextInputColor(e.target.value)}
                        />


                        {/* border style picker */}
                        <div style={{ marginTop: '10px' }}>
                            <label htmlFor='textborderstyle'>Email Border Style</label>
                            <div style={{ border: '3px solid black', marginTop: '10px' }}>
                                <input
                                    name='textborderstyle'
                                    type='radio'
                                    onClick={() => setTextInputBorder('solid')}

                                />
                            </div>
                            <div style={{ border: '3px dotted black', marginTop: '10px' }}>
                                <input
                                    name='textborderstyle'
                                    type='radio'
                                    onClick={() => setTextInputBorder('dotted')}

                                />
                            </div>
                            <div style={{ border: '3px dashed black', marginTop: '10px' }}>
                                <input
                                    name='textborderstyle'
                                    type='radio'
                                    onClick={() => setTextInputBorder('dashed')}

                                />
                            </div>

                        </div>


                        {/* border size picker */}
                        <div style={{ marginTop: '10px' }}>
                            <label htmlFor='textInputBorderSize'>Email Input Border Size</label>
                            <input type='range'
                                min={0}
                                max={10}
                                onChange={(e) => setTextInputBorderSize(e.target.value.toString())}
                            />
                        </div>


                        {/* border color */}
                        <div style={{ marginTop: '10px' }}>
                            <label htmlFor='textInputBorderColor'>Email Input Border Color</label>
                            <input type='color'
                                onChange={(e) => setTextInputBorderColor(e.target.value)}
                            />
                        </div>


                        {/* border shadow length right */}
                        <div style={{ marginTop: '10px' }}>
                            <label htmlFor='textInputBoxShadowRight' >Box Shadow length Right </label>
                            <input name='textInputBoxShadowRight' type='range'
                                min={0}
                                max={25}
                                onChange={(e) => setInputBoxShadowRight(e.target.value.toString())}
                            />


                            {/* border shadow length bottom */}
                            <label htmlFor='textInputBoxShadowBottom' >Box Shadow Length Bottom </label>
                            <input name='textInputBoxShadowBottom' type='range'
                                min={0}
                                max={25}
                                onChange={(e) => setInputBoxShadowBottom(e.target.value.toString())}
                            />


                            {/* border shadow blur */}
                            <label htmlFor='textInputBoxShadowBlur' > Box Shadow blur </label>
                            <input name='textInputBoxShadowBlur' type='range'
                                min={0}
                                max={25}
                                onChange={(e) => setInputBoxShadowBlur(e.target.value.toString())}
                            />


                            {/* blur color */}
                            <label htmlFor='textInputBoxShadowColor' >Box Shadow color </label>
                            <input type='color'
                                onChange={(e) => steInputBoxShadowColor(e.target.value)}
                            />
                        </div>
                    </>
                    : ''
                }

            </div>
            {/* password input area */}
            <div >

                <button
                    style={{
                        cursor: 'pointer',
                        fontFamily: 'Source Code Pro ',
                        width: '100%',
                        height: '40px',
                        borderRadius: '5px',
                        backgroundColor: 'rgb(168,254,255)',
                        border: '1px solid white',
                        textAlign: 'left'
                    }}
                    onClick={() => setOpenPasswordInput(!openPasswordInput)}>Password Input</button>
                {openPasswordInput ?
                    <>
                        <div>
                            {/* edit the placeholder for the password input */}
                            <h3>Placeholder for the input:</h3>
                            <input value={passwordPlaceholder} type='text' onChange={(e) => setPasswordPlaceholder(e.target.value)} />
                        </div>
                        {/* draggable div to the form */}
                        <div
                            draggable='true'
                            onDragStart={dragStart}
                            id='elementId'
                        >

                            <input type='text'

                                style={{
                                    fontFamily: `${formFont}`,
                                    webkitTextSecurity: 'disc',
                                    marginTop: '20px',
                                    borderRadius: textInputRadius,
                                    backgroundColor: textInputcolor,
                                    border: `${textInputBorderSize}px ${textInputBorder} ${textInputBorderColor}`,
                                    width: `${textInputWidth}px`,
                                    boxShadow: `${textInputBoxShadowRight}px ${textInputBoxShadowBottom}px ${textInputBoxShadowBlur}px ${textInputBoxShadowColor}`
                                }}
                                placeholder={passwordPlaceholder}
                            ></input>

                            {/* password input style area */}
                        </div>
                        <h3>Password Input Styles</h3>

                        {/* input width */}
                        <div style={{ marginTop: '10px' }}>
                            <label htmlFor='textInputWidth' style={{ marginTop: '10px' }}>Password Input Width</label>
                            <input type='range' name='textInputWidth'
                                min={50}
                                max={700}
                                onChange={(e) => setTextInputWidth(e.target.value.toString())}
                            />

                        </div>

                        {/* border radius picker */}
                        <label htmlFor='textradius'>Password Input Border Radius</label>
                        <input type='range'
                            min={0}
                            max={30}

                            onChange={(e) => setTextInputRadius(e.target.value.toString() + 'px')}
                        />

                        {/* input background color picker */}
                        <label htmlFor='textinputcolor'>Password Input Background Color</label>
                        <input type='color'
                            name='textinputcolor'
                            onChange={(e) => setTextInputColor(e.target.value)}
                        />

                        {/* border style picker */}
                        <div style={{ marginTop: '10px' }}>
                            <label htmlFor='textborderstyle'>Password Border Style</label>
                            <div style={{ border: '3px solid black', marginTop: '10px' }}>
                                <input
                                    name='textborderstyle'
                                    type='radio'
                                    onClick={() => setTextInputBorder('solid')}

                                />
                            </div>
                            <div style={{ border: '3px dotted black', marginTop: '10px' }}>
                                <input
                                    name='textborderstyle'
                                    type='radio'
                                    onClick={() => setTextInputBorder('dotted')}

                                />
                            </div>
                            <div style={{ border: '3px dashed black', marginTop: '10px' }}>
                                <input
                                    name='textborderstyle'
                                    type='radio'
                                    onClick={() => setTextInputBorder('dashed')}

                                />
                            </div>

                        </div>

                        {/* border style picker */}
                        <div style={{ marginTop: '10px' }}>
                            <label htmlFor='textInputBorderSize'>Password Input Border Size</label>
                            <input type='range'
                                min={0}
                                max={10}
                                onChange={(e) => setTextInputBorderSize(e.target.value.toString())}
                            />
                        </div>

                        {/* border color picker */}
                        <div style={{ marginTop: '10px' }}>
                            <label htmlFor='textInputBorderColor'>Password Input Border Color</label>
                            <input type='color'
                                onChange={(e) => setTextInputBorderColor(e.target.value)}
                            />
                        </div>

                        {/* box shadow length right */}
                        <div style={{ marginTop: '10px' }}>
                            <label htmlFor='textInputBoxShadowRight' >Box Shadow length Right </label>
                            <input name='textInputBoxShadowRight' type='range'
                                min={0}
                                max={25}
                                onChange={(e) => setInputBoxShadowRight(e.target.value.toString())}
                            />

                            {/* box shadow length bottom */}
                            <label htmlFor='textInputBoxShadowBottom' >Box Shadow Length Bottom </label>
                            <input name='textInputBoxShadowBottom' type='range'
                                min={0}
                                max={25}
                                onChange={(e) => setInputBoxShadowBottom(e.target.value.toString())}
                            />

                            {/* box shadow blur */}
                            <label htmlFor='textInputBoxShadowBlur' > Box Shadow blur </label>
                            <input name='textInputBoxShadowBlur' type='range'
                                min={0}
                                max={25}
                                onChange={(e) => setInputBoxShadowBlur(e.target.value.toString())}
                            />

                            {/* box shadow color */}
                            <label htmlFor='textInputBoxShadowColor' >Box Shadow color </label>
                            <input type='color'
                                onChange={(e) => steInputBoxShadowColor(e.target.value)}
                            />
                        </div>

                    </>
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
                        border: '1px solid white',
                        textAlign: 'left'
                    }}
                    onClick={() => setOpenNumberInput(!openNumberInput)}>Number input</button>
                {openNumberInput ?
                    <>
                        <div >
                            {/* label creation area */}
                            <h3>Label for the number input</h3>
                            <input value={numberInputLabel} type='text' onChange={(e) => setNumberInputLabel(e.target.value)} />
                        </div>

                        {/* draggable div to form */}
                        <div className='number-input-div'
                            onDragStart={dragStart}
                            draggable='true'
                            id='elementId'
                            style={{ marginTop: '20px', textAlign: 'center' }}
                        >
                            <div >
                                <label htmlFor='numberInput'>{numberInputLabel}</label>
                            </div>
                            <input type='number'
                                name="numberInput"
                                style={{
                                    fontFamily: `${formFont}`,
                                    borderRadius: textInputRadius,
                                    backgroundColor: textInputcolor,
                                    border: `${textInputBorderSize}px ${textInputBorder} ${textInputBorderColor}`,
                                    width: `${textInputWidth}px`,
                                    boxShadow: `${textInputBoxShadowRight}px ${textInputBoxShadowBottom}px ${textInputBoxShadowBlur}px ${textInputBoxShadowColor}`
                                }}

                            ></input>
                        </div>

                        {/* number input styling */}
                        <h3>Number Input Styles</h3>

                        {/* input width */}
                        <div style={{ marginTop: '10px' }}>
                            <label htmlFor='textInputWidth' style={{ marginTop: '10px' }}>Number Input Width</label>
                            <input type='range' name='textInputWidth'
                                min={50}
                                max={700}
                                onChange={(e) => setTextInputWidth(e.target.value.toString())}
                            />
                        </div>

                        {/* border radius edit */}
                        <label htmlFor='textradius'>Number Input Border Radius</label>
                        <input type='range'
                            min={0}
                            max={30}

                            onChange={(e) => setTextInputRadius(e.target.value.toString() + 'px')}
                        />

                        {/* background color chooser */}
                        <label htmlFor='textinputcolor'>Number Input Background Color</label>
                        <input type='color'
                            name='textinputcolor'
                            onChange={(e) => setTextInputColor(e.target.value)}
                        />

                        {/* border style area */}
                        <div style={{ marginTop: '10px' }}>
                            <label htmlFor='textborderstyle'>Number Border Style</label>
                            <div style={{ border: '3px solid black', marginTop: '10px' }}>
                                <input
                                    name='textborderstyle'
                                    type='radio'
                                    onClick={() => setTextInputBorder('solid')}

                                />
                            </div>
                            <div style={{ border: '3px dotted black', marginTop: '10px' }}>
                                <input
                                    name='textborderstyle'
                                    type='radio'
                                    onClick={() => setTextInputBorder('dotted')}

                                />
                            </div>
                            <div style={{ border: '3px dashed black', marginTop: '10px' }}>
                                <input
                                    name='textborderstyle'
                                    type='radio'
                                    onClick={() => setTextInputBorder('dashed')}

                                />
                            </div>

                        </div>

                        {/* border size chooser */}
                        <div style={{ marginTop: '10px' }}>
                            <label htmlFor='textInputBorderSize'>Number Input Border Size</label>
                            <input type='range'
                                min={0}
                                max={10}
                                onChange={(e) => setTextInputBorderSize(e.target.value.toString())}
                            />
                        </div>

                        {/* border color picker */}
                        <div style={{ marginTop: '10px' }}>
                            <label htmlFor='textInputBorderColor'>Number Input Border Color</label>
                            <input type='color'
                                onChange={(e) => setTextInputBorderColor(e.target.value)}
                            />
                        </div>

                        {/* box shadow length right picker */}
                        <div style={{ marginTop: '10px' }}>
                            <label htmlFor='textInputBoxShadowRight' >Box Shadow length Right </label>
                            <input name='textInputBoxShadowRight' type='range'
                                min={0}
                                max={25}
                                onChange={(e) => setInputBoxShadowRight(e.target.value.toString())}
                            />

                            {/* box shadow length bottom picker */}
                            <label htmlFor='textInputBoxShadowBottom' >Box Shadow Length Bottom </label>
                            <input name='textInputBoxShadowBottom' type='range'
                                min={0}
                                max={25}
                                onChange={(e) => setInputBoxShadowBottom(e.target.value.toString())}
                            />


                            {/* Box shadow blur picker */}
                            <label htmlFor='textInputBoxShadowBlur' > Box Shadow blur </label>
                            <input name='textInputBoxShadowBlur' type='range'
                                min={0}
                                max={25}
                                onChange={(e) => setInputBoxShadowBlur(e.target.value.toString())}
                            />

                            {/* box shadow color picker */}
                            <label htmlFor='textInputBoxShadowColor' >Box Shadow color </label>
                            <input type='color'
                                onChange={(e) => steInputBoxShadowColor(e.target.value)}
                            />
                        </div>
                    </>
                    : ''
                }
            </div>

            {/* button text change and style picking area */}
            <div>
                <div>

                    <button
                        style={{
                            cursor: 'pointer',
                            fontFamily: 'Source Code Pro ',
                            width: '100%',
                            height: '40px',
                            borderRadius: '5px',
                            backgroundColor: 'rgb(168,254,255)',
                            border: '1px solid white',
                            textAlign: 'left'
                        }}
                        onClick={() => setOpenButtonArea(!openButtonArea)}>Buttons</button>
                </div>
                <div>

                    {openButtonArea ?

                        <>
                            <h3>Submit Button :</h3>
                            <input style={{ marginRight: '10px' }} type="text" onChange={setSubmitButtonText}></input>
                            <button style={{
                                marginTop: '10px',
                                fontFamily: `${formFont}`,
                                borderRadius: `${buttonBorderRadius}px`,
                                border: `${buttonBorderSize}px ${buttonBorderType} ${buttonBorderColor}`,
                                backgroundColor: buttonColor,
                                height: `${buttonHeight}px`,
                                width: `${buttonWidth}px`,
                                boxShadow: `${buttonShadowRight}px ${buttonShadowBottom}px ${buttonShadowBlur}px ${buttonShadowColor}`
                            }}
                                type='submit'
                                id='submit'
                                draggable='true'
                                onDragStart={dragStart}
                            >
                                Submit
                             </button>
                            <h3>Normal Button :</h3>
                            <input style={{ marginRight: '10px' }} type="text" onChange={setNormalButtonText}></input>
                            <button style={{
                                marginTop: '10px',
                                fontFamily: `${formFont}`,
                                borderRadius: `${buttonBorderRadius}px`,
                                border: `${buttonBorderSize}px ${buttonBorderType} ${buttonBorderColor}`,
                                backgroundColor: buttonColor,
                                height: `${buttonHeight}px`,
                                width: `${buttonWidth}px`,
                                boxShadow: `${buttonShadowRight}px ${buttonShadowBottom}px ${buttonShadowBlur}px ${buttonShadowColor}`
                            }}

                                id='normal-button' draggable='true' onDragStart={dragStart}>Click me
                                </button>


                            {/* button styles area */}
                            <div>
                                <h3 style={{ marginTop: '10px' }}>Button Styles :</h3>

                            </div>
                            <div>
                                <label>Button Background Color :</label>
                            </div>
                            <div>
                                <input type='color'
                                    onChange={(e) => setButtonColor(e.target.value)}
                                >

                                </input>
                            </div>
                            <div>
                                <label htmlFor='button-border-radius'>Button Border Radius</label>
                            </div>
                            <div>
                                <input type='range'
                                    onChange={(e) => setButtonBorderRadius(e.target.value.toString())}
                                    min={0}
                                    max={30}
                                ></input>
                            </div>
                            <div>
                                <label >Button Width</label>
                            </div>
                            <div>
                                <input type='range'
                                    onChange={(e) => setButtonWidth(e.target.value.toString())}
                                    min={50}
                                    max={300}
                                ></input>

                            </div>
                            <div>
                                <label >Button height</label>
                            </div>
                            <div>
                                <input type='range'
                                    onChange={(e) => setButtonHeight(e.target.value.toString())}
                                    min={10}
                                    max={100}
                                ></input>
                            </div>
                            <div>
                                <label>Button Border Type</label>
                            </div>
                            <div>


                                <div style={{ margin: '10px' }}>
                                    None
                                    <input type='radio'
                                        onClick={() => setButtonBorderType('')}
                                    >

                                    </input>

                                </div>

                                <div style={{ border: '3px solid black', marginTop: '10px' }}>
                                    <input
                                        name='textborderstyle'
                                        type='radio'
                                        onClick={() => setButtonBorderType('solid')}

                                    />
                                </div>
                                <div style={{ border: '3px dotted black', marginTop: '10px' }}>
                                    <input
                                        name='textborderstyle'
                                        type='radio'
                                        onClick={() => setButtonBorderType('dotted')}

                                    />
                                </div>
                                <div style={{ border: '3px dashed black', marginTop: '10px' }}>
                                    <input
                                        name='textborderstyle'
                                        type='radio'
                                        onClick={() => setButtonBorderType('dashed')}

                                    />
                                </div>
                            </div>
                            <div>
                                <label>Button Border Size</label>
                            </div>
                            <div>
                                <input type='range'
                                    min={0}
                                    max={10}
                                    onChange={(e) => setButtonBorderSize(e.target.value.toString())}
                                >

                                </input>
                            </div>
                            <div>
                                <label>Button Border Color</label>
                            </div>
                            <div>
                                <input type='color'
                                    onChange={(e) => setButtonBorderColor(e.target.value)}
                                >
                                </input>
                            </div>
                            <div>
                                <label>Button Shadow Options</label>
                            </div>

                            <div style={{ marginTop: '10px' }}>
                                <div>
                                    <label htmlFor='textInputBoxShadowRight' >Box Shadow length Right </label>
                                </div>
                                <div>

                                    <input name='textInputBoxShadowRight' type='range'
                                        min={0}
                                        max={25}
                                        onChange={(e) => setButtonShadowRight(e.target.value.toString())}
                                    />
                                </div>

                                {/* box shadow length bottom picker */}
                                <div>

                                    <label htmlFor='textInputBoxShadowBottom' >Box Shadow Length Bottom </label>
                                </div>
                                <div>

                                    <input name='textInputBoxShadowBottom' type='range'
                                        min={0}
                                        max={25}
                                        onChange={(e) => setButtonShadowBottom(e.target.value.toString())}
                                    />
                                </div>


                                {/* Box shadow blur picker */}
                                <div>

                                    <label htmlFor='textInputBoxShadowBlur' > Box Shadow blur </label>
                                </div>
                                <div>

                                    <input name='textInputBoxShadowBlur' type='range'
                                        min={0}
                                        max={25}
                                        onChange={(e) => setButtonShadowBlur(e.target.value.toString())}
                                    />
                                </div>

                                {/* box shadow color picker */}
                                <div>

                                    <label htmlFor='textInputBoxShadowColor' >Box Shadow color </label>
                                </div>
                                <div>

                                    <input type='color'
                                        onChange={(e) => setButtonShadowColor(e.target.value)}
                                    />
                                </div>
                            </div>

                        </>
                        : ''
                    }
                </div>
            </div>
            {/* form Styles area */}
            <div>
                <button
                    onClick={() => setOpenFormStylesArea(!openFormStylesArea)}
                    style={{
                        cursor: 'pointer',
                        fontFamily: 'Source Code Pro ',
                        width: '100%',
                        height: '40px',
                        borderRadius: '5px',
                        backgroundColor: 'rgb(168,254,255)',
                        border: '1px solid white',
                        textAlign: 'left'
                    }}
                >
                    Form Styles
                </button>

                {/* form Background color picker */}
                {openFormStylesArea ?
                    <>
                        <h3>Form background color</h3>
                        <input type="color"
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
                                onChange={setFormBorderColor}
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

    )
}
export default Sidebar
