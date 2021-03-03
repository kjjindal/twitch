import React from 'react';
import './Sidebar.css';
import Channel from './Channel';

const Sidebar=()=>{
    return (
        <>
        <div className="sidebar">
        <h5>FOLLOWED CHANNELS </h5>
        <Channel profilePic="https://yt3.ggpht.com/ytc/AAUvwnh0TdCCpYgnzVBCXIe7JT3R8uQlYLXuTy-bjw9T=s176-c-k-c0x00ffffff-no-rj-mo" name="RJ Raunac No-Po" followers="1.52M"  />
        <Channel profilePic="https://yt3.ggpht.com/yti/ANoDKi7sGxvceplHhuC9Q7uYxePfb4cFiVFOspHUbpqxMF8=s88-c-k-c0x00ffffff-no-rj-mo" name="Kalpit Jindal" followers="510k"  />
        <hr />
<h5> RECOMMENDED CHANNEL </h5>
<Channel recommended profilePic="https://yt3.ggpht.com/ytc/AAUvwngLC-LbeLm8-f0WFTx_zOnb05KPnJFi0yK2ePElLA=s176-c-k-c0x00ffffff-no-rj-mo" name="GtxPreet" followers="2.3M"  />
<Channel recommended profilePic="https://yt3.ggpht.com/ytc/AAUvwngnx5hQ_fwJonenefMi8ZgeuxveS5p0wtYLXrMAEg=s176-c-k-c0x00ffffff-no-rj-mo" name="SinsTv" followers="4.5M"  />
<Channel recommended profilePic="https://yt3.ggpht.com/ytc/AAUvwnh5ezpU_2OC0A4F9XNx10JOSRXCH3GfMhLwy8klNg=s176-c-k-c0x00ffffff-no-rj-mo" name="CarryMinati" followers="29.1M"  />
<p>SHOW MORE </p>

        </div>



        </>
    )
}




export default Sidebar;