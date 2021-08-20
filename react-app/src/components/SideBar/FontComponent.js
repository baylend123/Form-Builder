import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { changeFormStyle, } from '../../store/styles'
const FontComponent = () => {

    const thanks = 'Hey, thanks for using my APP! Love You <3'
    const formFont = useSelector(state => state.stylesReducer.font)
    console.log(formFont)
    const dispatch = useDispatch()


    return(
        <>
                            <label htmlFor="font-select">Select Font Below</label>
                            <select name='font-select'

                                onChange={(e) => dispatch(changeFormStyle(e.target.value, 'font'))}
                            >

                                <option value='Source Code Pro' style={{ fontFamily: ' Source Code Pro , monospace ' }}>Source Code Pro</option>
                                <option value='Archivo' style={{ fontFamily: 'Archivo monospace' }}>Archivo</option>
                                <option value='Bree Serif' style={{ fontFamily: 'Bree Serif, monospace' }}>Bree Serif</option>
                                <option value='Cormorant Garamond' style={{ fontFamily: 'Cormorant Garamond, monospace' }}>Cormorant Garamond</option>
                                <option value='Jost' style={{ fontFamily: 'Jost, monospace' }}>Jost</option>
                                <option value='Lobster' style={{ fontFamily: 'Lobster, monospace' }}>Lobster</option>
                                <option value='Permanent Marker' style={{ fontFamily: 'Permanent Marker, monospace' }}>Permanent Marker</option>
                                <option value='Questrial' style={{ fontFamily: 'Questrial, monospace' }}>Questrial</option>
                                <option value='Rokkitt' style={{ fontFamily: 'Rokkitt, monospace' }}>Rokkitt</option>
                                <option value='Sacramento ' style={{ fontFamily: 'Sacramento, monospace' }}>Sacramento </option>


                            </select>
                            <h3>Example Text</h3>
                            <p style={{ fontFamily: formFont }}>{thanks} </p>
                        </>
    )
}
export default FontComponent