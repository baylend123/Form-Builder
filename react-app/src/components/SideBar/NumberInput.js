import React from 'react';
import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {changeTextStyle} from '../../store/inputStyles'
const NumberInput = () => {
    const dispatch = useDispatch()
    const styles = useSelector(state => state.inputReducer)
    const [numberInputLabel, setNumberInputLabel]= useState('Your Text Here')
    
    
    const dragStart = e => {
        const target = e.target
        e.dataTransfer.setData('elementId', target.id)
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
                                        fontFamily: `${styles.formFont}`,
                                        borderRadius: styles.textInputRadius,
                                        backgroundColor: styles.textInputcolor,
                                        border: `${styles.textInputBorderSize}px ${styles.textInputBorder} ${styles.textInputBorderColor}`,
                                        width: `${styles.textInputWidth}px`,
                                        boxShadow: `${styles.textInputBoxShadowRight}px ${styles.textInputBoxShadowBottom}px ${styles.textInputBoxShadowBlur}px ${styles.textInputBoxShadowColor}`
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
                                            onChange={(e) => dispatch(changeTextStyle(e.target.value.toString(), 'textInputWidth'))(e.target.value.toString())}
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

                                        onChange={(e) => dispatch(changeTextStyle(e.target.value.toString() + 'px','textInputRadius' ))}
                                    />
                                </div>

                                {/* background color chooser */}
                                <div>

                                    <label htmlFor='textinputcolor'>Number Input Background Color</label>
                                </div>
                                <div>

                                    <input type='color'
                                        value={styles.textInputcolor}
                                        name='textinputcolor'
                                        onChange={(e) => dispatch(changeTextStyle(e.target.value.toString() + 'px','textInputRadius' ))}
                                    />
                                </div>

                                {/* border style area */}
                                <div style={{ marginTop: '10px' }}>
                                    <label htmlFor='textborderstyle'>Number Border Style</label>
                                    <div style={{ border: '3px solid black', marginTop: '10px' }}>
                                        <input
                                            name='textborderstyle'
                                            type='radio'
                                            onClick={() => dispatch(changeTextStyle('solid','textInputBorder' ))}

                                        />
                                    </div>
                                    <div style={{ border: '3px dotted black', marginTop: '10px' }}>
                                        <input
                                            name='textborderstyle'
                                            type='radio'
                                            onClick={() => dispatch(changeTextStyle('dotted','textInputBorder' ))}

                                        />
                                    </div>
                                    <div style={{ border: '3px dashed black', marginTop: '10px' }}>
                                        <input
                                            name='textborderstyle'
                                            type='radio'
                                            onClick={() => dispatch(changeTextStyle('dashed','textInputBorder' ))}

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
                                            onChange={(e) => dispatch(changeTextStyle(e.target.value.toString(),'textInputBorderSize' ))}
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
                                            value={styles.textInputBorderColor}
                                            onChange={(e) => dispatch(changeTextStyle(e.target.value,'textInputBorderColor' ))}
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
                                            onChange={(e) => dispatch(changeTextStyle(e.target.value.toString(),'textInputBoxShadowRight' ))}
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
                                            onChange={(e) => dispatch(changeTextStyle(e.target.value.toString(),'textInputBoxShadowBottom' ))}
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
                                            onChange={(e) => dispatch(changeTextStyle(e.target.value.toString(),'textInputBoxShadowBlur' ))}
                                        />
                                    </div>

                                    {/* box shadow color picker */}
                                    <div>

                                        <label htmlFor='textInputBoxShadowColor' >Box Shadow color </label>
                                    </div>
                                    <div>

                                        <input type='color'
                                            value={styles.textInputBoxShadowColor}
                                            onChange={(e) => dispatch(changeTextStyle(e.target.value.toString(),'textInputBoxShadowColor' ))}
                                        />
                                    </div>
                                </div>
                            </div>
                        </>
    )
}
export default NumberInput