import React, {useState} from 'react'
import parse from 'html-react-parser';
import jsxToString from 'jsx-to-string';
const CodeArea = () => {
    const [formContentText, setFormContentText] = useState('')
    const fontLinkTag = '<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@300&family=Bree+Serif&family=Cormorant+Garamond&family=Jost:wght@300&family=Lobster&family=Permanent+Marker&family=Questrial&family=Rokkitt:wght@300&family=Sacramento&family=Source+Code+Pro&display=swap" rel="stylesheet" >'

    const getHtml = () => {
        const form = document.getElementsByTagName('form')[0].parentElement

        setFormContentText(jsxToString(parse(form.outerHTML)))
    }
  
    return (
        <div className='code-area'>
                <button
                    style={{

                        cursor: 'pointer',
                        fontFamily: 'Source Code Pro ',
                        overflow: 'hidden',
                        height: '10vh',
                        width: '5vw',
                        borderRadius: '5px',
                        backgroundColor: 'rgb(168,254,255)',
                        opacity: '0.7',
                        border: '1px solid white',
                        textAlign: 'left'
                    }}
                    onClick={getHtml}>Get JSX</button>
                <h3
                    style={{
                        marginLeft: '20px',


                    }}
                >JSX</h3>
                <pre style={{
                    height: '90%',
                    width: '50vw',
                    overflow: 'scroll',
                    overflowX: 'hidden'
                }}>
                    {formContentText}
                </pre>


                <h3>Link Tag For Fonts</h3>
                <pre
                    style={{
                        height: '90%',
                        width: '50vw',
                        overflow: 'scroll',
                        overflowY: 'hidden'
                    }}>
                    {fontLinkTag}
                </pre>


            </div>
    )
}
export default CodeArea