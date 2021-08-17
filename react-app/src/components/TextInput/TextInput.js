import React from 'react';
import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {textBorderRadiusThunk, 
    textWidthThunk,
    textColorThunk,
    textBorderTypeThunk,
    textBorderSizeThunk,
    textBorderColorThunk,
    textShadowRightThunk,
    textShadowBottomThunk,
    textShadowBlurThunk,
    textShadowColorThunk
} 
    from '../../store/inputStyles'


const TextInput =() => {
    
    const dispatch = useDispatch()
    const formFont = useSelector(state => state.inoutReducer.font)
    const textInputRadius = useSelector(state => state.inoutReducer.textInputRadius)
    const textInputWidth = useSelector(state => state.inoutReducer.textInputWidth)
    const textInputcolor = useSelector(state => state.inoutReducer.textInputColor)
    const textInputBorder = useSelector(state => state.inoutReducer.textInputBorder)
    const textInputBorderSize = useSelector(state => state.inoutReducer.textInputBorderSize)
    const textInputBorderColor = useSelector(state => state.inoutReducer.textInputBorderColor)
    const textInputBoxShadowRight = useSelector(state => state.inoutReducer.textInputBoxShadowRight)
    const textInputBoxShadowBottom = useSelector(state => state.inoutReducer.textInputBoxShadowBottom)
    const textInputBoxShadowBlur = useSelector(state => state.inoutReducer.textInputBoxShadowBlur)
    const textInputBoxShadowColor = useSelector(state => state.inoutReducer.textInputBoxShadowColor)
    const [textPlaceholder, setTextPlaceholder]= useState('Your Text Here')
    
    
    const dragStart = e => {
        const target = e.target
        e.dataTransfer.setData('elementId', target.id)
    }
    
    const setTextInputRadius = (data) => {
        dispatch(textBorderRadiusThunk(data))
    }
    const setTextInputWidth = (data) => {
        dispatch(textWidthThunk(data))
    }
    const setTextInputColor = (data) => {
        dispatch(textColorThunk(data))
    }
    const setTextInputBorder = (data) => {
        dispatch(textBorderTypeThunk(data))
    }
    const setTextInputBorderSize = (data) => {
        dispatch(textBorderSizeThunk(data))
    }
    const setTextInputBorderColor = (data) => {
        dispatch(textBorderColorThunk(data))
    }
    const setInputBoxShadowRight = (data) => {
        dispatch(textShadowRightThunk(data))
    }
    const setInputBoxShadowBottom = (data) => {
        dispatch(textShadowBottomThunk(data))
    }
    const setInputBoxShadowBlur = (data) => {
        dispatch(textShadowBlurThunk(data))
    }
    const steInputBoxShadowColor =( data) => {
        dispatch(textShadowColorThunk(data))
    }
    return(
        <>
                            <div >

                                {/* placeholder edit */}
                                <h3>Placeholder for the input:</h3>
                                <input value={textPlaceholder} type='text' onChange={(e) => setTextPlaceholder(e.target.value)} />
                            </div>

                            <div style={{ width: '200px' }}>
                                <h3>Drag and drop the input into the form when you are done editing</h3>
                            </div>
                            {/* draggable div */}
                            <div
                                onDragStart={dragStart}
                                draggable='true'
                                id='elementId'
                            >

                                <input type='text'
                                    id='input-text'
                                    placeholder={textPlaceholder}
                                    style={{
                                        cursor: 'pointer',
                                        fontFamily: `${formFont}`,
                                        marginTop: '20px',
                                        borderRadius: textInputRadius,
                                        backgroundColor: textInputcolor,
                                        border: `${textInputBorderSize}px ${textInputBorder} ${textInputBorderColor}`,
                                        width: `${textInputWidth}px`,
                                        boxShadow: `${textInputBoxShadowRight}px ${textInputBoxShadowBottom}px ${textInputBoxShadowBlur}px ${textInputBoxShadowColor}`
                                    }}
                                ></input>
                            </div>


                            {/* styling area */}
                            <h3>Text Input Styles</h3>

                            <div
                                style={{
                                    height:'47%',
                                    overflow:'scroll',
                                    border: '1px solid white',
                                    overflowX: 'hidden',
                                }}
                            >


                                {/* input width */}
                                <div style={{ marginTop: '10px' }}>
                                    <div>

                                        <label htmlFor='textInputWidth' style={{ marginTop: '10px' }}>Text Input Width</label>
                                    </div>
                                    <div>

                                        <input type='range' name='textInputWidth'
                                            min={50}
                                            max={700}
                                            onChange={(e) => setTextInputWidth(e.target.value.toString())}
                                        />
                                    </div>

                                </div>


                                {/* border radius edit slider */}
                                <div>

                                    <label htmlFor='textradius'>Text Input Radius</label>
                                </div>
                                <div>

                                    <input type='range'
                                        min={0}
                                        max={30}
                                        onChange={(e) => setTextInputRadius(e.target.value.toString() + 'px')}
                                    />
                                </div>


                                {/* background color picker */}
                                <div>

                                    <label htmlFor='textinputcolor'>Text Input Background Color</label>
                                </div>
                                <div>

                                    <input type='color'
                                        value={textInputcolor}
                                        name='textinputcolor'
                                        onChange={(e) => setTextInputColor(e.target.value)}
                                    />
                                </div>


                                {/* Border style picker area */}
                                <div style={{ marginTop: '10px' }}>
                                    <label htmlFor='textborderstyle'>Text Border Style</label>
                                    <div style={{ border: '3px solid black', marginTop: '10px' }}>
                                        none
                                <input
                                            name='textborderstyle'
                                            type='radio'
                                            onClick={() => setTextInputBorder('')}

                                        />
                                    </div>
                                    <div style={{ border: '3px solid black', marginTop: '10px' }}>
                                        <input
                                            name='textborderstyle'
                                            type='radio'
                                            onClick={() => setTextInputBorder('solid')}

                                        />
                                    </div>
                                    <div style={{ border: '3px dotted black', marginTop: '10px' }}>
                                        <input
                                            name='textborderstyle'
                                            type='radio'
                                            onClick={() => setTextInputBorder('dotted')}

                                        />
                                    </div>
                                    <div style={{ border: '3px dashed black', marginTop: '10px' }}>
                                        <input
                                            name='textborderstyle'
                                            type='radio'
                                            onClick={() => setTextInputBorder('dashed')}

                                        />
                                    </div>

                                </div>


                                {/* border size picker */}
                                <div style={{ marginTop: '10px' }}>
                                    <div>

                                        <label htmlFor='textInputBorderSize'>Text Input Border Size</label>
                                    </div>
                                    <div>

                                        <input type='range'
                                            min={0}
                                            max={10}
                                            onChange={(e) => setTextInputBorderSize(e.target.value.toString())}
                                        />
                                    </div>
                                </div>


                                {/* border color picker */}
                                <div style={{ marginTop: '10px' }}>
                                    <div>

                                        <label htmlFor='textInputBorderColor'>Text Input Border Color</label>
                                    </div>
                                    <div>

                                        <input type='color'
                                            value={textInputBorderColor}
                                            onChange={(e) => setTextInputBorderColor(e.target.value)}
                                        />
                                    </div>
                                </div>


                                {/* box shadow length right  */}
                                <div style={{ marginTop: '10px' }}>
                                    <div>

                                        <label htmlFor='textInputBoxShadowRight' >Box Shadow length Right </label>
                                    </div>
                                    <div>

                                        <input name='textInputBoxShadowRight' type='range'
                                            min={0}
                                            max={25}
                                            onChange={(e) => setInputBoxShadowRight(e.target.value.toString())}
                                        />
                                    </div>

                                    {/* box shadow length bottom */}
                                    <div>

                                        <label htmlFor='textInputBoxShadowBottom' >Box Shadow Length Bottom </label>
                                    </div>
                                    <div>

                                        <input name='textInputBoxShadowBottom' type='range'
                                            min={0}
                                            max={25}
                                            onChange={(e) => setInputBoxShadowBottom(e.target.value.toString())}
                                        />
                                    </div>


                                    {/* box shadow blur */}
                                    <div>

                                        <label htmlFor='textInputBoxShadowBlur' > Box Shadow blur </label>
                                    </div>
                                    <div>

                                        <input name='textInputBoxShadowBlur' type='range'
                                            min={0}
                                            max={25}
                                            onChange={(e) => setInputBoxShadowBlur(e.target.value.toString())}
                                        />
                                    </div>
                                    {/* box shadow blur */}
                                    <div>

                                        <label htmlFor='textInputBoxShadowColor' >Box Shadow color </label>
                                    </div>
                                    <div>

                                        <input type='color'
                                            value={textInputBoxShadowColor}
                                            onChange={(e) => steInputBoxShadowColor(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                        </>
                        
                    
                

    )
}
export default TextInput