import React from 'react';
import { useSelector } from 'react-redux'
import { useState, useEffect, useRef } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import parse from 'html-react-parser';
import jsxToString from 'jsx-to-string';

import './FormBuilder.css'
import './form.css'
let styleState;

const FormBuilder = () => {
    const myForm = useRef(null)
    const [formContentText, setFormContentText] = useState('')
    const [cssContentText, setCSSContentText] = useState('')
    let styleState = useSelector(state => state?.stylesReducer)
    const [stateFormBackgroundColor, setStateFormBackgroundColor] = useState(styleState)
    const [stateFormRadius, setStateFormRadius] = useState(styleState)
    const [stateFormPadding, setStateFormPadding] = useState(styleState)


    useEffect(() => {
        const input = document.getElementById('input-text')
        if (input) {
            console.log(input.style)
            input.style.borderRadius = '40px'
        }
        setStateFormBackgroundColor(styleState.formBackground)
        setStateFormRadius(styleState.backgroundRadius)
        setStateFormPadding(styleState.padding)


    }, [styleState])

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
        console.log(renderToStaticMarkup(parse(form.outerHTML)))
        setFormContentText(jsxToString(parse(form.outerHTML)))
    }




    return (
        <div className='form-builder'>
            <div
                onDragOver={dragOver}
                onDrop={drop}
                id="form-div"
                ref={myForm}
                style={{
                    backgroundColor: stateFormBackgroundColor,
                    borderRadius: stateFormRadius,


                }}
            >
                <form id="form"
                    style={{
                        padding: stateFormPadding,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <h1 id="form-header" style={{ top: '10px' }}>form</h1>
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
