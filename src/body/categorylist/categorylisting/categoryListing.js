import React from "react";
import ReactDom from "react-dom";
import  { HomeCategoryList } from './categorieslist/categoriesList'
// Custom Category Listing for homepage (funtional Component),  you need to pass all attributes values in props
// Added the common properties needed for a hyperlink
export function HomeCategoryListing (props){
    // const categoryHeadText = props.text ? props.text : 'Shop By Categories';
    const catList = ['undershirts', 'workwear', 'casual', 'plain tees'];

    return (
        <div className="row">
          <HomeCategoryList categories={catList}></HomeCategoryList>
        </div>
    )

}
