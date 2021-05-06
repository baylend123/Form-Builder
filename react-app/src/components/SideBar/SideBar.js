import React from 'react';
import { useState, useEffect } from 'react'
import { useDrag } from 'react-dnd'
import { changeFormBackgroundThunk, formBorderRadiusThunk } from '../../store/styles'
import { useDispatch } from 'react-redux'
import './Sidebar.css'
const Sidebar = () => {
    const dispatch = useDispatch();
    const [textPlaceholder, setTextPlaceholder] = useState('')
    const [emailPlaceholder, setEmailPlaceholder] = useState('')
    const [passwordPlaceholder, setPasswordPlaceholder] = useState('')
    const [numberInputLabel, setNumberInputLabel] = useState('')
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


    return (
        <div className='sidebar'>
            <div className='input-chooser'>
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
                            <div className='form'>
                                <h3>Placeholder for the input:</h3>
                                <input value={textPlaceholder} type='text' onChange={(e) => setTextPlaceholder(e.target.value)} />
                            </div>
                            <div className='form'
                                onDragStart={dragStart}
                                draggable='true'
                                id='elementId'
                            >

                                <input type='text'
                                    className='form'
                                    placeholder={textPlaceholder}
                                ></input>
                            </div>
                        </>
                        : ''
                    }
                </div>
                <div >
                    <button onClick={() => setOpenEmailInput(!openEmailInput)}>Email Input</button>
                    {openEmailInput ?
                        <>
                            <div className='form'>
                                <h3>Placeholder for the input:</h3>
                                <input value={emailPlaceholder} type='text' onChange={(e) => setEmailPlaceholder(e.target.value)} />
                            </div>
                            <div className='form'
                                onDragStart={dragStart}
                                draggable='true'
                                id='elementId'
                            >

                                <input type='email'
                                    className='form'
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
                            <div className='form'>
                                <h3>Placeholder for the input:</h3>
                                <input value={passwordPlaceholder} type='text' onChange={(e) => setPasswordPlaceholder(e.target.value)} />
                            </div>
                            <div className='form'
                                draggable='true'
                                onDragStart={dragStart}
                                id='elementId'
                            >

                                <input type='password'
                                    className='form'

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
                            <div className='form'>
                                <h3>Label for the number input</h3>
                                <input value={numberInputLabel} type='text' onChange={(e) => setNumberInputLabel(e.target.value)} />
                            </div>
                            <div className='number-input-div'
                                onDragStart={dragStart}
                                draggable='true'
                                id='elementId'
                            >
                                <div className='form'>
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
                <button type='submit' id='submit' draggable='true' onDragStart={dragStart}>Submit</button>
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
            </div>
        </div>

    )
}
export default Sidebar
