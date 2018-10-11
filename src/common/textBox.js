

export function TextBox(props){     
    const isRequired = props.isRequired !=undefined ? props.isRequired : true;
    const isDisabled = props.isDisabled !=undefined ? props.isDisabled : false;
    const name = props.name;
    const onChange = props.handleOnChange ? this.handleOnChange : {};
    const className = props.className? props.className : '';
    return (
        <input type="text" className={className} name={name} required={isRequired} disabled={isDisabled} onChange ={onChange} />
    )
    
}