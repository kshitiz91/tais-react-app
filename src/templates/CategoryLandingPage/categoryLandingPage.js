import React, { Component } from 'react';
import { ProductListCard} from '../../common/ProductListCard/ProductListCard';
import { Slider} from '../../common/slider/Slider';
import { TopBanner } from '../../common/topbanner/topBanner'
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
						<Slider></Slider>
 						<TopBanner></TopBanner>
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
