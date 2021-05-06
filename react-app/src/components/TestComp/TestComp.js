import React from 'react';

const TestComp = () => {
    return (
        <>
            <div id='form-div' style={{ "backgroundColor": "rgb(109, 105, 105)", "borderRadius": "14px" }}> <form id='form' style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "space-between", "padding": "30px" }}> <h1 id='form-header' style={{ "top": "10px" }} key='0'> form </h1> <div draggable='true' id='elementId' key='1'> <input type='text' id='input-text' placeholder='' style={{ "marginTop": "20px", "border": "2px black", "width": "100px", "boxShadow": "red 2px 2px 2px" }} /> </div> <div draggable='true' id='elementId' key='2'> <input type='text' id='input-text' placeholder='' style={{ "marginTop": "20px", "border": "2px black", "width": "100px", "boxShadow": "red 2px 2px 2px" }} /> </div> <button type='submit' id='submit' draggable='true' style={{ "marginTop": "10px" }} key='3'> Submit </button> </form> </div>
        </>
    )

}

export default TestComp;