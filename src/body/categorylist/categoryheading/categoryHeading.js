import React from "react";

// Custom Category Heading for homepage (funtional Component),  you need to pass all attributes values in props
// Added the common properties needed for a hyperlink
export function HomeCategoryHead (props){
    const categoryHeadText = props.text ? props.text : 'Shop By Categories';

    return (
        <h3>{categoryHeadText}</h3>
    )

}
