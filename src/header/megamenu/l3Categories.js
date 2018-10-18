import React, {Component} from 'react'
import { HyperLink } from '../../common/hyperLink'

export default class L3Categories extends Component{

	constructor (props){
		super(props);
	}

	render(){
		const category = this.props.dataL3Item;
		return (
			<li key={category.id.toString()} className="sub-menu-item-l2">
				<HyperLink url={category.url} title={category.L3SubCategoryName} linkText={category.L3SubCategoryName}/>
			</li>
		);
	}

}