import React from "react";
import ReactDom from "react-dom";
import { ImageArea } from '../../../common/imageArea';

import './categoryProdCard.scss';
// Custom Recommended Heading for homepage (funtional Component),  you need to pass all attributes values in props
// Added the common properties needed for a hyperlink
export function CategoryProdCard (props){
    const categoryProds = props.prods;
    const categoryProdsDisplay = categoryProds.map((prod,index)=>
      <div className="col-sm-3 categoryProdItem" key={index}>
        <div className="categoryProdDetail">
          <figure>
          <ImageArea alt="" height="auto" src={prod.url} className="prodImg"/>
          </figure>
          <p className="prodName">{prod.title}</p>
          <p className="prodCat">{prod.category}</p>
          <p className="prodCost">${prod.cost}</p>
        </div>
      </div>
    )

    return (
      categoryProdsDisplay
    )

}
