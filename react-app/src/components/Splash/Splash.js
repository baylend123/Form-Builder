import React from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../store/session'
import testGif from '../../images/preview.gif'

const Splash = () => {
    const history = useHistory()
    const dispatch = useDispatch();

    const demoLogin = async (e) => {
        e.preventDefault()
        await dispatch(login('demo@aa.io', 'password'));
        history.push('/home')
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <h3 style={{
                fontSize: '80px',
                marginTop: '20px',
                marginBottom: '20px',
            }}>JSX Form Builder</h3>
            <span>

                <button style={{
                    marginRight: '50px',

                    "marginTop": "10px",
                    "fontFamily": "\"Source Code Pro\"",
                    "border": "2px solid",
                    "boxShadow": "black 5px 3px 5px",

                    "borderRadius": "2px",
                    "width": "96px"
                }} onClick={() => history.push('/login')} >Login</button>
                <button style={{
                    marginRight: '50px', "marginTop": "10px",
                    "fontFamily": "\"Source Code Pro\"",
                    "border": "2px solid",
                    "boxShadow": "black 5px 3px 5px",

                    "borderRadius": "2px",
                    "width": "96px"
                }} onClick={() => history.push('/sign-up')} >Sign Up</button>
                <button
                    style={{
                        marginRight: '50px', "marginTop": "10px",
                        "fontFamily": "\"Source Code Pro\"",
                        "border": "2px solid",
                        "boxShadow": "black 5px 3px 5px",

                        "borderRadius": "2px",
                        "width": "96px"
                    }}
                    onClick={demoLogin} >Demo Login</button>
            </span>
            <h2>Build and style a form with a GUI and get the coresponding JSX code for use in your own projects</h2>
            <img style={{
                width: '90vw'
            }} src={testGif} alt='' />

        </div>
    )
}
export default Splash