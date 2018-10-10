import React from "react";
import ReactDom from "react-dom";

// Custom Image (funtional Component),  you need to pass all attributes values in props
// Added the common properties needed for a image
export function ImageArea (props){
    const align = props.align ? props.align : '';
    const alt = props.alt ? props.alt : '';
    const height = props.height ? props.height : '';
    const src = props.src ? props.src : '';
    const width = props.width ? props.width: '';
    const className = props.className ? props.className: '';

    return (
        <img align={align} alt={alt} height={height} src={src} width={width} className={className} />
    )

}
