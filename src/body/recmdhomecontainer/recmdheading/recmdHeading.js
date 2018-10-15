import React from "react";
import ReactDom from "react-dom";
import { HyperLink } from '../../../common/hyperLink';
import './recmdHeading.scss';
// Custom Recommended Heading for homepage (funtional Component),  you need to pass all attributes values in props
// Added the common properties needed for a hyperlink
export function HomeRecmdHead (props){
    const recmdHeadLinks = ['New', 'Popular', 'Sale'];
    const dispRecmdHead =
        <h3 className="recmdHeadLinks">
        {recmdHeadLinks.map((link,index)=>
          <span key={index}><HyperLink url="#" title="recmdHead" className="recmdHomeLink">{link}</HyperLink></span>
        )}
        </h3>

    return (
        dispRecmdHead
    )

}
