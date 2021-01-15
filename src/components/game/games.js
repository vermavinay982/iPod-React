import React from 'react'

import WheelUi from '../../wheelUi.js';

const Game =(props)=>
{
    

    
    return (<div className='card2'>
        {/* rendering games div  */}
        <div className='settings-div'>
            <div className='game'>
                        <div style = {styles.container}>

                        <div style = {styles.ball} class="ball"></div>
                        <div 
                         style = {styles.rod1} class='rod'
                        >
                          Rod 1</div>
                        <div 
                         style = {styles.rod2} class='rod'
                        >
                          Rod 2</div>

                        </div>
                        <script type="text/javascript" src='script.js'></script>

                        </div>

        </div>
        
        <WheelUi

        handleZesture={props.handleZesture}
        handleMenuClick={props.handleMenuClick}
        />
        
      </div>
    )
}


const styles = {

container :{
    position: "relative"
},

ball: {
    width: "20px",
    height: "20px",
    // backgroundColor: "red",
    position: "fixed",
    top: "40px",
    left: "52.5%",
    borderRadius: "50%",
},


rod1: {
  fontSize:"20px",
  width:"70px",
  height: "20px",
  position: "fixed",
  left: "20%",
  borderRadius: "25px" ,
  textAlign: "center",
  color: "white",
  fontWeight: "bold",
    backgroundColor: "blue",
    top: "14px",
},

rod2: {
  fontSize:"20px",
  width:"70px",
  height: "20px",
  position: "fixed",
  left: "50%",
  borderRadius: "25px" ,
  textAlign: "center",
  color: "white",
  fontWeight: "bold",
    backgroundColor: "blueviolet",
    top: "200px"
}

}

export default Game;