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

    const [stateBorderShadowRight, setStateBorderShadowRight] = useState('2')
    const [stateBorderShadowBottom, setStateBorderShadowBottom] = useState('2')
    const [stateBorderShadowBlur, setStateBorderShadowBlur] = useState('2')
    const [stateBorderShadowColor, setStateBorderShadowColor] = useState('black')


    const [addToMyFormsText, setAddToMyFormsText] = useState('Add To My Forms')

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
        setStateBorderShadowRight(styleState.shadowRight)
        setStateBorderShadowBottom(styleState.shadowBottom)
        setStateBorderShadowBlur(styleState.shadowBlur)
        setStateBorderShadowColor(styleState.shadowColor)

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

    const getHtml = () => {

        const form = document.getElementsByTagName('form')[0].parentElement
        console.log(renderToStaticMarkup(parse(form.outerHTML)))
        setFormContentText(jsxToString(parse(form.outerHTML)))
    }
    const saveToMyForms = async (e) => {
        if (addToMyFormsText === 'Added!') {
            return
        }

        e.preventDefault();
        setAddToMyFormsText('Added!')
        const form = document.getElementsByTagName('form')[0].parentElement
        const string = form.outerHTML

        console.log(string)
        const response = await fetch('/api/forms/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 'jsx': string })
        })

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
                    border: `${stateFormBorderSize ? stateFormBorderSize : '2'}px ${stateFormBorderType ? stateFormBorderType : 'solid'} ${stateFormBorderColor ? stateFormBorderColor : 'black'}`,
                    boxShadow: `${stateBorderShadowRight ? stateBorderShadowRight : '2'}px ${stateBorderShadowBottom ? stateBorderShadowBottom : '2'}px ${stateBorderShadowBlur ? stateBorderShadowBlur : '2'}px ${stateBorderShadowColor ? stateBorderShadowColor : 'black'}`
                }}
            >
                <form id="form"
                    style={{
                        fontFamily: stateFormFont,
                        width: stateFormWidth ? stateFormWidth : '500px',
                        height: stateFormHeight ? stateFormHeight : '500px',
                        padding: stateFormPadding,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',

                    }}
                >
                    <h1 id="form-header" style={{ top: '10px', color: `${stateHeaderColor}`, fontFamily: stateFormFont, }}>form</h1>
                </form>
            </div>
            <div style={{ marginTop: '40px' }}>
                <button type="submit"
                    onClick={saveToMyForms}
                >
                    {addToMyFormsText}
                </button>
            </div>
            <div className='code-area'>
                <button onClick={getHtml}>get html</button>
                <pre className='HTML'>
                    <h3>HTML</h3>
                    {formContentText}
                </pre>

            </div>

        </div>
    )
}
export default FormBuilder
