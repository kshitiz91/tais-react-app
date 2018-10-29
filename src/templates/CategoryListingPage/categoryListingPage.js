import React, { Component } from 'react';
import {CategoryProdCard} from './CategoryProdList/categoryProdCard';
import { connect } from 'react-redux';
import  {requestSubCategoryListAction} from './categoryListingPage.action';

 class CategoryListingPage extends Component{
  constructor(props){
		super(props);

  }
  componentDidMount(){
		this.props.dispatch(requestSubCategoryListAction('men'));
  }
    render(){
       return(
         <div className="container">
					<div className="row mt-5">
 						<CategoryProdCard prods={this.props.subCategoryList}></CategoryProdCard>
					</div>
         </div>
       );
    }
}

const mapStateToProps = (subCategoryList) => {
	return (
		subCategoryList
	);

};

export default connect(mapStateToProps)(CategoryListingPage);
