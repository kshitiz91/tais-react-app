function List(props){
    const className = props.className ? props.className :'';
    const options = props.result.map(r=>(
        <li key={r.id} className ={className}>
            {r.name}
        </li>
    ))
    return options;
}