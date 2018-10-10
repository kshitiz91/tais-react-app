import React from "react";
import ReactDom from "react-dom";

// Custom Input Box (funtional Component),  you need to pass all attributes values in props
// Added the common properties needed for a hyperlink
export function InputBox (props){
    const type = props.type ? props.type : 'text';
    const autocomplete = props.autocomplete ? props.autocomplete : '';
    const disabled = props.disabled ? props.disabled : '';
    //const required = props.required ? props.required : '';
    //const readonly = props.readonly ? props.readonly: '';
    const placeholder = props.placeholder ? props.placeholder: '';
    const name = props.name ? props.name: '';
    const className = props.className ? props.className: '';

    return (
        <input type={type} autocomplete={autocomplete} disabled={disabled}  placeholder={placeholder} name={name} className={className}/>
    )

}
