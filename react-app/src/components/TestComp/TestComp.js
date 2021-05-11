import React from 'react';
import parse from 'html-react-parser';

const TestComp = () => {
    return (
        <>
            <div id='form-div'
                style={{
                    "backgroundColor": "white",
                    "boxShadow": "rgb(0, 76, 255) 24px 25px 34px",
                    "width": "500px",
                    "height": "274px",
                    "border": "2px dashed rgb(0, 64, 255)",
                    "fontFamily": "\"Permanent Marker\"",
                    "borderRadius": "23px"
                }}>
                <form id='form'
                    style={{
                        "display": "flex",
                        "flexDirection": "column",
                        "alignItems": "center",
                        "width": "500px",
                        "height": "274px",
                        "fontFamily": "\"Permanent Marker\""
                    }}>
                    <h1 id='form-header'
                        style={{
                            "top": "10px",
                            "color": "rgb(0, 17, 255)",
                            "fontFamily": "\"Permanent Marker\""
                        }} key='0'>
                        Login Below
    </h1>
                    <div draggable='true'
                        id='elementId' key='1'>
                        <input type='text'
                            id='input-text'
                            placeholder='Username '
                            style={{
                                "fontFamily": "\"Permanent Marker\"",
                                "marginTop": "20px",
                                "border": "2px solid rgb(0, 17, 255)",
                                "width": "157px",
                                "boxShadow": "rgb(0, 0, 0) 5px 6px 6px",
                                "borderRadius": "3px",
                                "backgroundColor": "rgb(255, 128, 128)"
                            }} />
                    </div>
                    <div draggable='true'
                        id='elementId' key='2'>
                        <input type='text'
                            placeholder='Password'
                            style={{
                                "fontFamily": "\"Permanent Marker\"",
                                "WebkitTextSecurity": "disc",
                                "marginTop": "20px",
                                "borderRadius": "3px",
                                "backgroundColor": "rgb(255, 128, 128)",
                                "border": "2px solid rgb(0, 17, 255)",
                                "width": "157px",
                                "boxShadow": "rgb(0, 0, 0) 5px 6px 6px"
                            }} />
                    </div>
                    <button type='submit'
                        id='submit'
                        draggable='true'
                        style={{
                            "marginTop": "10px",
                            "fontFamily": "\"Permanent Marker\"",
                            "border": "2px solid rgb(30, 0, 255)",
                            "boxShadow": "black 5px 5px 7px",
                            "borderRadius": "3px",
                            "width": "99px"
                        }} key='3'>
                        Login
    </button>
                </form>
            </div>
        </>
    )

}

export default TestComp;
