import React from 'react'
const FormComponent = ({styleState}) => {
    console.log(styleState)
    const drop = e => {
        e.preventDefault();
        const elementId = e.dataTransfer.getData('elementId')
        const element = document.getElementById(elementId)

        const elementClone = element.cloneNode(true)

        e.target.appendChild(elementClone)

    }
    const dragOver = e => {
        e.preventDefault();

    }
    return(
        <div

        onDragOver={dragOver}
        onDrop={drop}
        id="form-div"
        style={{
            fontFamily: styleState.font,
            backgroundColor: styleState.formBackground,
            borderRadius: styleState.backgroundRadius,
            width: styleState.width,
            height: styleState.height,
            border: `${styleState.borderSize}px ${styleState.borderType} ${styleState.borderColor}`,
            boxShadow: `${styleState.shadowRight}px ${styleState.shadowBottom}px ${styleState.shadowBlur}px ${styleState.shadowColor}`
        }}
    >
        <form id="form"
            style={{
                fontFamily: styleState.font,
                width: styleState.width,
                height: styleState.height,
                padding: styleState.padding,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',

            }}
        >
            <h1 id="form-header" style={{ top: '10px', color: `${styleState.headerColor}`, fontFamily: styleState.font, }}>Form Header</h1>
        </form>
    </div>
    )
}
export default FormComponent