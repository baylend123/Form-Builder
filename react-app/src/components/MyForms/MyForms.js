import React from 'react';
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMyFormsThunk, formDeleteThunk } from '../../store/forms'
import parse from 'html-react-parser';
import jsxToString from 'jsx-to-string';

const MyForms = () => {
    const [showMeTheCode, setShowMeTheCode] = useState(false)
    const myForms = useSelector(state => state?.myFormsReducer?.myForms)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMyFormsThunk())
    }, [myForms?.length])



    const formDelete = (id) => {
        dispatch(formDeleteThunk(id))
    }
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            {myForms?.map((form => {

                const jsxForm = parse(form.JSX)
                const jsxString = jsxToString(jsxForm)
                return (
                    <>
                        <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                            {jsxForm}
                        </div>
                        <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                            <button
                                onClick={() => setShowMeTheCode(!showMeTheCode)}
                            >Show Me Code!!</button>
                            <button
                                onClick={() => formDelete(form.id)}
                            >Delete Me Forever </button>
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