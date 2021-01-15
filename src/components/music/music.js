import React from 'react'
import WheelUi from '../../wheelUi'
import ZingTouch from 'zingtouch';
import Song from './song';
import Playlist from './playlist';
import Artist from './artist';
class Music  extends React.Component
{  
    constructor()
    {
        super();

        // music state 
        this.state={
            showCardflow:false,
            showArtist:false,
            showPlaylist:false,
            showSongs:false,
            showMusicComponent:false
        }
    }

    // function to handle zesture 
    handleZesture=(e)=>
    {
        console.log('state',this.state);

        const context=this;
        var distance=0;
        var region=new ZingTouch.Region(e.target)
            region.bind(e.target,'rotate',function(e)
            {

                console.log('last distancce details',e.detail.distanceFromLast);
                console.log('rorate details',e.detail.distanceFromOrigin);
                distance=e.detail.distanceFromOrigin;


                // setting active state based on condition
                if(distance>0 && distance<85) 
                {
                    context.setState({
                       
                        showSongs:true,
                        showArtist:false,
                        showPlaylist:false
                    })
                }
                else if(distance>85 && distance<177 )
                {
                    context.setState({
                        
                        showSongs:false,
                        showArtist:true,
                        showPlaylist:false
                    })
                }
                else if (distance>177 && distance<264 )
                {
                     context.setState({
                        
                         showPlaylist:true,
                         showArtist:false
                        })
                }
                else if(distance>244 && distance < 340)
                {
                    context.setState({
                       
                        showPlaylist:true,
                        showArtist:false,
                        showSongs:false
                    })
                }

                if(distance>-90 && distance<0)
                {
                    context.setState({
                       
                        showArtist:true,
                        showPlaylist:false,
                        showSongs:false
                    });
                }
                else if(distance>-168 && distance<-90)
                {
                    context.setState({
                       
                        showSongs:true,
                        showArtist:false
                    });
                }
            })  
    }


    // function to handle enter click 
    handleClick=()=>
    {
       
        this.setState({showMusicComponent:true})
    }

    // function to handle menu click
    handleMenuClick1=()=>
    {
       
        const {showMusicComponent}=this.state;
        if(showMusicComponent)
        {
            this.setState({showMusicComponent:false})
        }
        else{
            const {handleMenuClick}=this.props;handleMenuClick()
          
        }
       

        
    }
    // function to handle wheel rotation
    handleWheelClick=(e)=>
    {
        const {handleZesture}=this.props;
        handleZesture(e);
    }

  

    // function to hanlde enter click 
    handleEnterclick=()=>
    {
        const{handleClick}=this.props;
        handleClick();
    }
    
    render()
    {


        const {showArtist,showMusicComponent,showPlaylist,showSongs}=this.state;
       
        console.log('state',this.state);
        return (

            <div> 

                {/* // rendering diffrent component based on codition */}
                 
                {showMusicComponent?showSongs?<div className='card2'><Song   handleMenuClick1={this.handleMenuClick1}  handleZesture={this.handleZesture}
                   
                    handleClick={this.handleClick}  /></div>:showArtist?<div className='card2'><Artist   handleMenuClick1={this.handleMenuClick1}  handleZesture={this.handleZesture}
                   
                    handleClick={this.handleClick} /></div>:<div className='card2'><Playlist  handleMenuClick1={this.handleMenuClick1}  handleZesture={this.handleZesture}
                   
                    handleClick={this.handleClick} /></div>
                 : 
                
                 <div className='card'>
                      <span className='title'>Music</span>
                 <div className={`card-list ${showSongs?'active':''}`}>
                 All songs
                 </div>
                 <div className={`card-list ${showArtist?'active':''}`}>
                 Artist
                 </div>
                 <div className={`card-list ${showPlaylist?'active':''}`}>
                 Playlist
                 </div>
                 <WheelUi

                        handleZesture={this.handleZesture}
                        handleMenuClick={this.handleMenuClick1}
                        handleClick={this.handleClick}
                        />
               
                
            </div>
                }
                
                
                 
           
            </div>
        )
    }
}

export default Music;