import React from "react";
import ReactDom from "react-dom";
import { ProductListCard} from '../../../common/ProductListCard/ProductListCard';
import {Link} from 'react-router-dom'; 

import './recmdProd.scss';
// Custom Recommended Heading for homepage (funtional Component),  you need to pass all attributes values in props
// Added the common properties needed for a hyperlink
export function HomeRecmdProd (props){
  const recmdProd = [
    {
      id: 1,
      imageUrl: "//raderain.sirv.com/T-Giant/502F_420007110_main.png",
      name: "Sun Drop",
      category: "Women's Striped Loose Tank",
      cost: "345.90"
    },
    {
      id: 2,
      imageUrl: "//raderain.sirv.com/T-Giant/502F_420007110_main.png",
      name: "Sun Drop",
      category: "Women's Striped Loose Tank",
      cost: "345.90"
    },
    {
      id: 3,
      imageUrl: "//raderain.sirv.com/T-Giant/502F_420007110_main.png",
      name: "Sun Drop",
      category: "Women's Striped Loose Tank",
      cost: "345.90"
    },
    {
      id: 4,
      imageUrl: "//raderain.sirv.com/T-Giant/502F_420007110_main.png",
      name: "Sun Drop",
      category: "Women's Striped Loose Tank",
      cost: "345.90"
    }
  ];

    return (
        <div className="row homeRecmdList">
          <ProductListCard prods={recmdProd}></ProductListCard>
          <b><Link to='/categoryLandingPage/undershirts'>Link</Link></b>
        </div>
    )

}
