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
			console.log(this.props.subCategoryList)
       return(
         <div className="container">
					<div className="row mt-5">
 						<ProductListCard prods={this.props.subCategoryList}></ProductListCard>
					</div>
				 </div>
       );
    }
}

const mapStateToProps = ({categoryListPage}) => {
	return ({
		subCategoryList:categoryListPage.subCategoryList
	});

};

export default connect(mapStateToProps)(CategoryListingPage);
