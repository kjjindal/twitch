import { Avatar } from '@material-ui/core'
import {ChatBubble, LiveTv, Notifications } from '@material-ui/icons'
import React from 'react'
import './Profile.css';
import ProfileVideo from './ProfileVideo';

const Profile = () => {
    return (
        <>
        <div className="profile">
        <div className="profile__top">
        <div className="profile__topleft">
        <img className="profile__topleftlogo"  src="https://yt3.ggpht.com/yti/ANoDKi7sGxvceplHhuC9Q7uYxePfb4cFiVFOspHUbpqxMF8=s88-c-k-c0x00ffffff-no-rj-mo"  alt="Kalpit jindal"  />
        <div className="profile__detail">
        <h2>Kalpit jindal</h2>
        <p> 510k </p>

        </div>




        </div>
        <div className="profile__topright">
        <Notifications  />
        <LiveTv />
        <ChatBubble  />


        

        </div>


        </div>
        <div className="profile__menu">
            <h4 className="menu__active">Home </h4>
            <h4>Trending </h4>
            <h4> Videos </h4>
            <h4>Watch later </h4>
        </div>
         
        <div className="profile__bottom">
        <h4> Recent Videos   </h4>
        <div className="profile__videos">

        <ProfileVideo  url="https://www.youtube.com/embed/MKSj3WW8rTM"  title="facebook clone"  />
        <ProfileVideo  url="https://www.youtube.com/embed/dMGRTR97Ito" title="pubg op game play" />
        <ProfileVideo  url="https://www.youtube.com/embed/Bfwfaferhkk" title="45 kills in a match " />
        <ProfileVideo  url="https://www.youtube.com/embed/WQsqaQegr8o" title="45 kills in a match " />
        <ProfileVideo  url="https://www.youtube.com/embed/npAP72wcfGM" title="45 kills in a match " />
        <ProfileVideo  url="https://www.youtube.com/embed/XNRRFOiOnhA" title="45 kills in a match " />
        <ProfileVideo  url="https://www.youtube.com/embed/vStVx2rbNbc" title="45 kills in a match " />
        <ProfileVideo  url="https://www.youtube.com/embed/0-3Duc-OT8Q" title="45 kills in a match " />
        <ProfileVideo  url="https://www.youtube.com/embed/hlRTxA10eRA" title="45 kills in a match " />
        <ProfileVideo  url="https://www.youtube.com/embed/9lz5VV-8XEc" title="45 kills in a match " />
        <ProfileVideo  url="https://www.youtube.com/embed/op3yYtJTbmo" title="45 kills in a match " />
        <ProfileVideo  url="https://www.youtube.com/embed/KB3QaiEGJ98" title="45 kills in a match " />




        </div>




        </div>
        
            
        </div>
        </>
    )
}

export default Profile
