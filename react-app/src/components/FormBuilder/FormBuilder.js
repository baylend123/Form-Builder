import React from 'react';
import { useState } from 'react'
import './FormBuilder.css'
import './form.css'

const FormBuilder = () => {
    const [formContentText, setFormContentText] = useState('')
    const [cssContentText, setCSSContentText] = useState('')
    const drop = e => {
        e.preventDefault();
        const elementId = e.dataTransfer.getData('elementId')
        const element = document.getElementById(elementId)
        const elementClone = element.cloneNode(true)


        e.target.appendChild(elementClone)

        setFormContentText(e.target.outerHTML)
        setCSSContentText(document.querySelector("head > style:nth-child(7)").innerHTML)
    }
    const dragOver = e => {
        e.preventDefault();

    }






    return (
        <div className='form-builder'>
            <div className="form-div"
                onDragOver={dragOver}
                onDrop={drop}
            >
                <form class="form" id="form">
                    <h1 id="form-header">form</h1>
                </form>
            </div>
            <div className='code-area'>
                <div className='HTML'>
                    <h3>HTML</h3>
                    {formContentText}
                </div>
                <div className='CSS'>
                    <h3>CSS</h3>
                    {cssContentText}
                </div>

            </div>

        </div>
    )
}
export default FormBuilder
