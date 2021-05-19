import React from 'react';


const TestComp = () => {
    return (
        <>
            <div id='form-div'
                style={{
                    "backgroundColor": "rgb(0, 225, 255)",
                    "boxShadow": "rgb(255, 0, 0) 18px 17px 20px",
                    "width": "343px",
                    "height": "537px",
                    "border": "5px dashed rgb(225, 255, 0)",
                    "borderRadius": "19px",
                    "fontFamily": "Sacramento"
                }}>
                <form id='form'
                    style={{
                        "display": "flex",
                        "flexDirection": "column",
                        "alignItems": "center",
                        "width": "343px",
                        "height": "537px",
                        "fontFamily": "Sacramento"
                    }}>
                    <h1 id='form-header'
                        style={{ "top": "10px", "color": "rgb(255, 0, 149)", "fontFamily": "Sacramento" }} key='0'>
                        Sign Up Below..
    </h1>
                    <div draggable='true'
                        id='elementId' key='1'>
                        <input type='text'
                            id='input-text'
                            placeholder='Username '
                            style={{
                                "fontFamily": "Sacramento",
                                "marginTop": "20px",
                                "border": "2px dotted rgb(255, 0, 0)",
                                "width": "150px",
                                "boxShadow": "rgb(0, 0, 0) 8px 6px 8px",
                                "borderRadius": "4px",
                                "backgroundColor": "rgb(0, 255, 30)"
                            }} />
                    </div>
                    <div draggable='true'
                        id='elementId' key='2'>
                        <input type='text'
                            id='input-text'
                            placeholder='First Name'
                            style={{
                                "fontFamily": "Sacramento",
                                "marginTop": "20px",
                                "border": "2px dotted rgb(255, 0, 0)",
                                "width": "150px",
                                "boxShadow": "rgb(0, 0, 0) 8px 6px 8px",
                                "borderRadius": "4px",
                                "backgroundColor": "rgb(0, 255, 30)"
                            }} />
                    </div>
                    <div draggable='true'
                        id='elementId' key='3'>
                        <input type='text'
                            id='input-text'
                            placeholder='Last Name'
                            style={{
                                "fontFamily": "Sacramento",
                                "marginTop": "20px",
                                "border": "2px dotted rgb(255, 0, 0)",
                                "width": "150px",
                                "boxShadow": "rgb(0, 0, 0) 8px 6px 8px",
                                "borderRadius": "4px",
                                "backgroundColor": "rgb(0, 255, 30)"
                            }} />
                    </div>
                    <div draggable='true'
                        id='elementId' key='4'>
                        <input type='email'
                            placeholder='Emal'
                            style={{
                                "fontFamily": "Sacramento",
                                "marginTop": "20px",
                                "borderRadius": "4px",
                                "backgroundColor": "rgb(0, 255, 30)",
                                "border": "2px dotted rgb(255, 0, 0)",
                                "width": "150px",
                                "boxShadow": "rgb(0, 0, 0) 8px 6px 8px"
                            }} />
                    </div>
                    <div draggable='true'
                        id='elementId' key='5'>
                        <input type='text'
                            placeholder='Pasword'
                            style={{
                                "fontFamily": "Sacramento",
                                "WebkitTextSecurity": "disc",
                                "marginTop": "20px",
                                "borderRadius": "4px",
                                "backgroundColor": "rgb(0, 255, 30)",
                                "border": "2px dotted rgb(255, 0, 0)",
                                "width": "150px",
                                "boxShadow": "rgb(0, 0, 0) 8px 6px 8px"
                            }} />
                    </div>
                    <div draggable='true'
                        id='elementId' key='6'>
                        <input type='text'
                            placeholder='Confirm password'
                            style={{
                                "fontFamily": "Sacramento",
                                "WebkitTextSecurity": "disc",
                                "marginTop": "20px",
                                "borderRadius": "4px",
                                "backgroundColor": "rgb(0, 255, 30)",
                                "border": "2px dotted rgb(255, 0, 0)",
                                "width": "150px",
                                "boxShadow": "rgb(0, 0, 0) 8px 6px 8px"
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
                                "borderRadius": "4px",
                                "backgroundColor": "rgb(0, 255, 30)",
                                "border": "2px dotted rgb(255, 0, 0)",
                                "width": "150px",
                                "boxShadow": "rgb(0, 0, 0) 8px 6px 8px"
                            }} key='1' />
                    </div>
                    <button type='submit'
                        id='submit'
                        draggable='true'
                        style={{
                            "marginTop": "20px",
                            "fontFamily": "Sacramento",
                            "border": "2px dashed rgb(255, 0, 0)",
                            "boxShadow": "rgb(0, 0, 0) 8px 8px 13px",
                            "backgroundColor": "rgb(183, 173, 255)",
                            "width": "141px",
                            "borderRadius": "5px"
                        }} key='8'>
                        Sign Me Up
    </button>
                </form>
            </div>
        </>
    )

}

export default TestComp;
