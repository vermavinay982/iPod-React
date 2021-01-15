import React from 'react';

class Card extends React.Component
{

    // function to handle wheel rotation
    handleWheelClick=(e)=>
    {
        const {handleZesture}=this.props;
        handleZesture(e);
    }

    // function to handle menu click 
    handlemenuClick=()=>
    {
        const {handleMenuClick}=this.props;
        handleMenuClick();
    }

    // function to handle enter click 
    handleEnterclick=()=>
    {
        const {handleClick}=this.props;
        handleClick();
    }
    render()
    {
        const {showCardflow,
            showGame,
            showMusic,
            showSetting,

            }=this.props;
            console.log('in cart js',showCardflow,
            showGame,
            showMusic,
            showSetting)
         
        return (
            <div >
                
                {/* card div  */}
               <div className='card'>
                    <p className='title'>R-pod</p>
                    <div className={`card-list ${showCardflow ?'active':''}`} >
                        Gallery 📷
                    </div>
                    <div className={`card-list ${showMusic ?'active':''}`}>
                        Youtube 🎶
                    </div>
                    <div className={`card-list ${showGame ?'active':''}`}>
                        PinBall 🎲
                    </div>
                    <div className={`card-list ${showSetting ?'active':''}`}>
                        Settings 📐
                    </div>
              </div>
            
          
              
               
            </div>
        )
    }
}
export default Card;