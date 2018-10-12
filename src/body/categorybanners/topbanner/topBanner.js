import React from "react";
import ReactDom from "react-dom";
import './topBanner.scss';
import { HyperLink } from '../../../common/hyperLink';
import { ImageArea } from '../../../common/imageArea';
//import './topBannerImages.json

// Custom Top Banners (funtional Component),  you need to pass all attributes values in props
// Added the common properties needed for a hyperlink
export function TopBanner (props){

    return(
      <div className="topBannerArea">
      <div className="row">
        <div className="col-sm-4">
          <figure>
            <HyperLink url="#" title="category page" className="catLink">
              <ImageArea alt="" height="auto" src="//raderain-cdn.sirv.com/Images/promotions/Sm_Promo_Womens.png?format=webp" className="catImg"/>
            </HyperLink>
          </figure>
        </div>
        <div className="col-sm-4">
          <figure>
            <HyperLink url="#" title="category page" className="catLink">
              <ImageArea alt="" height="auto" src="//raderain-cdn.sirv.com/Images/promotions/Sm_Promo_BandShirts.png?format=webp" className="catImg"/>
            </HyperLink>
          </figure>
        </div>
        <div className="col-sm-4">
          <figure>
            <HyperLink url="#" title="category page" className="catLink">
              <ImageArea alt="" height="auto" src="//raderain-cdn.sirv.com/Images/promotions/Sm_Promo_Kids.png?format=webp" className="catImg"/>
            </HyperLink>
          </figure>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <figure>
            <HyperLink url="#" title="category page" className="catLink">
              <ImageArea alt="" height="auto" src="//raderain-cdn.sirv.com/Images/promotions/Sm_Promo_Womens.png?format=webp" className="catImg"/>
            </HyperLink>
          </figure>
        </div>
        <div className="col-sm-4">
          <figure>
            <HyperLink url="#" title="category page" className="catLink">
              <ImageArea alt="" height="auto" src="//raderain-cdn.sirv.com/Images/promotions/Sm_Promo_BandShirts.png?format=webp" className="catImg"/>
            </HyperLink>
          </figure>
        </div>
        <div className="col-sm-4">
          <figure>
            <HyperLink url="#" title="category page" className="catLink">
              <ImageArea alt="" height="auto" src="//raderain-cdn.sirv.com/Images/promotions/Sm_Promo_Kids.png?format=webp" className="catImg"/>
            </HyperLink>
          </figure>
        </div>
      </div>
      </div>
    )
}
