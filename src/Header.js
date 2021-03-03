import React from 'react';

import './Header.css';
import {Comment, CropTwoTone, Inbox, MoreHoriz,Search} from '@material-ui/icons';
import { Avatar } from '@material-ui/core';

function Header(){
    return (
        <>

        <div className="header">
        <div className="header__left">
   
        <img src="https://pngimg.com/uploads/twitch/twitch_PNG56.png"  alt="twitch"   className="header__leftlogo"  />
        <h2>Following </h2>
        <h2>Browse </h2>
        <div className="header__verticalline"></div>
        <h2>Esports</h2>
        <h2>Music</h2>
        <MoreHoriz />

        </div>
        <div className="header__center">

<div className="header__centerinput">
     <input type="text"  placeholder="Search channel here ..." />
            <Search />
</div>
       



        </div>
        <div className="header__right">
        <CropTwoTone />
        <Inbox  />
        <Comment />

        <Avatar src="https://yt3.ggpht.com/yti/ANoDKi7sGxvceplHhuC9Q7uYxePfb4cFiVFOspHUbpqxMF8=s88-c-k-c0x00ffffff-no-rj-mo"  alt="kalpit jindal"  />
        </div>

       


        </div>


        </>
    )
}


export default Header


//auto setup component part
// rafce
// rfce