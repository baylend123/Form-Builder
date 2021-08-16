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
    from '../../store/styles'
const NumberInput = () => {
    const dispatch = useDispatch()
    const formFont = useSelector(state => state.stylesReducer.font)
    const textInputRadius = useSelector(state => state.stylesReducer.textInputRadius)
    const textInputWidth = useSelector(state => state.stylesReducer.textInputWidth)
    const textInputcolor = useSelector(state => state.stylesReducer.textInputColor)
    const textInputBorder = useSelector(state => state.stylesReducer.textInputBorder)
    const textInputBorderSize = useSelector(state => state.stylesReducer.textInputBorderSize)
    const textInputBorderColor = useSelector(state => state.stylesReducer.textInputBorderColor)
    const textInputBoxShadowRight = useSelector(state => state.stylesReducer.textInputBoxShadowRight)
    const textInputBoxShadowBottom = useSelector(state => state.stylesReducer.textInputBoxShadowBottom)
    const textInputBoxShadowBlur = useSelector(state => state.stylesReducer.textInputBoxShadowBlur)
    const textInputBoxShadowColor = useSelector(state => state.stylesReducer.textInputBoxShadowColor)
    const [numberInputLabel, setNumberInputLabel]= useState('Your Text Here')
    
    
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
    return (
        <>
                            <div >
                                {/* label creation area */}
                                <h3>Label for the number input</h3>
                                <input value={numberInputLabel} type='text' onChange={(e) => setNumberInputLabel(e.target.value)} />
                            </div>
                            <div style={{ width: '200px' }}>
                                <h3>Drag and drop the input into the form when you are done editing</h3>
                            </div>

                            {/* draggable div to form */}
                            <div className='number-input-div'
                                onDragStart={dragStart}
                                draggable='true'
                                id='elementId'
                                style={{ marginTop: '20px', textAlign: 'center' }}
                            >
                                <div >
                                    <label htmlFor='numberInput'>{numberInputLabel}</label>
                                </div>
                                <input type='number'
                                    name="numberInput"
                                    style={{
                                        cursor: 'pointer',
                                        fontFamily: `${formFont}`,
                                        borderRadius: textInputRadius,
                                        backgroundColor: textInputcolor,
                                        border: `${textInputBorderSize}px ${textInputBorder} ${textInputBorderColor}`,
                                        width: `${textInputWidth}px`,
                                        boxShadow: `${textInputBoxShadowRight}px ${textInputBoxShadowBottom}px ${textInputBoxShadowBlur}px ${textInputBoxShadowColor}`
                                    }}

                                ></input>
                            </div>

                            {/* number input styling */}
                            <h3>Number Input Styles</h3>
                            <div
                                style={{
                                    height:'50%',
                                    overflow:'scroll',
                                    border: '1px solid white',
                                    overflowX: 'hidden',
                                }}
                            >
                                {/* input width */}
                                <div style={{ marginTop: '10px' }}>
                                    <div>

                                        <label htmlFor='textInputWidth' style={{ marginTop: '10px' }}>Number Input Width</label>
                                    </div>
                                    <div>

                                        <input type='range' name='textInputWidth'
                                            min={50}
                                            max={700}
                                            onChange={(e) => setTextInputWidth(e.target.value.toString())}
                                        />
                                    </div>
                                </div>

                                {/* border radius edit */}
                                <div>

                                    <label htmlFor='textradius'>Number Input Border Radius</label>
                                </div>
                                <div>

                                    <input type='range'
                                        min={0}
                                        max={30}

                                        onChange={(e) => setTextInputRadius(e.target.value.toString() + 'px')}
                                    />
                                </div>

                                {/* background color chooser */}
                                <div>

                                    <label htmlFor='textinputcolor'>Number Input Background Color</label>
                                </div>
                                <div>

                                    <input type='color'
                                        value={textInputcolor}
                                        name='textinputcolor'
                                        onChange={(e) => setTextInputColor(e.target.value)}
                                    />
                                </div>

                                {/* border style area */}
                                <div style={{ marginTop: '10px' }}>
                                    <label htmlFor='textborderstyle'>Number Border Style</label>
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

                                {/* border size chooser */}
                                <div style={{ marginTop: '10px' }}>
                                    <div>

                                        <label htmlFor='textInputBorderSize'>Number Input Border Size</label>
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

                                        <label htmlFor='textInputBorderColor'>Number Input Border Color</label>
                                    </div>
                                    <div>

                                        <input type='color'
                                            value={textInputBorderColor}
                                            onChange={(e) => setTextInputBorderColor(e.target.value)}
                                        />
                                    </div>
                                </div>

                                {/* box shadow length right picker */}
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

                                    {/* box shadow length bottom picker */}
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


                                    {/* Box shadow blur picker */}
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

                                    {/* box shadow color picker */}
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
export default NumberInput