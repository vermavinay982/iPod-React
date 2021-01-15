import React from 'react';
const WheelUi =(props)=>{
    // function to handle wheel rotation
    function handleWheelClick(e)
    {
        const {handleZesture}=props;
        if (handleZesture){
            handleZesture(e);
        }

    }

    // function to handle menu click 
     function handlemenuClick(e)
    {
        const {handleMenuClick}=props;
        if(handleMenuClick){
        handleMenuClick();}
    }

    // function to hanlde enter click 
    function handleEnterclick()
    {
        const{handleClick}=props;
        if(handleClick){
            handleClick();
        }
    }
    return(
          //wheel container 
        <div  className="wrapper_wheel_container">
        <div className="wheel_container">
                  <div  className="wheel_button" onClick={handleWheelClick}>
                   <div className="enter-div">
                     <div className="menu_button" onClick={handlemenuClick} >
                         <span>
                             <i class="fas fa-house-user" aria-hidden="true"></i>

                         </span>
                     </div>
                     <div className="next_prev_button"  >
                         <div className="backward" >
                          <i class="fa fa-fast-backward" aria-hidden="true"></i>
                         </div>
                        <div className="small_circle" onClick={handleEnterclick}>

                        </div>
                        <div className="forward">
                         <i class="fa fa-fast-forward" aria-hidden="true"></i>
                        </div>
                        
                     </div>
                     <div className="play_pause_button">
                       <i class="fa fa-play" aria-hidden="true"></i>
                       <i class="fa fa-pause" aria-hidden="true"></i>
        
                     </div>
                     
                 </div>
              </div> 
        </div>
    </div>   
    )
}

export default WheelUi;