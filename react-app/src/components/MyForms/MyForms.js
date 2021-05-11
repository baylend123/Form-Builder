import React from 'react';
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMyFormsThunk } from '../../store/forms'
import parse from 'html-react-parser';
import jsxToString from 'jsx-to-string';

const MyForms = () => {
    const [showMeTheCode, setShowMeTheCode] = useState(false)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMyFormsThunk())
    }, [])

    const myForms = useSelector(state => state?.myFormsReducer?.myForms)
    console.log(myForms)
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            {myForms?.map((form => {
                const jsxForm = parse(form)
                const jsxString = jsxToString(jsxForm)
                return (
                    <>
                        <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                            {jsxForm}
                        </div>
                        <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                            <button
                                onClick={() => setShowMeTheCode(!showMeTheCode)}
                            >Show Me Code!!</button> <button>Yeet Me</button>
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

export default MyForms