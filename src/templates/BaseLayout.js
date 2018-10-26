import React, { Component } from 'react';
import { TopHeader } from '../header/topheader/topHeader';
import { HeaderMain } from '../header/mainheader/headerMain';
import { ShippingPromo } from '../body/shippingpromo/shippingPromo';
import Routes from '../routes/Routes';
import { Link } from 'react-router-dom';

export class BaseLayout extends Component {
  render(){
    return(
    <div className="base">
    <TopHeader></TopHeader>
    <HeaderMain></HeaderMain>
    <ShippingPromo></ShippingPromo>
    <Routes></Routes>
  </div>
  );
  } 
}