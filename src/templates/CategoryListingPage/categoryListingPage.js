import React, { Component } from 'react';
import { ProductListCard} from '../../common/ProductListCard/ProductListCard'
import { connect } from 'react-redux';
import  {requestSubCategoryListAction} from './categoryListingPage.action';

 class CategoryListingPage extends Component{
  constructor(props){
		super(props);

  }
  componentDidMount(){
		this.props.dispatch(requestSubCategoryListAction(this.props.match.params.catgId));
  }
    render(){
       return(
         <div className="container">
					<div className="row mt-5">
 						<ProductListCard prods={this.props.subCategoryList}></ProductListCard>
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
