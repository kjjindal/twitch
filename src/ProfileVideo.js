import React from 'react';
import './ProfileVideo.css';


const ProfileVideo=({url,title})=>{
    return (
        <>
        <div className="profilevideo">
        <iframe
         width="255"
          height="180"
           src={url}
            frameBorder="0"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>

              </iframe>


        </div>


        </>
    )
}


export default ProfileVideo