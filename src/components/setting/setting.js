import React from 'react'
import WheelUi from '../../wheelUi.js';

const Setting =(props)=>
{
    // function to handle menu click 

    return (
       
        <div className='card2'>
             {/* rendering seetings  div  */}
            <div className='settings-div'>
                {/* <span className='title-center'><i class="fa fa-cogs" aria-hidden="true"> Setting</i></span> */}
                <div className='title'>> Alarm </div>
                <div className='title'>> Wallpaper </div>
                <div className='title'>> Time </div>
                <div className='title'>> Ring </div>
                
            </div>
            <WheelUi

                handleZesture={props.handleZesture}
                handleMenuClick={props.handleMenuClick}
            />
         </div>
    )
}

export default Setting