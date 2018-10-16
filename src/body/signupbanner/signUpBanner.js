import React from "react";
import ReactDom from "react-dom";
import './signUpBanner.scss';
import { HyperLink } from '../../common/hyperLink';
import { ImageArea } from '../../common/imageArea';
//import './topBannerImages.json

// Custom Sign Up Banners (funtional Component),  you need to pass all attributes values in props
// Added the common properties needed for a hyperlink
export function SignUpBanner (props){

    return(
      <div className="signUpBannerArea">
        <div className="row">
          <div className="col-sm-3 text-center">
            <ImageArea alt="" height="auto" src="//raderain-cdn.sirv.com/devs/home/home-logo-adspot.png?format=webp" className="signUpImg"/>
          </div>
          <div className="col-sm-6 text-center">
            Join T-Giant's frequen-t club for giant deals!
          </div>
          <div className="col-sm-3 text-center">
            <button>Sign Up Now</button>
          </div>
        </div>
      </div>
    )
}
