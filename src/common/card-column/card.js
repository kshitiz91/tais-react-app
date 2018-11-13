import React from "react";
import ReactDom from "react-dom";
import './card.scss';
import { HyperLink } from '../../common/hyperLink';
import { ImageArea } from '../../common/imageArea';

export function Card (props){
  const cardProd = props.prods;
  const cardProdList = cardProd.map((prod,index)=>
  <div className="col-sm-4 newClass" key={index}>
    <figure>
            <HyperLink url="prod.url" title="category page" className="catLink">
              <ImageArea alt="" height="auto" src={prod.url} className="img-fluid" alt={prod.title} />
            </HyperLink>
          </figure>
    </div>
  )
    return (
      cardProdList
      )
}
