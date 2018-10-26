import React, { Component } from 'react';
import {CategoryProdCard} from './CategoryProdList/categoryProdCard';
import axios from 'axios';

export default class CategoryListingPage extends Component{
  constructor(props){
    super(props)
    this.state = {
      prodList: []
    }
  }
  componentDidMount(){
    axios.get('http://demo5108170.mockable.io/getProdList')
    .then(json => this.setState({prodList:json.data.CO}));
  }
    render(){
      const recmdProd = [
        {
          id: 1,
          url: "//raderain.sirv.com/T-Giant/502F_420007110_main.png",
          title: "Sun Drop",
          category: "Women's Striped Loose Tank",
          cost: "345.90"
        },
        {
          id: 2,
          url: "//raderain.sirv.com/T-Giant/502F_420007110_main.png",
          title: "Sun Drop",
          category: "Women's Striped Loose Tank",
          cost: "345.90"
        },
        {
          id: 3,
          url: "//raderain.sirv.com/T-Giant/502F_420007110_main.png",
          title: "Sun Drop",
          category: "Women's Striped Loose Tank",
          cost: "345.90"
        },
        {
          id: 4,
          url: "//raderain.sirv.com/T-Giant/502F_420007110_main.png",
          title: "Sun Drop",
          category: "Women's Striped Loose Tank",
          cost: "345.90"
        }
      ];
       return(
         <div className="container">
         <div className="row mt-5"> 
         <CategoryProdCard prods={this.state.prodList}></CategoryProdCard>
         </div>
         </div>       
       );
    }
}            
