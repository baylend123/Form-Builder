import React from 'react';
import { useState, useEffect } from 'react'
import { useDrag } from 'react-dnd'
import { changeFormBackgroundThunk, formBorderRadiusThunk, formPaddingThunk } from '../../store/styles'
import { useDispatch } from 'react-redux'
import './Sidebar.css'
const Sidebar = () => {
    const dispatch = useDispatch();
    const [textPlaceholder, setTextPlaceholder] = useState('')
    const [emailPlaceholder, setEmailPlaceholder] = useState('')
    const [passwordPlaceholder, setPasswordPlaceholder] = useState('')
    const [numberInputLabel, setNumberInputLabel] = useState('')
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
    const [openFormHeader, setOpenFormHeader] = useState(false)
    const [openTextInput, setOpenTextInput] = useState(false)
    const [openNumberInput, setOpenNumberInput] = useState(false)
    const [openEmailInput, setOpenEmailInput] = useState(false)
    const [openPasswordInput, setOpenPasswordInput] = useState(false)


    const dragStart = e => {
        const target = e.target
        e.dataTransfer.setData('elementId', target.id)
    }

    const setHeader = (e) => {
        const startFormHeader = document.getElementById('form-header')
        startFormHeader.innerText = e.target.value
    }
    const setButtonText = (e) => {
        const startFormHeader = document.getElementById('submit')
        startFormHeader.innerText = e.target.value
    }
    const setFormColor = (e) => {
        const formBackground = '--color'
        // document.documentElement.style.setProperty(formBackground, e.target.value)
        dispatch(changeFormBackgroundThunk(e.target.value))

    }
    const setFormBorderRadius = (e) => {

        dispatch(formBorderRadiusThunk(e.target.value.toString() + 'px'))
    }
    const setFormPadding = (e) => {
        dispatch(formPaddingThunk(e.target.value.toString() + 'px'))
    }

    return (
        <div className='sidebar'>
            <div >
                <div>
                    <button onClick={() => setOpenFormHeader(!openFormHeader)}>Form Header</button>
                    {openFormHeader ?
                        <input type="text" onChange={setHeader}></input> :
                        ''
                    }
                </div>
                <div >
                    <button onClick={() => setOpenTextInput(!openTextInput)}>Text Input</button>
                    {openTextInput ?
                        <>
                            <div >
                                <h3>Placeholder for the input:</h3>
                                <input value={textPlaceholder} type='text' onChange={(e) => setTextPlaceholder(e.target.value)} />
                            </div>
                            <div
                                onDragStart={dragStart}
                                draggable='true'
                                id='elementId'
                            >

                                <input type='text'
                                    id='input-text'
                                    placeholder={textPlaceholder}
                                    style={{
                                        marginTop: '20px',
                                        borderRadius: textInputRadius,
                                        backgroundColor: textInputcolor,
                                        border: `${textInputBorderSize}px ${textInputBorder} ${textInputBorderColor}`,
                                        width: `${textInputWidth}px`,
                                        boxShadow: `${textInputBoxShadowRight}px ${textInputBoxShadowBottom}px ${textInputBoxShadowBlur}px ${textInputBoxShadowColor}`
                                    }}
                                ></input>
                            </div>
                            <h3>Text Input Styles</h3>
                            <div style={{ marginTop: '10px' }}>
                                <label htmlFor='textInputWidth' style={{ marginTop: '10px' }}>Text Input Width</label>
                                <input type='range' name='textInputWidth'
                                    min={50}
                                    max={700}
                                    onChange={(e) => setTextInputWidth(e.target.value.toString())}
                                />

                            </div>
                            <label htmlFor='textradius'>Text Input Radius</label>
                            <input type='range'
                                min={0}
                                max={30}
                                default={2}
                                onChange={(e) => setTextInputRadius(e.target.value.toString() + 'px')}
                            />
                            <label htmlFor='textinputcolor'>Text Input Background Color</label>
                            <input type='color'
                                name='textinputcolor'
                                onChange={(e) => setTextInputColor(e.target.value)}
                            />
                            <div style={{ marginTop: '10px' }}>
                                <label htmlFor='textborderstyle'>Text Border Style</label>
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
                            <div style={{ marginTop: '10px' }}>
                                <label htmlFor='textInputBorderSize'>Text Input Border Size</label>
                                <input type='range'
                                    min={0}
                                    max={10}
                                    onChange={(e) => setTextInputBorderSize(e.target.value.toString())}
                                />
                            </div>
                            <div style={{ marginTop: '10px' }}>
                                <label htmlFor='textInputBorderColor'>Text Inpu Border Colort</label>
                                <input type='color'
                                    onChange={(e) => setTextInputBorderColor(e.target.value)}
                                />
                            </div>
                            <div style={{ marginTop: '10px' }}>
                                <label htmlFor='textInputBoxShadowRight' >Box Shadow length Right </label>
                                <input name='textInputBoxShadowRight' type='range'
                                    min={0}
                                    max={25}
                                    onChange={(e) => setInputBoxShadowRight(e.target.value.toString())}
                                />
                                <label htmlFor='textInputBoxShadowBottom' >Box Shadow Length Bottom </label>
                                <input name='textInputBoxShadowBottom' type='range'
                                    min={0}
                                    max={25}
                                    onChange={(e) => setInputBoxShadowBottom(e.target.value.toString())}
                                />
                                <label htmlFor='textInputBoxShadowBlur' > Box Shadow blur </label>
                                <input name='textInputBoxShadowBlur' type='range'
                                    min={0}
                                    max={25}
                                    onChange={(e) => setInputBoxShadowBlur(e.target.value.toString())}
                                />
                                <label htmlFor='textInputBoxShadowColor' >Box Shadow color </label>
                                <input type='color'
                                    onChange={(e) => steInputBoxShadowColor(e.target.value)}
                                />
                            </div>

                        </>
                        : ''
                    }
                </div>
                <div >
                    <button onClick={() => setOpenEmailInput(!openEmailInput)}>Email Input</button>
                    {openEmailInput ?
                        <>
                            <div >
                                <h3>Placeholder for the input:</h3>
                                <input value={emailPlaceholder} type='text' onChange={(e) => setEmailPlaceholder(e.target.value)} />
                            </div>
                            <div
                                onDragStart={dragStart}
                                draggable='true'
                                id='elementId'
                            >

                                <input type='email'

                                    placeholder={emailPlaceholder}

                                ></input>
                            </div>
                        </>
                        : ''
                    }
                </div>
                <div >
                    <button onClick={() => setOpenPasswordInput(!openPasswordInput)}>Password Input</button>
                    {openPasswordInput ?
                        <>
                            <div>
                                <h3>Placeholder for the input:</h3>
                                <input value={passwordPlaceholder} type='text' onChange={(e) => setPasswordPlaceholder(e.target.value)} />
                            </div>
                            <div
                                draggable='true'
                                onDragStart={dragStart}
                                id='elementId'
                            >

                                <input type='password'


                                    placeholder={passwordPlaceholder}
                                ></input>
                            </div>
                        </>
                        : ''
                    }
                </div>
                <div>
                    <button onClick={() => setOpenNumberInput(!openNumberInput)}>Number input</button>
                    {openNumberInput ?
                        <>
                            <div >
                                <h3>Label for the number input</h3>
                                <input value={numberInputLabel} type='text' onChange={(e) => setNumberInputLabel(e.target.value)} />
                            </div>
                            <div className='number-input-div'
                                onDragStart={dragStart}
                                draggable='true'
                                id='elementId'
                            >
                                <div >
                                    <label htmlFor='numberInput'>{numberInputLabel}</label>
                                </div>
                                <input type='number'
                                    name="numberInput"

                                ></input>
                            </div>
                        </>
                        : ''
                    }
                </div>
            </div>
            <div>
                <h3>Buttons:</h3>
                <h3>Button Text:</h3>
                <input type="text" onChange={setButtonText}></input>
                <button style={{ marginTop: '10px' }} type='submit' id='submit' draggable='true' onDragStart={dragStart}>Submit</button>
            </div>
            <div>
                <h3>Styles</h3>
                <h3>Form background color</h3>
                <input type="color"
                    onChange={setFormColor}
                />
                <h3>Form Border radius</h3>
                <input
                    type='range'
                    onChange={setFormBorderRadius}
                    min={0}
                    max={30}
                    default={2}
                />
                <h3>Form Padding</h3>
                <input type='range'
                    min={0}
                    max={100}
                    onChange={setFormPadding}
                />
            </div>
        </div>

    )
}
export default Sidebar
