import React from "react";
import ReactDom from "react-dom";
import { Link } from 'react-router-dom';

import './footerLinks.scss';
import { HyperLink } from '../../../common/hyperLink';
import { ImageArea } from '../../../common/imageArea';

// Custom Footer links (funtional Component),  you need to pass all attributes values in props
export function FooterLinks (props){

    const list = props.links;
    const displayLinks = list.map((link,index)=>
      <div className="col-sm-2 footLinks" key={index}>
        <h5>{link.heading}</h5>
        <ul className="subLinks">
          {
            link.subLinks.map((subLink,index)=>
              <li>
                <Link to={subLink} >{subLink}</Link>
              </li>
            )
          }
        </ul>
      </div>
    );

    return(
      displayLinks
    )
}
