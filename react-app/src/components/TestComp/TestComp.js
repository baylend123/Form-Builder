import React from 'react';

const TestComp = () => {
    return (
        <>
            <div id='form-div' style={{ "backgroundColor": "rgb(255, 61, 61)", "width": "514px", "height": "514px", "borderRadius": "30px" }}> <form id='form' style={{ "width": "auto", "display": "flex", "flexDirection": "column", "alignItems": "center", "height": "514px" }}> <h1 id='form-header' style={{ "top": "10px" }} key='0'> Sign Up Below </h1> <div draggable='true' id='elementId' key='1'> <input type='text' id='input-text' placeholder='First Name' style={{ "fontFamily": "\"Permanent Marker\"", "marginTop": "20px", "border": "2px solid rgb(255, 213, 0)", "width": "238px", "boxShadow": "rgb(0, 0, 0) 8px 7px 10px", "borderRadius": "40px", "backgroundColor": "rgb(122, 255, 180)" }} /> </div> <div draggable='true' id='elementId' key='2'> <input type='text' id='input-text' placeholder='Last Name' style={{ "fontFamily": "\"Permanent Marker\"", "marginTop": "20px", "border": "2px solid rgb(255, 213, 0)", "width": "238px", "boxShadow": "rgb(0, 0, 0) 8px 7px 10px", "borderRadius": "4px", "backgroundColor": "rgb(122, 255, 180)" }} /> </div> <div draggable='true' id='elementId' key='3'> <input type='text' id='input-text' placeholder='Email' style={{ "fontFamily": "\"Permanent Marker\"", "marginTop": "20px", "border": "2px solid rgb(255, 213, 0)", "width": "238px", "boxShadow": "rgb(0, 0, 0) 8px 7px 10px", "borderRadius": "4px", "backgroundColor": "rgb(122, 255, 180)" }} /> </div> <div draggable='true' id='elementId' key='4'> <input type='text' id='input-text' placeholder='Username' style={{ "fontFamily": "\"Permanent Marker\"", "marginTop": "20px", "border": "2px solid rgb(255, 213, 0)", "width": "238px", "boxShadow": "rgb(0, 0, 0) 8px 7px 10px", "borderRadius": "4px", "backgroundColor": "rgb(122, 255, 180)" }} /> </div> <div draggable='true' id='elementId' key='5'> <input type='text' id='input-text' placeholder='password' style={{ "fontFamily": "\"Permanent Marker\"", "marginTop": "20px", "border": "2px solid rgb(255, 213, 0)", "width": "238px", "boxShadow": "rgb(0, 0, 0) 8px 7px 10px", "borderRadius": "4px", "backgroundColor": "rgb(122, 255, 180)" }} /> </div> <div draggable='true' id='elementId' key='6'> <input type='text' id='input-text' placeholder='Confirm Password' style={{ "fontFamily": "\"Permanent Marker\"", "marginTop": "20px", "border": "2px solid rgb(255, 213, 0)", "width": "238px", "boxShadow": "rgb(0, 0, 0) 8px 7px 10px", "borderRadius": "4px", "backgroundColor": "rgb(122, 255, 180)" }} /> </div> <div className='number-input-div' draggable='true' id='elementId' style={{ "marginTop": "20px", "textAlign": "center" }} key='7'> <div key='0'> <label htmlFor='numberInput'> Age </label> </div> <input type='number' name='numberInput' style={{ "fontFamily": "\"Permanent Marker\"", "borderRadius": "4px", "backgroundColor": "rgb(122, 255, 180)", "border": "2px solid rgb(255, 213, 0)", "width": "238px", "boxShadow": "rgb(0, 0, 0) 8px 7px 10px" }} key='1' /> </div> <button type='submit' id='submit' draggable='true' style={{ "marginTop": "10px", "fontFamily": "\"Permanent Marker\"" }} key='8'> Sign Up </button> </form> </div>
        </>
    )

}

export default TestComp;