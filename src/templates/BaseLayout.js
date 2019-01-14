import React, { Component } from 'react';
import { TopHeader } from '../header/topheader/topHeader';
import { HeaderMain } from '../header/mainheader/headerMain';
import { ShippingPromo } from '../body/shippingpromo/shippingPromo';
import { Footer } from '../body/footer/footer';
import './BaseLayout.scss';

import Routes from '../routes/Routes';

export class BaseLayout extends Component {
  render(){
    return(
			<div className="base">
				<TopHeader></TopHeader>
				<HeaderMain></HeaderMain>
				<ShippingPromo></ShippingPromo>
        <div className="contentArea">
				    <Routes></Routes>
        </div>
        <Footer></Footer>
			</div>
  	);
  }
}
