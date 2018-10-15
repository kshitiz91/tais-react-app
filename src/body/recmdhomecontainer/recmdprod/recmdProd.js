import React from "react";
import ReactDom from "react-dom";
import { HomeRecmdProdList } from './recmdprodlist/recmdProdList'

import './recmdProd.scss';
// Custom Recommended Heading for homepage (funtional Component),  you need to pass all attributes values in props
// Added the common properties needed for a hyperlink
export function HomeRecmdProd (props){
    const recmdProd = [
      {
        id: 1,
        url: "//raderain.sirv.com/T-Giant/502F_420007110_main.png",
        title: "Sun Drop",
        category: "Women's Striped Loose Tank",
        cost: "345.90"
      },
      {
        id: 2,
        url: "//raderain.sirv.com/T-Giant/502F_420007110_main.png",
        title: "Sun Drop",
        category: "Women's Striped Loose Tank",
        cost: "345.90"
      },
      {
        id: 3,
        url: "//raderain.sirv.com/T-Giant/502F_420007110_main.png",
        title: "Sun Drop",
        category: "Women's Striped Loose Tank",
        cost: "345.90"
      },
      {
        id: 4,
        url: "//raderain.sirv.com/T-Giant/502F_420007110_main.png",
        title: "Sun Drop",
        category: "Women's Striped Loose Tank",
        cost: "345.90"
      }
    ];

    return (
        <div className="row homeRecmdList">
          <HomeRecmdProdList prods={recmdProd}></HomeRecmdProdList>
        </div>
    )

}
