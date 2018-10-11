import React, {Component} from 'react'
import {TextBox} from '../common/textBox'
class Search extends Component{
    constructor(props){
        super(props)
        this.handleOnChange = this.handleOnChange.bind(this);
        this.state = {query:'', result:[]};
    }
    handleOnChange(e){
        this.setState({query: e.target.value});
    }
    render(){
        return(
            <div>
                
            </div>
        )
    }
}