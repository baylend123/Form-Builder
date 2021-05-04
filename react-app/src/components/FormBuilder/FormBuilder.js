import React from 'react';
import parse from 'html-react-parser'
import './FormBuilder.css'
const FormBuilder = () => {
    const formContent = '<form className="form"><h1>form</h1></form>'


    return (
        <div className='form-builder'>
            {parse(formContent)}
            <div className='code-area'>
                <div className='HTML'>
                    <h3>HTML</h3>
                    {formContent}
                </div>
                <div className='CSS'>
                    <h3>CSS</h3>
                </div>

            </div>

        </div>
    )
}
export default FormBuilder