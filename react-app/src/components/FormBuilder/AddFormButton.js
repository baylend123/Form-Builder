import React, {useState} from 'react'

const AddToFormButton = () => {
    const [addToMyFormsText, setAddToMyFormsText] = useState('Add To My Forms')

    const saveToMyForms = async (e) => {
        if (addToMyFormsText === 'Added!') {
            return
        }

        e.preventDefault();
        setAddToMyFormsText('Added!')
        const form = document.getElementsByTagName('form')[0].parentElement
        const string = form.outerHTML


        await fetch('/api/forms/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 'jsx': string })
        })


    }
    return (
        <div style={{ marginTop: '40px' }}>
                <button type="submit"
                    style={{

                        cursor: 'pointer',
                        fontFamily: 'Source Code Pro ',
                        width: '100%',
                        height: '30px',
                        borderRadius: '5px',
                        backgroundColor: 'rgb(168,254,255)',
                        opacity: '0.7',
                        border: '1px solid white',
                        textAlign: 'left'
                    }}
                    onClick={saveToMyForms}
                >
                    {addToMyFormsText}
                </button>
            </div>
    )
}
export default AddToFormButton