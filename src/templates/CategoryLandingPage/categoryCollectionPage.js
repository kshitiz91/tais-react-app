import React, { Component } from 'react';
import { ProductListCard} from '../../common/ProductListCard/ProductListCard'
import { connect } from 'react-redux';
import  {requestSubCategoryListAction} from './categoryLandingPage.action';
import getCatgList from '../../utils/ApiComp/ApiComp'

 class CategoryLandingPage extends Component{
  constructor(props){
		super(props);

  }
  componentDidMount(){
	  console.log(this.props.match.params.catgId);
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

const mapStateToProps = ({categoryListPage}) => {
	return ({
		subCategoryList:categoryListPage.subCategoryList
	});

};

export default connect(mapStateToProps)(CategoryLandingPage);
