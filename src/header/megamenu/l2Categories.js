import React, {Component} from 'react'
import { HyperLink } from '../../common/hyperLink'
import L3Categories from './L3Categories';

export default class L2Categories extends Component{
	constructor(props) {
			super(props);
	}

	render(){
		const category = this.props.dataL2Item;
		return (
			<li key={category.id.toString()} className="sub-menu-item-l1">
				<HyperLink url={category.url} title={category.L2SubCategoryName} linkText={category.L2SubCategoryName} />
				<div>
					<ul className="sub-menu-l2">
						{category.L3SubCategory.map((cat)=>{
							return <L3Categories key={cat.id} dataL3Item={cat}/>
						})}
					</ul>
				</div>
			</li>
			);
	}
}