import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class SignIn extends Component {
	constructor(props){
			super(props);
			this.state = {
				open: false,
			};
	}
	

	handleOpen = () => {
		this.setState({
			open: true
		});
	};

	handleClose = () => {
		this.setState({
			open: false
		});
	};


	 render() {
	 		const actions = [ 
			  < TextField
			  hintText = "Enter username"
				floatingLabelText = "UserName" />, 
				
				 < TextField
				 hintText = "Enter password"
				 floatingLabelText = "Password"
				 type = "password" / > ,

				< FlatButton label = "Cancel" primary = {true}
	 			onClick = {
	 				this.handleClose} />,

				 <FlatButton label = "Sign In" primary = {true} keyboardFocused = {true}
	 			onClick = {
	 				this.handleClose}/>,
			 ];
			 
			return ( 
			<div>
					<RaisedButton label = "Dialog"
						onClick = {
						this.handleOpen
					}/> 
					<Dialog title = "Dialog With Actions"
						actions = {actions} modal = {false} open = {this.state.open}
						onRequestClose = {
						this.handleClose
					} >
				The actions in this window were passed in as an array of React objects. 
				</Dialog> 
				</div>
			);
			}
 }

