import React from "react";
import ReactDom from "react-dom";
import './footerArea.scss';
import { HyperLink } from '../../../common/hyperLink';
import { ImageArea } from '../../../common/imageArea';
import { FooterLinks } from './footerlinks/footerLinks';
//import './topBannerImages.json

// Custom Footer (funtional Component),  you need to pass all attributes values in props
export function Footer (props){

  const footLinks = [
    {
      id: 1,
      heading: "Useful Links",
      subLinks: ['About Us', 'Leadership', 'Newsletters', 'Contact Us']
    },
    {
      id: 2,
      heading: "Our Products",
      subLinks: ['About Us', 'Leadership', 'Newsletters', 'Contact Us']
    },
    {
      id: 3,
      heading: "Information",
      subLinks: ['About Us', 'Leadership', 'Newsletters', 'Contact Us']
    },
    {
      id: 4,
      heading: "Extras",
      subLinks: ['About Us', 'Leadership', 'Newsletters', 'Contact Us']
    }
  ];

    return(
      <div className="footer">
        <div className="row footerarea">
          <div className="col-sm-4">
            <HyperLink url="/" title="Website Name" className="logoLink">
              <ImageArea alt="logo" height="auto" src="https://66.media.tumblr.com/2028d8087066b1e19ab5e3c35ae550b2/tumblr_p7wo3aQqjb1s2oauno1_1280.png" width="200" className="webLogo"/>
            </HyperLink>
            <div className="copyright">Powered By</div>
            <div>TAIS Commerce</div>
          </div>
          <FooterLinks links={footLinks}></FooterLinks>
        </div>
        <hr />
      </div>
    )
}
