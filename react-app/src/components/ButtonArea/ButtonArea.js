import React from 'react';
import {useState} from 'react'
import {useSelector} from 'react-redux'


const ButtonArea = () => {
    const formFont = useSelector(state => state.inputReducer.font)
    const [buttonBorderRadius, setButtonBorderRadius] = useState('')
    const [buttonBorderType, setButtonBorderType] = useState('')
    const [buttonBorderSize, setButtonBorderSize] = useState('2')
    const [buttonBorderColor, setButtonBorderColor] = useState('')
    const [buttonWidth, setButtonWidth] = useState('')
    const [buttonHeight, setButtonHeight] = useState('')
    const [buttonColor, setButtonColor] = useState('')
    const [buttonShadowRight, setButtonShadowRight] = useState('2')
    const [buttonShadowBottom, setButtonShadowBottom] = useState('2')
    const [buttonShadowBlur, setButtonShadowBlur] = useState('2')
    const [buttonShadowColor, setButtonShadowColor] = useState('black')

    const dragStart = e => {
        const target = e.target
        e.dataTransfer.setData('elementId', target.id)
    }
    const setNormalButtonText = (e) => {
        const startFormHeader = document.getElementById('normal-button')
        startFormHeader.innerText = e.target.value
    }
    const setSubmitButtonText = (e) => {
        const startFormHeader = document.getElementById('submit')
        startFormHeader.innerText = e.target.value
    }
    return(
        <>
                            <div>
                                <h3>Drag and drop your button when you are done styling</h3>
                            </div>
                            <h3>Submit Button :</h3>
                            <input style={{ marginRight: '10px' }} type="text" onChange={setSubmitButtonText}></input>
                            <button style={{
                                cursor: 'pointer',
                                marginTop: '20px',
                                fontFamily: `${formFont}`,
                                borderRadius: `${buttonBorderRadius}px`,
                                border: `${buttonBorderSize}px ${buttonBorderType} ${buttonBorderColor}`,
                                backgroundColor: buttonColor,
                                height: `${buttonHeight}px`,
                                width: `${buttonWidth}px`,
                                boxShadow: `${buttonShadowRight}px ${buttonShadowBottom}px ${buttonShadowBlur}px ${buttonShadowColor}`
                            }}
                                type='submit'
                                id='submit'
                                draggable='true'
                                onDragStart={dragStart}
                            >
                                Submit
                             </button>
                            <h3>Normal Button :</h3>
                            <input style={{ marginRight: '10px' }} type="text" onChange={setNormalButtonText}></input>
                            <button style={{
                                cursor: 'pointer',
                                marginTop: '20px',
                                fontFamily: `${formFont}`,
                                borderRadius: `${buttonBorderRadius}px`,
                                border: `${buttonBorderSize}px ${buttonBorderType} ${buttonBorderColor}`,
                                backgroundColor: buttonColor,
                                height: `${buttonHeight}px`,
                                width: `${buttonWidth}px`,
                                boxShadow: `${buttonShadowRight}px ${buttonShadowBottom}px ${buttonShadowBlur}px ${buttonShadowColor}`
                            }}

                                id='normal-button' draggable='true' onDragStart={dragStart}>Click me
                                </button>


                            {/* button styles area */}
                            <h3>Button Styles</h3>
                            <div
                                style={{
                                    height:'43%',
                                    overflow: 'scroll',
                                    overflowX: 'hidden',

                                    border: '1px solid white',
                                }}
                            >
                                <div>
                                    <h3 style={{ marginTop: '10px' }}>Button Styles :</h3>

                                </div>
                                <div>
                                    <label>Button Background Color :</label>
                                </div>
                                <div>
                                    <input type='color'
                                        value={buttonColor}
                                        onChange={(e) => setButtonColor(e.target.value)}
                                    >

                                    </input>
                                </div>
                                <div>
                                    <label htmlFor='button-border-radius'>Button Border Radius</label>
                                </div>
                                <div>
                                    <input type='range'
                                        onChange={(e) => setButtonBorderRadius(e.target.value.toString())}
                                        min={0}
                                        max={30}
                                    ></input>
                                </div>
                                <div>
                                    <label >Button Width</label>
                                </div>
                                <div>
                                    <input type='range'
                                        onChange={(e) => setButtonWidth(e.target.value.toString())}
                                        min={50}
                                        max={300}
                                    ></input>

                                </div>
                                <div>
                                    <label >Button height</label>
                                </div>
                                <div>
                                    <input type='range'
                                        onChange={(e) => setButtonHeight(e.target.value.toString())}
                                        min={10}
                                        max={100}
                                    ></input>
                                </div>
                                <div>
                                    <label>Button Border Type</label>
                                </div>
                                <div>


                                    <div style={{ margin: '10px' }}>
                                        None
                                    <input type='radio'
                                            onClick={() => setButtonBorderType('')}
                                        >

                                        </input>

                                    </div>

                                    <div style={{ border: '3px solid black', marginTop: '10px' }}>
                                        <input
                                            name='textborderstyle'
                                            type='radio'
                                            onClick={() => setButtonBorderType('solid')}

                                        />
                                    </div>
                                    <div style={{ border: '3px dotted black', marginTop: '10px' }}>
                                        <input
                                            name='textborderstyle'
                                            type='radio'
                                            onClick={() => setButtonBorderType('dotted')}

                                        />
                                    </div>
                                    <div style={{ border: '3px dashed black', marginTop: '10px' }}>
                                        <input
                                            name='textborderstyle'
                                            type='radio'
                                            onClick={() => setButtonBorderType('dashed')}

                                        />
                                    </div>
                                </div>
                                <div>
                                    <label>Button Border Size</label>
                                </div>
                                <div>
                                    <input type='range'
                                        min={0}
                                        max={10}
                                        onChange={(e) => setButtonBorderSize(e.target.value.toString())}
                                    >

                                    </input>
                                </div>
                                <div>
                                    <label>Button Border Color</label>
                                </div>
                                <div>
                                    <input type='color'
                                        value={buttonBorderColor}
                                        onChange={(e) => setButtonBorderColor(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div>
                                    <label>Button Shadow Options</label>
                                </div>

                                <div style={{ marginTop: '10px' }}>
                                    <div>
                                        <label htmlFor='textInputBoxShadowRight' >Box Shadow length Right </label>
                                    </div>
                                    <div>

                                        <input name='textInputBoxShadowRight' type='range'
                                            min={0}
                                            max={25}
                                            onChange={(e) => setButtonShadowRight(e.target.value.toString())}
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
                                            onChange={(e) => setButtonShadowBottom(e.target.value.toString())}
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
                                            onChange={(e) => setButtonShadowBlur(e.target.value.toString())}
                                        />
                                    </div>

                                    {/* box shadow color picker */}
                                    <div>

                                        <label htmlFor='textInputBoxShadowColor' >Box Shadow color </label>
                                    </div>
                                    <div>

                                        <input type='color'
                                            value={buttonShadowColor}
                                            onChange={(e) => setButtonShadowColor(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                        </>
    )
}

export default ButtonArea