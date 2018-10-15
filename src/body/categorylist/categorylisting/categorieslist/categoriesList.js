import React from "react";
import ReactDom from "react-dom";

// Custom Categories List for homepage (funtional Component),  you need to pass all attributes values in props
// Added the common properties needed for a hyperlink
export function HomeCategoryList (props){
    // const categoryHeadText = props.text ? props.text : 'Shop By Categories';
    const list = props.categories
    alert(list.length);
    return (
      <ul>
          {list.map(function(name, index){
              return <li key={ index }>{name}</li>;
            })}
      </ul>
    )

}
