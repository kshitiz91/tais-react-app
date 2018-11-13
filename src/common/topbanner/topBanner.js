import React from "react";
import ReactDom from "react-dom";
import './topBanner.scss';
import { Card } from '../card-column/card';
import values from './topBannerImages.json';

//import './topBannerImages.json

// Custom Top Banners (funtional Component),  you need to pass all attributes values in props
// Added the common properties needed for a hyperlink
export function TopBanner (props){
  const imageList=[
    {
      "id": 1,
      "title": "Calvin Klien",
      "url": "//raderain-cdn.sirv.com/Images/promotions/Sm_Promo_Womens.png?format=webp"
    },
    {
      "id": 2,
      "title": "Tommy",
      "url": "//raderain-cdn.sirv.com/Images/promotions/Sm_Promo_BandShirts.png?format=webp"
    },
    {
      "id": 3,
      "title": "Hilfiger",
      "url": "//raderain-cdn.sirv.com/Images/promotions/Sm_Promo_Kids.png?format=webp"
    },
    {
      "id": 4,
      "title": "Gucci",
      "url": "//raderain-cdn.sirv.com/Images/promotions/Sm_Promo_Kids.png?format=webp"
    },
    {
      "id": 5,
      "title": "Createz",
      "url": "//raderain-cdn.sirv.com/Images/promotions/Sm_Promo_BandShirts.png?format=webp"
    },
    {
      "id": 6,
      "title": "Liam",
      "url": "//raderain-cdn.sirv.com/Images/promotions/Sm_Promo_Kids.png?format=webp"
    }
  ]; 
  
    return(
      <div className="topBannerArea">
      <div className="row">
      <Card prods={values}></Card>
      </div>
      </div>
    )
}
