import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect, useRef } from 'react'

import parse from 'html-react-parser';
import jsxToString from 'jsx-to-string';


import './FormBuilder.css'
import './form.css'


const FormBuilder = () => {

    const fontLinkTag = '<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@300&family=Bree+Serif&family=Cormorant+Garamond&family=Jost:wght@300&family=Lobster&family=Permanent+Marker&family=Questrial&family=Rokkitt:wght@300&family=Sacramento&family=Source+Code+Pro&display=swap" rel="stylesheet" >'

    const myForm = useRef(null)
    const [formContentText, setFormContentText] = useState('')

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
                    <h1 id="form-header" style={{ top: '10px', color: `${stateHeaderColor}`, fontFamily: stateFormFont, }}>Form Header</h1>
                </form>
            </div>
            <div style={{ marginTop: '40px' }}>
                <button type="submit"
                    style={{

                        cursor: 'pointer',
                        fontFamily: 'Source Code Pro ',
                        width: '100%',
                        height: '30px',
                        borderRadius: '5px',
                        backgroundColor: 'rgb(168,254,255)',
                        opacity: '0.7',
                        border: '1px solid white',
                        textAlign: 'left'
                    }}
                    onClick={saveToMyForms}
                >
                    {addToMyFormsText}
                </button>
            </div>
            <div className='code-area'>
                <button
                    style={{

                        cursor: 'pointer',
                        fontFamily: 'Source Code Pro ',
                        overflow: 'hidden',
                        height: '10vh',
                        width: '5vw',
                        borderRadius: '5px',
                        backgroundColor: 'rgb(168,254,255)',
                        opacity: '0.7',
                        border: '1px solid white',
                        textAlign: 'left'
                    }}
                    onClick={getHtml}>Get JSX</button>
                <h3
                    style={{
                        marginLeft: '20px',


                    }}
                >JSX</h3>
                <pre style={{
                    height: '90%',
                    width: '50vw',
                    overflow: 'scroll',
                    overflowX: 'hidden'
                }}>
                    {formContentText}
                </pre>


                <h3>Link Tag For Fonts</h3>
                <pre
                    style={{
                        height: '90%',
                        width: '50vw',
                        overflow: 'scroll',
                        overflowY: 'hidden'
                    }}>
                    {fontLinkTag}
                </pre>


            </div>

        </div>
    )
}
export default FormBuilder
