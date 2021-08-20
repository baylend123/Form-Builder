import React from 'react';
import { useSelector } from 'react-redux'
import FormComponent from './FormComponent';
import AddToFormButton from './AddFormButton'
import CodeArea from './CodeArea'


import './FormBuilder.css'
import './form.css'


const FormBuilder = () => {

    let styleState = useSelector(state => state?.stylesReducer)
  
    return (
        <div className='form-builder-conatiner'>
        <div className='form-builder'>
        <FormComponent styleState={styleState}/>
        <AddToFormButton />
        </div>
        <CodeArea />   
        </div>
    )
}
export default FormBuilder