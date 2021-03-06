import React from "react";
import { HyperLink } from '../../../../common/hyperLink';
import { ImageArea } from '../../../../common/imageArea';
import { Link } from 'react-router-dom';
import './categoriesList.scss'

// Custom Categories List for homepage (funtional Component),  you need to pass all attributes values in props
// Added the common properties needed for a hyperlink
export function HomeCategoryList (props){
    // const categoryHeadText = props.text ? props.text : 'Shop By Categories';
    const list = props.categories
    //alert(list.length);
    const displayCat = list.map((cat, index) =>
        <div key={index} className="col-sm-3 catListItem">
         <div className="catListPanel">
          <HyperLink url="#" title="category" className="catListLink">
              <ImageArea alt="" height="auto" src="//raderain.sirv.com/T-Giant/Cat_Undershirts_588x400.png?format=webp" className="catListImg"/>
            </HyperLink>
            <p className="text-capitalize">{cat}</p>
            <Link to={`/category/${cat}`}>
              <button type="button" className="btn btn-primary">
                    View Products
              </button>
            </Link>
         </div>
        </div>);
    return (
      displayCat
    );

}
