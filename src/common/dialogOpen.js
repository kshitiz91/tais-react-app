import React from 'react';
import {SignIn} from '../templates/registration/sign-in.js';

export const DialogOpen (WrappedComponent) => {
  return class SignIn extends React.Component {
		
		constructor(props){
			super(props);

			this.state={
				clickDialog: false
			}
		}
		onClickDialogButton(){
			this.setState.clickDialog=true;
		}
	render() {
		return ( < SignIn onClick = {this.onClickDialogButton} />
		);
	}
}
}

