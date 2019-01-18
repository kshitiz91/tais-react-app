import React from "react";
import { HyperLink } from '../../common/hyperLink';
import './topHeader.scss';

export function TopHeader(props){
  return (
    <div className="topHeader">
        <HyperLink url="#" title="Select Country" linkText ="Select Your Country" className="cSelect"/>
        <HyperLink url="/custSupport" title="Customer Support" linkText ="Customer Support" className="topLinks"/>
        <HyperLink url="/trackOrder" title="Track Order" linkText ="Track Your Order" className="topLinks"/>
        <HyperLink url="#" title="Sign Up" linkText ="Sign Up" className="accLinks"/>|
      	<HyperLink url="#" title="Sign In" linkText ="Sign In" className="accLinks" />
    </div>
  )
}
