import React from 'react'
import WheelUi from '../wheelUi'

const CardFlow =(props)=>
{
    // function to handle menu click 

    return (
        <div>
        <div className='screen-coverflow'>

           
           <span className='cardflow-title'>Photos </span>
            <div>
               
            </div>
            

        </div>
        <WheelUi

        handleZesture={props.handleZesture}
        handleMenuClick={props.handleMenuClick}
        handleClick={props.handleClick}
        />
        
        
     </div>
    )
}

export default CardFlow;