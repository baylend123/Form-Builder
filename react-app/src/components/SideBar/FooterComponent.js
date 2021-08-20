import React from 'react'
import github from '../../images/download.png'
const FooterComponent = () =>{
    return (
        <div style={{ width: '200px', height: '10vh', marginTop: '10px', display: 'flex', flexDirection: 'row' }} >
        <img style={{ height: '10vh', width: '100px', borderRadius: '20px' }} src={github} alt=''></img>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginTop: '10px' }}>Baylen Doss</div>
            <a style={{ marginTop: '10px' }} href="https://github.com/baylend123">GitHub</a>
            <a style={{ marginTop: '10px' }} href='https://www.linkedin.com/in/baylen-doss-6899541bb/'>LinkdIn</a>
        </div>
    </div>
    )
}
export default FooterComponent