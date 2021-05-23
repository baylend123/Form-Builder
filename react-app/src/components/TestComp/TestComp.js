import React from 'react';


const TestComp = () => {
    return (
        <>
            <div id='form-div'
                style={{
                    "backgroundColor": "rgb(0, 255, 110)",
                    "boxShadow": "rgb(43, 0, 255) 20px 20px 26px",
                    "width": "500px",
                    "height": "615px",
                    "border": "5px dashed rgb(255, 0, 0)",
                    "fontFamily": "Sacramento",
                    "borderRadius": "12px"
                }}>
                <form id='form'
                    style={{
                        "display": "flex",
                        "flexDirection": "column",
                        "alignItems": "center",
                        "width": "500px",
                        "height": "615px",
                        "fontFamily": "Sacramento"
                    }}>
                    <h1 id='form-header'
                        style={{ "top": "10px", "color": "rgb(255, 176, 66)", "fontFamily": "Sacramento" }} key='0'>
                        Sign Up Below
    </h1>
                    <div draggable='true'
                        id='elementId' key='1'>
                        <input type='text'
                            id='input-text'
                            placeholder='First Name'
                            style={{
                                "fontFamily": "Sacramento",
                                "marginTop": "20px",
                                "border": "3px dotted rgb(255, 221, 0)",
                                "width": "147px",
                                "boxShadow": "rgb(0, 0, 0) 9px 8px 13px",
                                "borderRadius": "3px",
                                "backgroundColor": "rgb(0, 157, 255)"
                            }} />
                    </div>
                    <div draggable='true'
                        id='elementId' key='2'>
                        <input type='text'
                            id='input-text'
                            placeholder='Last Name'
                            style={{
                                "fontFamily": "Sacramento",
                                "marginTop": "20px",
                                "border": "3px dotted rgb(255, 221, 0)",
                                "width": "147px",
                                "boxShadow": "rgb(0, 0, 0) 9px 8px 13px",
                                "borderRadius": "3px",
                                "backgroundColor": "rgb(0, 157, 255)"
                            }} />
                    </div>
                    <div draggable='true'
                        id='elementId' key='3'>
                        <input type='email'
                            placeholder='Email'
                            style={{
                                "fontFamily": "Sacramento",
                                "marginTop": "20px",
                                "borderRadius": "3px",
                                "backgroundColor": "rgb(0, 157, 255)",
                                "border": "3px dotted rgb(255, 221, 0)",
                                "width": "147px",
                                "boxShadow": "rgb(0, 0, 0) 9px 8px 13px"
                            }} />
                    </div>
                    <div draggable='true'
                        id='elementId' key='4'>
                        <input type='text'
                            id='input-text'
                            placeholder='Desired username'
                            style={{
                                "fontFamily": "Sacramento",
                                "marginTop": "20px",
                                "borderRadius": "3px",
                                "backgroundColor": "rgb(0, 157, 255)",
                                "border": "3px dotted rgb(255, 221, 0)",
                                "width": "147px",
                                "boxShadow": "rgb(0, 0, 0) 9px 8px 13px"
                            }} />
                    </div>
                    <div draggable='true'
                        id='elementId' key='5'>
                        <input type='text'
                            placeholder='Password'
                            style={{
                                "fontFamily": "Sacramento",
                                "WebkitTextSecurity": "disc",
                                "marginTop": "20px",
                                "borderRadius": "3px",
                                "backgroundColor": "rgb(0, 157, 255)",
                                "border": "3px dotted rgb(255, 221, 0)",
                                "width": "147px",
                                "boxShadow": "rgb(0, 0, 0) 9px 8px 13px"
                            }} />
                    </div>
                    <div draggable='true'
                        id='elementId' key='6'>
                        <input type='text'
                            placeholder='confirm password'
                            style={{
                                "fontFamily": "Sacramento",
                                "WebkitTextSecurity": "disc",
                                "marginTop": "20px",
                                "borderRadius": "3px",
                                "backgroundColor": "rgb(0, 157, 255)",
                                "border": "3px dotted rgb(255, 221, 0)",
                                "width": "147px",
                                "boxShadow": "rgb(0, 0, 0) 9px 8px 13px"
                            }} />
                    </div>
                    <div className='number-input-div'
                        draggable='true'
                        id='elementId'
                        style={{ "marginTop": "20px", "textAlign": "center" }} key='7'>
                        <div key='0'>
                            <label htmlFor='numberInput'>
                                Age
        </label>
                        </div>
                        <input type='number'
                            name='numberInput'
                            style={{
                                "fontFamily": "Sacramento",
                                "borderRadius": "3px",
                                "backgroundColor": "rgb(0, 157, 255)",
                                "border": "3px dotted rgb(255, 221, 0)",
                                "width": "147px",
                                "boxShadow": "rgb(0, 0, 0) 9px 8px 13px"
                            }} key='1' />
                    </div>
                    <button type='submit'
                        id='submit'
                        draggable='true'
                        style={{
                            "marginTop": "20px",
                            "fontFamily": "Sacramento",
                            "border": "2px dotted",
                            "boxShadow": "rgb(0, 0, 0) 8px 8px 11px",
                            "backgroundColor": "rgb(185, 209, 0)",
                            "borderRadius": "6px",
                            "width": "117px"
                        }} key='8'>
                        Sign Up
    </button>
                </form>
            </div>
        </>
    )

}

export default TestComp;
