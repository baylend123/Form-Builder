import React from 'react'
const MenuAreaComponent = ({Component, state, area}) => {
    return (
        <>
        <div>
        <div onClick={() => menuButtonFunc('text')}>
        <Compemonent text={'Text Input'} />
        </div>
    </div>
    <div style={{height: currentMenuItem === 'text' ? '100%' : '',
                overflow: currentMenuItem === 'text' ? 'scroll' : '', }}>
        {currentMenuItem === 'text' ? <TextInput /> : '' }
    </div>
    </>
    )
}