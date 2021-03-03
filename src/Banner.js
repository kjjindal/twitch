import React from 'react';
import './Banner.css';
import {FiberManualRecord} from '@material-ui/icons';

function Banner(){
    return (
        <>

        <div className="banner">

        <div className="banner__boxes">
            <div className="banner__box1">
                <img src="https://yt3.ggpht.com/ytc/AAUvwnghIajKe2sJZSnMjm0nhjRkAmBUzvg0Ox5uOMsw4fs=s176-c-k-c0x00ffffff-no-rj"  alt="kalpit jindal" className="banner__logo"   />
                <div className="banner__info">
                    <h2> Kalpit Jindal </h2>
                    <p> <FiberManualRecord fontSize="small"  className="green" />       online           </p>

                </div>
 
            </div>
            <div className="banner__box2">
              <iframe 
            width="250"
             height="200"
              src="https://www.youtube.com/embed/d9XU572q0HI"
               frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             allowFullScreen></iframe>  
            </div>

            
            


            </div>
        </div>



        </>
    )


}


export default Banner