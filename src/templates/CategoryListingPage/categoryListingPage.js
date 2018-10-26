import React, { Component } from 'react';
import {CategoryProdCard} from './CategoryProdList/categoryProdCard';

export default class CategoryListingPage extends Component{
  
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
         <CategoryProdCard prods={recmdProd}></CategoryProdCard>
         </div>
         </div>       
       );
    }
}            
