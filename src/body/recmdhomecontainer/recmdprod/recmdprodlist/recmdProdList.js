import React from "react";
import ReactDom from "react-dom";
import { HyperLink } from '../../../../common/hyperLink';
import { ImageArea } from '../../../../common/imageArea';
import {Link} from 'react-router-dom';

import './recmdProdList.scss';
// Custom Recommended Heading for homepage (funtional Component),  you need to pass all attributes values in props
// Added the common properties needed for a hyperlink
export function HomeRecmdProdList (props){
    const recmdProds = props.prods;
    const recmdProdListDisplay = recmdProds.map((prod,index)=>
      <div className="col-sm-3 homeRecmdItem" key={index}>
        <div className="homeRecmdDetail">
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
        recmdProdListDisplay
    )

}
