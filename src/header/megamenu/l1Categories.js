import React, {Component} from 'react'
import List from '../../common/list'
import { HyperLink } from '../../common/hyperLink';
import L2Categories from './L2Categories';


export default class L1Categories extends Component{
		constructor(props){
			super(props);
			this.handleHover = this.handleHover.bind(this);
			this.handleLeave = this.handleLeave.bind(this);
			this.state = {isHover: false};
		}

		handleHover(){
			this.setState({isHover:true});
		}

		handleLeave(){
			this.setState({isHover: false});
		}

		render(){
			const category = this.props.dataL1Item;
			return (
				<li className="menu-cat" onMouseEnter={this.handleHover} onMouseLeave={this.handleLeave}>
					<HyperLink	title={category.L1CategoryName} linkText= {category.L1CategoryName} url={category.url}/>
					{this.state.isHover?(
					<ul className="sub-menu-l1">
						{category.L2SubCategory.map((cat)=>{
								return < L2Categories key ={cat.id} dataL2Item={cat} />
						})}
					</ul>
					): (null)}
				</li>
			);
		}
}