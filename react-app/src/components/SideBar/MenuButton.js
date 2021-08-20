import React from 'react';
const MenuButton = ({text}) => {
    return (
        <button
        style={{

            cursor: 'pointer',
            fontFamily: 'Source Code Pro ',
            width: '100%',
            height: '40px',
            borderRadius: '5px',
            backgroundColor: 'rgb(168,254,255)',
            opacity: '0.7',
            border: '1px solid white',
            textAlign: 'left'
        }}
        >{text}</button>
    )
}
export default MenuButton