import React from 'react';
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { formsThatArentMineThunk } from '../../store/forms'
import parse from 'html-react-parser';
import jsxToString from 'jsx-to-string';

const FormBrowser = () => {
    const [showMeTheCode, setShowMeTheCode] = useState(false)
    const notMyForms = useSelector(state => state?.myFormsReducer?.notMyForms)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(formsThatArentMineThunk())
    }, [dispatch])


    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            {notMyForms?.map((form => {
                const jsxForm = parse(form.JSX)
                const jsxString = jsxToString(jsxForm)
                return (
                    <>
                        <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                            {jsxForm}
                        </div>
                        <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                            <button
                                style={{

                                    cursor: 'pointer',
                                    fontFamily: 'Source Code Pro ',
                                    width: '100%',
                                    height: '40px',
                                    borderRadius: '5px',
                                    backgroundColor: 'rgb(168,254,255)',
                                    opacity: '0.7',
                                    border: '1px solid white',
                                    textAlign: 'left'
                                }}
                                onClick={() => setShowMeTheCode(!showMeTheCode)}
                            >Show Me Code!!</button>
                        </div>
                        <div>
                            {showMeTheCode ? <div style={{
                                width: '500px',
                                height: '200px',
                                border: '2px solid black',
                                overflow: 'scroll'
                            }}>
                                <pre>
                                    {jsxString}
                                </pre>
                            </div> : ''}
                        </div>
                    </>
                )
            }))}

        </div>
    )
}

export default FormBrowser