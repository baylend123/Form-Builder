import React from 'react';

const TestComp = () => {
    return (
        <>
            <div id='form-div' style={{ "backgroundColor": "rgb(247, 161, 233)", "width": "372px", "height": "310px", "borderRadius": "16px" }}> <form id='form' style={{ "width": "auto", "display": "flex", "flexDirection": "column", "alignItems": "center", "height": "310px" }}> <h1 id='form-header' style={{ "top": "10px" }} key='0'> Login Here </h1> <div draggable='true' id='elementId' key='1'> <input type='text' id='input-text' placeholder='Username' style={{ "marginTop": "20px", "border": "2px dotted rgb(255, 255, 255)", "width": "274px", "boxShadow": "rgb(0, 0, 0) 11px 6px 8px", "borderRadius": "40px", "backgroundColor": "rgb(255, 128, 221)" }} /> </div> <div draggable='true' id='elementId' key='2'> <input type='text' id='input-text' placeholder='Password' style={{ "marginTop": "20px", "border": "2px dotted rgb(255, 255, 255)", "width": "274px", "boxShadow": "rgb(0, 0, 0) 11px 6px 8px", "borderRadius": "4px", "backgroundColor": "rgb(255, 128, 221)" }} /> </div> <button type='submit' id='submit' draggable='true' style={{ "marginTop": "10px" }} key='3'> Login </button> <div draggable='true' id='elementId' key='4'> <input type='text' id='input-text' placeholder='Password' style={{ "marginTop": "20px", "borderRadius": "5px", "backgroundColor": "rgb(255, 0, 0)", "border": "2px dotted rgb(255, 255, 255)", "width": "274px", "boxShadow": "rgb(0, 0, 0) 11px 6px 8px" }} /> </div> <div draggable='true' id='elementId' key='5'> <input type='text' id='input-text' placeholder='Password' style={{ "marginTop": "20px", "borderRadius": "5px", "backgroundColor": "rgb(255, 173, 173)", "border": "2px dotted rgb(255, 255, 255)", "width": "274px", "boxShadow": "rgb(0, 0, 0) 11px 6px 8px" }} /> </div> </form> </div>
        </>
    )

}

export default TestComp;
