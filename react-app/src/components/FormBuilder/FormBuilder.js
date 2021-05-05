import React from 'react';
import { useState, useEffect } from 'react'
import parse from 'html-react-parser';
import { renderToStaticMarkup } from 'react-dom/server'
import './FormBuilder.css'
import './form.css'

const FormBuilder = () => {
    const [formContentText, setFormContentText] = useState('')
    const [cssContentText, setCSSContentText] = useState('')

    useEffect(() => {
        setCSSContentText(document.querySelector("head > style:nth-child(7)").innerHTML)
    }, [document.querySelector("head > style:nth-child(7)")])
    const drop = e => {
        e.preventDefault();
        const elementId = e.dataTransfer.getData('elementId')
        const element = document.getElementById(elementId)

        const elementClone = element.cloneNode(true)

        e.target.appendChild(elementClone)



        const text = renderToStaticMarkup(parse(e.target.outerHTML))

        setFormContentText(text)
        console.log(e)
        // setCSSContentText(document.querySelector("head > style:nth-child(7)").innerHTML)
    }
    const dragOver = e => {
        e.preventDefault();

    }




    return (
        <div className='form-builder'>
            <div className="form-div"
                onDragOver={dragOver}
                onDrop={drop}
                id="form-div"
            >
                <form className="form" id="form">
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
