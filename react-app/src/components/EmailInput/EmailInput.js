import React  from 'react';
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
} from '../../store/inputStyles'
const EmailInput = () => {
    
    
    
    const dispatch = useDispatch()
    const formFont = useSelector(state => state.inputReducer.font)
    const textInputRadius = useSelector(state => state.inputReducer.textInputRadius)
    const textInputWidth = useSelector(state => state.inputReducer.textInputWidth)
    const textInputcolor = useSelector(state => state.inputReducer.textInputColor)
    const textInputBorder = useSelector(state => state.inputReducer.textInputBorder)
    const textInputBorderSize = useSelector(state => state.inputReducer.textInputBorderSize)
    const textInputBorderColor = useSelector(state => state.inputReducer.textInputBorderColor)
    const textInputBoxShadowRight = useSelector(state => state.inputReducer.textInputBoxShadowRight)
    const textInputBoxShadowBottom = useSelector(state => state.inputReducer.textInputBoxShadowBottom)
    const textInputBoxShadowBlur = useSelector(state => state.inputReducer.textInputBoxShadowBlur)
    const textInputBoxShadowColor = useSelector(state => state.inputReducer.textInputBoxShadowColor)
    const [emailPlaceholder, setEmailPlaceholder]= useState('Your Text Here')
    
    
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
                                {/* placeholder edit */}
                                <h3>Placeholder for the input:</h3>
                                <input value={emailPlaceholder} type='text' onChange={(e) => setEmailPlaceholder(e.target.value)} />
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

                                <input type='email'
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

                                    placeholder={emailPlaceholder}

                                ></input>
                            </div>


                            {/* styling for mail input */}
                            <h3>Email Input Styles</h3>
                            <div
                                style={{
                                    height:'47%',
                                    overflow:'scroll',
                                    border: '1px solid white',
                                    overflowX: 'hidden',
                                }}
                            >
                                <div style={{ marginTop: '10px' }}>
                                    <div>

                                        <label htmlFor='textInputWidth' style={{ marginTop: '10px' }}>Email Input Width</label>
                                    </div>
                                    <div>

                                        <input type='range' name='textInputWidth'
                                            min={50}
                                            max={700}
                                            onChange={(e) => setTextInputWidth(e.target.value.toString())}
                                        />
                                    </div>


                                    {/* border radius slider */}
                                </div>
                                <div>

                                    <label htmlFor='textradius'>Email Input Radius</label>
                                </div>
                                <div>

                                    <input type='range'
                                        min={0}
                                        max={30}

                                        onChange={(e) => setTextInputRadius(e.target.value.toString() + 'px')}
                                    />
                                </div>


                                {/* input background color picker */}
                                <div>

                                    <label htmlFor='textinputcolor'>Email Input Background Color</label>
                                </div>
                                <div>

                                    <input type='color'
                                        value={textInputcolor}
                                        name='textinputcolor'
                                        onChange={(e) => setTextInputColor(e.target.value)}
                                    />
                                </div>


                                {/* border style picker */}
                                <div style={{ marginTop: '10px' }}>
                                    <label htmlFor='textborderstyle'>Email Border Style</label>
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

                                        <label htmlFor='textInputBorderSize'>Email Input Border Size</label>
                                    </div>
                                    <div>

                                        <input type='range'
                                            min={0}
                                            max={10}
                                            onChange={(e) => setTextInputBorderSize(e.target.value.toString())}
                                        />
                                    </div>
                                </div>


                                {/* border color */}
                                <div style={{ marginTop: '10px' }}>
                                    <div>

                                        <label htmlFor='textInputBorderColor'>Email Input Border Color</label>
                                    </div>
                                    <div>

                                        <input type='color'
                                            value={textInputBorderColor}
                                            onChange={(e) => setTextInputBorderColor(e.target.value)}
                                        />
                                    </div>
                                </div>


                                {/* border shadow length right */}
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


                                    {/* border shadow length bottom */}
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


                                    {/* border shadow blur */}
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


                                    {/* blur color */}
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
export default EmailInput