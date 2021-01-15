import React from 'react'
import WheelUi from '../../wheelUi.js';

const Playlist =(props)=>
{

    return (<div className='card2'>
        {/* rendering games div  */}
        <div className='settings-div'>
             <span className='title-center'> 🎶 list</span>
            

        </div>
         
        <WheelUi
                    handleZesture={props.handleZesture}
                    handleMenuClick={props.handleMenuClick1}
                    handleClick={props.handleClick}
                    />
        
      </div>
    )
}

export default Playlist;