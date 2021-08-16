import React from 'react';
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMyFormsThunk, formDeleteThunk } from '../../store/forms'
import parse from 'html-react-parser';
import jsxToString from 'jsx-to-string';

const MyForms = () => {
    const [showMeTheCode, setShowMeTheCode] = useState(null)
    const myForms = useSelector(state => state?.myFormsReducer?.myForms)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMyFormsThunk())
    }, [dispatch])



    const formDelete = (id) => {
        dispatch(formDeleteThunk(id))
    }
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            {myForms?.map(((form, i) => {

                const jsxForm = parse(form.JSX)
                const jsxString = jsxToString(jsxForm)
                return (
                    <div key={form.id}>
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

                                onClick={() => setShowMeTheCode((showMeTheCode === form.id) ? null: form.id)}
                            >Show Me Code!!</button>
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
                                onClick={() => formDelete(form.id)}
                            >Delete Me Forever </button>
                        </div>
                        <div>
                            {(showMeTheCode === form.id ) ? <div style={{
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
                    </div>

                )
            }))}
        </div>
    )
}

export default MyForms