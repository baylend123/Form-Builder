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
    const [stateFormBackgroundColor, setStateFormBackgroundColor] = useState('')

    const [stateFormRadius, setStateFormRadius] = useState(styleState)
    const [stateFormPadding, setStateFormPadding] = useState(styleState)
    const [stateFormHeight, setStateFormHeight] = useState(styleState)
    const [stateFormWidth, setStateFormWidth] = useState(styleState)
    const [stateHeaderColor, setStateHeaderColor] = useState(styleState)
    const [stateFormFont, setStateFormFont] = useState(styleState)


    const [stateFormBorderType, setStateFormBorderType] = useState(styleState)
    const [stateFormBorderSize, setStateFormBorderSize] = useState(styleState)
    const [stateFormBorderColor, setStateFormBorderColor] = useState(styleState)

    useEffect(() => {
        setStateFormBackgroundColor(styleState.formBackground)
        setStateFormRadius(styleState.backgroundRadius)
        setStateFormPadding(styleState.padding)
        setStateFormHeight(styleState.height)
        setStateFormWidth(styleState.width)
        setStateHeaderColor(styleState.headerColor)
        setStateFormFont(styleState.font)
        setStateFormBorderType(styleState.borderType)
        setStateFormBorderSize(styleState.borderSize)
        setStateFormBorderColor(styleState.borderColor)

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
                    fontFamily: stateFormFont,
                    backgroundColor: stateFormBackgroundColor ? stateFormBackgroundColor : 'white',
                    borderRadius: stateFormRadius,
                    width: stateFormWidth ? stateFormWidth : '500px',
                    height: stateFormHeight ? stateFormHeight : '500px',
                    border: `${stateFormBorderSize ? stateFormBorderSize : '2'}px ${stateFormBorderType ? stateFormBorderType : 'solid'} ${stateFormBorderColor ? stateFormBorderColor : 'black'}`

                }}
            >
                <form id="form"
                    style={{
                        fontFamily: stateFormFont,
                        height: 'auto',
                        width: 'auto',
                        padding: stateFormPadding,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',

                    }}
                >
                    <h1 id="form-header" style={{ top: '10px', color: `${stateHeaderColor}`, fontFamily: stateFormFont, }}>form</h1>
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
