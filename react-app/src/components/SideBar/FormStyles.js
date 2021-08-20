import React from "react"
import {
    changeFormStyle
} from '../../store/styles'
import { useDispatch, useSelector } from 'react-redux'

const FormStyles = () => {
    const dispatch = useDispatch()
    const styles = useSelector(state => state.stylesReducer)

    return (
        <>
                            <h3>Form background color</h3>
                            <input type="color"
                                value={styles.formBackground}
                                onChange={(e) => dispatch(changeFormStyle(e.target.value, 'formBackground'))}
                            />

                            {/* form background border radius */}
                            <h3>Form Border radius</h3>
                            <input
                                type='range'
                                onChange={(e) => dispatch(changeFormStyle(e.target.value.toString() + 'px', 'backgroundRadius'))}
                                min={0}
                                max={30}
                                default={2}
                            />

                            <h3>Form Border Type</h3>
                            <div>

                                <label>Choose a Border Type</label>
                            </div>
                            <div>

                                <div style={{ margin: '10px' }}>
                                    <input type='radio'
                                        name='formBorderType'
                                        onClick={(e) => dispatch(changeFormStyle('none', 'borderType'))}
                                    ></input>

                                </div>
                                <div style={{ margin: '10px', border: '1px solid black' }}>
                                    <input type='radio'
                                        name='formBorderType'
                                        onClick={(e) => dispatch(changeFormStyle('solid', 'borderType'))}
                                    ></input>

                                </div>
                                <div style={{ margin: '10px', border: '1px dashed black' }}>
                                    <input type='radio'
                                        name='formBorderType'
                                        onClick={(e) => dispatch(changeFormStyle('dashed', 'borderType'))}
                                    ></input>

                                </div>
                                <div style={{ margin: '10px', border: '1px dotted black' }}>
                                    <input type='radio'
                                        name='formBorderType'
                                        onClick={(e) => dispatch(changeFormStyle('dotted', 'borderType'))}
                                    ></input>

                                </div>

                            </div>
                            <div>
                                <h3>Border Size</h3>
                            </div>
                            <div>
                                <input type='range'
                                    min={1}
                                    max={10}
                                    onChange={(e) => dispatch(changeFormStyle(e.target.value.toString(), 'borderSize'))}
                                ></input>
                            </div>
                            <div><h3>
                                Border Color
                            </h3>
                            </div>
                            <div>
                                <input type="color"
                                    value={styles.borderColor}
                                    onChange={(e) => dispatch(changeFormStyle(e.target.value, 'borderColor'))}
                                >

                                </input>
                            </div>

                            <div>
                                <h3>Form Shaddow Right</h3>
                            </div>
                            <div>
                                <input type='range'
                                    min={0}
                                    max={50}
                                    onChange={(e) => dispatch(changeFormStyle(e.target.value.toString(), 'shadowRight'))}
                                ></input>
                            </div>
                            <div>
                                <h3>Form Shadow Bottom</h3>
                            </div>
                            <div>
                                <input type='range'
                                    min={0}
                                    max={50}
                                    onChange={(e) => dispatch(changeFormStyle(e.target.value.toString(), 'shadowBottom'))}
                                ></input>
                            </div>
                            <div>
                                <h3>Form Shadow Blur</h3>
                            </div>
                            <div>
                                <input type='range'
                                    min={0}
                                    max={50}
                                    onChange={(e) => dispatch(changeFormStyle(e.target.value.toString(), 'shadowBlur'))}
                                ></input>
                            </div>
                            <div>
                                <h3>Form Shadow Color</h3>
                            </div>
                            <div>
                                <input type='color'
                                    value={styles.shadowColor}
                                    onChange={(e) => dispatch(changeFormStyle(e.target.value, 'shadowColor'))}
                                >

                                </input>
                            </div>
                            {/* form padding picker, CHANGE THIS */}
                            <h3>Form Padding</h3>
                            <input type='range'
                                min={0}
                                max={100}
                                onChange={(e) => dispatch(changeFormStyle(e.target.value.toString() + 'px', 'padding'))}
                            />

                            {/* form height */}
                            <h3>Form height</h3>
                            <input type='range'
                                min={0}
                                max={1000}
                                onChange={(e) => dispatch(changeFormStyle(e.target.value.toString() + 'px', 'height'))}
                            />

                            {/* form width */}
                            <h3>Form width</h3>
                            <input type='range'
                                min={0}
                                max={1000}
                                onChange={(e) => dispatch(changeFormStyle(e.target.value.toString() + 'px', 'width'))}
                            />
                        </>
    )
}

export default FormStyles