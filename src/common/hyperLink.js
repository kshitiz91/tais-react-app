import React from "react";
import ReactDom from "react-dom";

// Custom HyperLink (funtional Component),  you need to pass all attributes values in props
// Added the common properties needed for a hyperlink
export function HyperLink (props){
    const url = props.url ? props.url : '#';
    const title = props.title ? props.title : '';
    const rel = props.rel ? props.rel : '';
    const linkText = props.linkText ? props.linkText : '';
    const target = props.target ? props.target: '';
    const className = props.className ? props.className: '';

    return (
        <a href={url} title={title} rel={rel} target={target} className={className}>
            {linkText}
            {props.children}
        </a>
    )

}
