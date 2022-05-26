import React, { useState } from "react";
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>

export const VideoSlider = () => {
    const [menu, setMenu] = useState(true);

  const MenuFun = () => {
    return (
      <>
        <div className="Video_side_bar">
          <p onClick={()=> {
              setMenu (false)
          }}> <MenuOpenIcon />
           </p>
          <p> <FacebookIcon/> </p>
           <p> <YouTubeIcon /> </p>
          <p> <i class="fa-brands fa-yelp"></i></p>
        </div>
      </>
    );
  };

  const Menu_OptionFun = () => {
    return (
        <>
          <div className="menu_option">
          
          <p onClick={()=> {
              setMenu (true)
          }}> HOME </p>
            
            <p> OVERVIEW</p>
            <p> ROOMS</p>
            <p> GALLERY</p>
            <p> SPACIALS</p>
            <p> DESTINATION</p>
            <p> DIRECTION</p>
            <p> CONTACT US</p>
            <p> RESERVATION</p>
            <p> ACCESSBILITY</p>
          </div>
          </>
          );
  }
    return(
        <>
        {menu? <MenuFun />: <Menu_OptionFun/>}
        <div className="logo_div">
            <img src="https://www.montereystagecoachlodge.com/assets/B/themes/montereystagecoachlodge/img/logo-new.webp" alt="" />
            <p className="logo_line"> by BLINK HOTELS <sup>TM</sup> </p>
        </div>

        <div className="near_logo">
        <p className="head_p">RESERVATIONS</p>
        <p className="head_p2">LOWEST RATE GARENTEE</p>
         </div>
      <div className="Video_div">
        <video width="100%" height="auto" autoPlay muted>
          <source
            src="https://www.montereystagecoachlodge.com/assets/B/themes/montereystagecoachlodge/img/Video_Website.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      {/* <div className='video_iframe'>
            
                <iframe src="https://www.montereystagecoachlodge.com/assets/B/themes/montereystagecoachlodge/img/Video_Website.mp4" frameBorder="0"></iframe>
            </div> */}
    </>
  );
};
