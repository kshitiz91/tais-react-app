import React from "react";
import ReactDom from "react-dom";
import './primaryHeading.scss';
// Custom Primary Heading (funtional Component),  you need to pass all attributes values in props
// Added the common properties needed for a hyperlink
export function PrimaryHeading (props){

    return (
        <div className="primaryHeading">
          <h1>
          IF WE DON’T HAVE IT,
          <br/>
          IT’S PROBABLY NOT A T-SHIRT.
          </h1>
        </div>
    )

}
