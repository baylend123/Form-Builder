import React from 'react';
import parse from 'html-react-parser';

const TestComp = () => {
    return (
        <>
            <div id='form-div'
                style={{
                    "backgroundColor": "rgb(73, 197, 94)",
                    "boxShadow": "rgb(0, 0, 0) 36px 28px 28px",
                    "width": "500px",
                    "height": "500px",
                    "border": "2px dashed black",
                    "fontFamily": "\"Permanent Marker\"",
                    "borderRadius": "11px"
                }}>
                <form id='form'
                    style={{
                        "display": "flex",
                        "flexDirection": "column",
                        "alignItems": "center",
                        "width": "500px",
                        "height": "500px",
                        "fontFamily": "\"Permanent Marker\""
                    }}>
                    <h1 id='form-header'
                        style={{ "top": "10px", "color": "rgb(0, 0, 0)", "fontFamily": "\"Permanent Marker\"" }} key='0'>
                        Sign Up Below...
    </h1>
                    <div draggable='true'
                        id='elementId' key='1'>
                        <input type='text'
                            id='input-text'
                            placeholder='First Name'
                            style={{
                                "fontFamily": "\"Permanent Marker\"",
                                "marginTop": "20px",
                                "border": "3px dotted black",
                                "width": "151px",
                                "boxShadow": "red 7px 8px 12px",
                                "borderRadius": "3px",
                                "backgroundColor": "rgb(30, 138, 0)"
                            }} />
                    </div>
                    <div draggable='true'
                        id='elementId' key='2'>
                        <input type='text'
                            id='input-text'
                            placeholder='Last Name'
                            style={{
                                "fontFamily": "\"Permanent Marker\"",
                                "marginTop": "20px",
                                "border": "3px dotted black",
                                "width": "151px",
                                "boxShadow": "red 7px 8px 12px",
                                "borderRadius": "3px",
                                "backgroundColor": "rgb(30, 138, 0)"
                            }} />
                    </div>
                    <div draggable='true'
                        id='elementId' key='3'>
                        <input type='email'
                            placeholder='Email'
                            style={{
                                "fontFamily": "\"Permanent Marker\"",
                                "marginTop": "20px",
                                "borderRadius": "3px",
                                "backgroundColor": "rgb(30, 138, 0)",
                                "border": "3px dotted black",
                                "width": "151px",
                                "boxShadow": "red 7px 8px 12px"
                            }} />
                    </div>
                    <div draggable='true'
                        id='elementId' key='4'>
                        <input type='text'
                            placeholder='password'
                            style={{
                                "fontFamily": "\"Permanent Marker\"",
                                "WebkitTextSecurity": "disc",
                                "marginTop": "20px",
                                "borderRadius": "3px",
                                "backgroundColor": "rgb(30, 138, 0)",
                                "border": "3px dotted black",
                                "width": "151px",
                                "boxShadow": "red 7px 8px 12px"
                            }} />
                    </div>
                    <div draggable='true'
                        id='elementId' key='5'>
                        <input type='text'
                            placeholder='repeat password'
                            style={{
                                "fontFamily": "\"Permanent Marker\"",
                                "WebkitTextSecurity": "disc",
                                "marginTop": "20px",
                                "borderRadius": "3px",
                                "backgroundColor": "rgb(30, 138, 0)",
                                "border": "3px dotted black",
                                "width": "151px",
                                "boxShadow": "red 7px 8px 12px"
                            }} />
                    </div>
                    <div className='number-input-div'
                        draggable='true'
                        id='elementId'
                        style={{ "marginTop": "20px", "textAlign": "center" }} key='6'>
                        <div key='0'>
                            <label htmlFor='numberInput'>
                                Age
        </label>
                        </div>
                        <input type='number'
                            name='numberInput'
                            style={{
                                "fontFamily": "\"Permanent Marker\"",
                                "borderRadius": "3px",
                                "backgroundColor": "rgb(30, 138, 0)",
                                "border": "3px dotted black",
                                "width": "151px",
                                "boxShadow": "red 7px 8px 12px"
                            }} key='1' />
                    </div>
                    <button type='submit'
                        id='submit'
                        draggable='true'
                        style={{
                            "marginTop": "10px",
                            "fontFamily": "\"Permanent Marker\"",
                            "borderRadius": "4px",
                            "border": "2px dotted",
                            "backgroundColor": "rgb(35, 138, 15)",
                            "height": "36px",
                            "width": "109px",
                            "boxShadow": "rgb(255, 0, 0) 10px 6px 13px"
                        }} key='7'>
                        Sign Up
    </button>
                </form>
            </div>
        </>
    )

}

export default TestComp;
