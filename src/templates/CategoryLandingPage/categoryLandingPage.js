import React, { Component } from 'react';
import { Slider} from '../../common/slider/Slider';
import { TopBanner } from '../../common/topbanner/topBanner'
import { connect } from 'react-redux';
import  {requestCategoryLandingAction} from './categoryLandingPage.action';

 class CategoryLandingPage extends Component{
  constructor(props){
		super(props);
  }
  componentDidMount(){
		this.props.dispatch(requestCategoryLandingAction(this.props.match.params.catgId));
  }

render(){
		 console.log(this.props.categoryContent);
		const images=["https://i.pinimg.com/originals/b8/ce/12/b8ce12af4e594bcb26b8f55b0377dad4.jpg","https://cdn.shopify.com/s/files/1/0691/6759/files/Main-Banner_2048x2048.jpg","https://cdn.shopify.com/s/files/1/0047/6282/files/banner_1.jpg","http://www.design-a-site.co.uk/includes/templates/design-a-site/images/banner1.jpg"];
       return(
         <div className="container">
					<div className="row mt-5">
						<Slider images={this.props.categoryContent}></Slider>
						<div className="mt-3">hr	</div>
 						<TopBanner></TopBanner>
					</div>
				 </div>
       );
    }
}

const mapStateToProps = ({categoryLandingPage}) => {
	return ({
		categoryContent:categoryLandingPage.categoryContent
	});

};


export default connect(mapStateToProps)(CategoryLandingPage);
