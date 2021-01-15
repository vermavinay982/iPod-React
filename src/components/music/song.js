import React from 'react';
import WheelUi from '../../wheelUi.js';

const Song =(props)=>
{   

    return (
        <div className='card2'>
        <div className='music-player-container'>
            
            
               
                    <iframe width="190" height="200" style={{borderRadius:"5%"}}
                    src="https://www.youtube.com/embed/tgbNymZ7vqY">
                    </iframe>

        </div>
                 <WheelUi
                    handleZesture={props.handleZesture}
                    handleMenuClick={props.handleMenuClick1}
                    handleClick={props.handleClick}
                    />
        </div>
        
    )
}

export default Song;