import React, {Component} from 'react'
import L1Categories from './L1Categories';
import './megaMenu.scss';
export default class DropDownMenu extends Component{
	constructor(props){
		super(props);
		this.state = {
			displayMenu: false,
			menuObject: [{
				"L1CategoryName": "Plain tees",
				"id": 1,
				"url": "http://localhost:8080",
				"L2SubCategory": [{
					"L2SubCategoryName": "Mens",
					"url": "http://localhost:8080",
					"id": 4,
					"L3SubCategory": [{
						"url": "http://localhost:8080",
						"id": 10,
						"L3SubCategoryName": "LongSleeves"
					}, {
						"url": "http://localhost:8080",
						"id": 11,
						"L3SubCategoryName": "ShortSleeves"
					}, {
						"url": "http://localhost:8080",
						"id": 12,
						"L3SubCategoryName": "Sleeveless"
					}]
				}, {
					"L2SubCategoryName": "Womens",
					"url": "http://localhost:8080",
					"id": 5,
					"L3SubCategory": [{
						"url": "http://localhost:8080",
						"id": 13,
						"L3SubCategoryName": "LongSleeves"
					}, {
						"url": "http://localhost:8080",
						"id": 14,
						"L3SubCategoryName": "ShortSleeves"
					}, {
						"url": "http://localhost:8080",
						"id": 15,
						"L3SubCategoryName": "Sleeveless"
					}]
				}]
			}, {
				"L1CategoryName": "WorkWear",
				"id": 2,
				"url": "http://localhost:8080",
				"L2SubCategory": [{
					"L2SubCategoryName": "Mens",
					"url": "http://localhost:8080",
					"id": 6,
					"L3SubCategory": [{
						"url": "http://localhost:8080",
						"id": 16,
						"L3SubCategoryName": "Mens Formal"
					}, {
						"url": "http://localhost:8080",
						"id": 17,
						"L3SubCategoryName": "ShortSleeves"
					}, {
						"url": "http://localhost:8080",
						"id": 18,
						"L3SubCategoryName": "Sleeveless"
					}]
				}, {
					"L2SubCategoryName": "Womens",
					"url": "http://localhost:8080",
					"id": 7,
					"L3SubCategory": [{
						"url": "http://localhost:8080",
						"id": 19,
						"L3SubCategoryName": "LongSleeves"
					}, {
						"url": "http://localhost:8080",
						"id": 20,
						"L3SubCategoryName": "ShortSleeves"
					}, {
						"url": "http://localhost:8080",
						"id": 21,
						"L3SubCategoryName": "Sleeveless"
					}]
				}]
			}, {
				"L1CategoryName": "Fashion",
				"url": "http://localhost:8080",
				"id": 3,
				"L2SubCategory": [{
					"L2SubCategoryName": "Mens",
					"url": "http://localhost:8080",
					"id": 8,
					"L3SubCategory": [{
						"url": "http://localhost:8080",
						"id": 22,
						"L3SubCategoryName": "LongSleeves"
					}, {
						"url": "http://localhost:8080",
						"id": 23,
						"L3SubCategoryName": "ShortSleeves"
					}, {
						"url": "http://localhost:8080",
						"id": 24,
						"L3SubCategoryName": "Sleeveless"
					}]
				}, {
					"L2SubCategoryName": "Womens",
					"url": "http://localhost:8080",
					"id": 9,
					"L3SubCategory": [{
						"url": "http://localhost:8080",
						"id": 25,
						"L3SubCategoryName": "LongSleeves"
					}, {
						"url": "http://localhost:8080",
						"id": 26,
						"L3SubCategoryName": "ShortSleeves"
					}, {
						"url": "http://localhost:8080",
						"id": 27,
						"L3SubCategoryName": "Sleeveless"
					}]
				}]
			}]
		}
		this.toggleMenu = this.toggleMenu.bind(this);
	}

	toggleMenu(){
		this.setState({displayMenu : !this.state.displayMenu});
	}
	render(){
		return(
		<div>
			<button onClick={this.toggleMenu} className="menu-btn">
				Menu
			</button>
			{this.state.displayMenu ? (
				<nav className="custom-nav">
					<div>
						<ul className="l1-category">
							{this.state.menuObject.map((category)=>{
								return 	<L1Categories key={category.id} dataL1Item={category} />
							})}
						</ul>
					</div>
				</nav>
				) : (null)}
		</div>
		);
	}
}