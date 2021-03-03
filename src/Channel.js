import React from 'react';
import './Channel.css';
import {Avatar} from '@material-ui/core';
import {FiberManualRecord } from '@material-ui/icons';
 
const Channel=({profilePic,followers,name,recommended})=>{
    return (
        <>
        <div className="channel">
        
        <div className="channel__details">
        <Avatar src={profilePic} alt={name}  />
        <p> {name} 
        <strong>{followers} </strong> </p>
        </div>
        
        <FiberManualRecord fontSize="small"  className={`green ${recommended && 'red'}`}  />

        </div>


        </>
    )
}


export default Channel