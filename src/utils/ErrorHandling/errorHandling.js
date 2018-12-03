import React, { Component } from 'react';

class ErrorHandling extends Component{
	constructor(props){
		super(props);
		this.state = {hasError: false};
	}

	componentDidCatch(){
		this.setState({hasError: true});

	}

	render(){
		if(this.state.hasError){
			return <div>Something went wrong</div>;
		}
		return this.props.children;
	}
}