import React from 'react';
import { useState, useEffect } from 'react'

import { useDrag } from 'react-dnd'
import './Sidebar.css'


const Sidebar = () => {
    const [placeholder, setPlaceholder] = useState('')
    const [formHeader, setFormHeader] = useState('')
    const dragStart = e => {

        const target = e.target
        e.dataTransfer.setData('elementId', target.id)
    }
    useEffect(() => {
        // const formHeader = document.getElementById('form-header')
        // console.log(formHeader.innerText)
    }, [])
    const setHeader = (e) => {
        const startFormHeader = document.getElementById('form-header')

        startFormHeader.innerText = e.target.value

    }
    const setButtonText = (e) => {
        const startFormHeader = document.getElementById('submit')

        startFormHeader.innerText = e.target.value

    }
    const setFormColor = (e) => {
        const formDiv = document.getElementById('form-div')
        const formBackground = '--color'
        document.documentElement.style.setProperty(formBackground, e.target.value)
    }


    return (
        <div className='sidebar'>
            <div className='input-chooser'>
                <div>
                    <h3>Form Header</h3>
                    <input type="text" onChange={setHeader}></input>
                    <h3>Text Input</h3>
                    <div>
                        <h3>Placeholder for the input:</h3>
                        <input value={placeholder} type='text' onChange={(e) => setPlaceholder(e.target.value)} />
                    </div>
                    <input type='text' id='elementId' draggable='true'
                        onDragStart={dragStart}
                        placeholder={placeholder}
                    ></input>
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
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sidebar
