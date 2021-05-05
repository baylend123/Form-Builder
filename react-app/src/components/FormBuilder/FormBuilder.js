import React from 'react';
import { useState, useEffect } from 'react'
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

    }
    const dragOver = e => {
        e.preventDefault();

    }
    const getCss = () => {
        const CSS = document.querySelector("head > style:nth-child(7)").innerHTML.split(';')
        CSS.forEach((ele, i) => {
            let item = ele.split(':')
            if (item[0].includes('--color')) {

                item[1] = window.getComputedStyle(document.documentElement).getPropertyValue('--color')
            }
            CSS[i] = item.join(':')

        })

        const CSSText = CSS.join(';')
        setCSSContentText(CSSText)
    }
    const getHtml = () => {
        const form = document.getElementsByTagName('form')[0].parentElement
        setFormContentText(form.innerHTML)
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
                <button onClick={getCss}>get css</button>
                <button onClick={getHtml}>get html</button>
                <code className='HTML'>
                    <h3>HTML</h3>
                    {formContentText}
                </code>
                <code className='CSS'>
                    <h3>CSS</h3>
                    {cssContentText}
                </code>

            </div>

        </div>
    )
}
export default FormBuilder
