import React from 'react';
import { useState } from 'react'
import TextInput from './TextInput'
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import NumberInput from './NumberInput'
import MenuButton from './MenuButton'
import ButtonArea from './ButtonArea'
import FormStyles from './FormStyles';
import './Sidebar.css'
import FooterComponent from './FooterComponent'
import FontComponent from './FontComponent'
import HeaderColorComponent from './HeaderColorComponent'
// import MenuAreaComponent from './MenuAreaComponent'

const Sidebar = () => {
    const [currentMenuItem, setCurrentMenuItem] = useState('form')
    const menuButtonFunc = (string) => {
        setCurrentMenuItem(string)
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className='sidebar'>
                <div>
                    <div onClick={() => menuButtonFunc('header')}>
                        <MenuButton text={'Form Header'} /></div>
                    {currentMenuItem === 'header' ? <HeaderColorComponent /> : ''}
                </div>
                <div>
                    <div onClick={() => menuButtonFunc('font')}>
                        <MenuButton text={'Form Font'} />
                    </div>
                </div>
                <div>
                    {currentMenuItem === 'font' ? <FontComponent /> : '' }
                </div>
                <div>
                    <div onClick={() => menuButtonFunc('text')}>
                    <MenuButton text={'Text Input'} />
                    </div>
                </div>
                <div style={{height: currentMenuItem === 'text' ? '100%' : '',
                            overflow: currentMenuItem === 'text' ? 'scroll' : '', }}>
                    {currentMenuItem === 'text' ? <TextInput /> : '' }
                </div>
                <div>
                    <div onClick={() => menuButtonFunc('email')}>
                        <MenuButton text={'Email Input'} />
                    </div>
                </div>
                <div
                    style={{height: currentMenuItem === 'email' ? '100%' : '',
                            overflow: currentMenuItem === 'email' ? 'scroll' : '',}} >
                    {currentMenuItem === 'email'? <EmailInput /> : '' }
                </div>
                <div>
                    <div onClick={() => menuButtonFunc('password')}>
                        <MenuButton text={'Password Input'} />
                    </div>
                </div>
                <div
                    style={{height: currentMenuItem === 'password' ? '100%' : '',
                            overflow: currentMenuItem === 'password' ? 'scroll' : '',}}>
                    {currentMenuItem === 'password' ? <PasswordInput /> : '' }
                </div>
                <div>
                    <div onClick={() => menuButtonFunc('number')}>
                        <MenuButton text={'Number Input'} />
                    </div>
                </div>
                <div
                    style={{height: currentMenuItem === 'number' ? '100%' : '',
                            overflow: currentMenuItem === 'number' ? 'scroll' : '',}} >
                    {currentMenuItem === 'number' ? <NumberInput /> : '' }
                </div>
                <div>
                    <div onClick={() => menuButtonFunc('buttons')}>
                        <MenuButton text={'Button Area'} />
                    </div>
                </div>
                <div
                    style={{height: currentMenuItem === 'buttons'  ? '100%' : '',
                            overflow: currentMenuItem === 'buttons'  ? 'scroll' : '' }}>
                    {currentMenuItem === 'buttons' ? <ButtonArea /> : '' }
                </div>
                <div>
                    <div onClick={() => menuButtonFunc('form')}>
                        <MenuButton text={'Form Styles'} />
                    </div>
                </div>
                <div
                    style={{height: currentMenuItem === 'form' ? '100%' : '',
                            overflow: currentMenuItem === 'form' ? 'scroll' : ''}}>
                    {currentMenuItem === 'form'? <FormStyles /> : ''}
                </div>
            </div >
            <FooterComponent />
        </div >)}
export default Sidebar