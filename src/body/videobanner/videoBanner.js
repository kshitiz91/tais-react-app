import React from "react";
import ReactDom from "react-dom";
import './videoBanner.scss';


// Custom video ad Banners (funtional Component),  you need to pass all attributes values in props
// Added the common properties needed for a hyperlink
export function VideoBannerHome (props){

    return(
      <div className="videoAdBanner">
        <video class="video-inline-player" controls poster="//raderain-cdn.sirv.com/devs/home/CHARLI.jpg?format=webp" preload="none" src="//raderain-cdn.sirv.com/T-Giant/Video/Video_T-Giant_3Girls.mp4" index="0" thumbnailimage="//raderain-cdn.sirv.com/devs/home/CHARLI.jpg?format=webp" cover="//raderain.sirv.com/T-Giant/Cat_Workwear_588x400.png" videourl="//youtu.be/uIHOSzbNT8Q" logo="logo">
          <source src="//raderain-cdn.sirv.com/T-Giant/Video/Video_T-Giant_3Girls.mp4" type="type/mp4"/>
        </video>
        <video class="video-inline-player" controls poster="//raderain-cdn.sirv.com/devs/home/PROFESSOR.jpg?format=webp" preload="none" src="//raderain-cdn.sirv.com/devs/home/PROFESSOR.mp4" index="1" thumbnailimage="//raderain-cdn.sirv.com/devs/home/PROFESSOR.jpg?format=webp" cover="//raderain.sirv.com/T-Giant/Cat_Workwear_588x400.png" videourl="//youtu.be/zZfpUZHeYAM" logo="logo">
          <source src="//raderain-cdn.sirv.com/devs/home/PROFESSOR.mp4" type="type/mp4"/>
        </video>
      </div>
    )
}
