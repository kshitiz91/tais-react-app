import React from "react";
import ReactDOM from "react-dom";
import { hot } from 'react-hot-loader';
import { HyperLink } from './common/hyperLink';
import { ImageArea } from './common/imageArea';
import { TopHeader } from './header/topheader/topHeader';
import { HeaderMain } from './header/mainheader/headerMain';
import { ShippingPromo } from './body/shippingpromo/shippingPromo';

import './index.scss';
class App extends React.Component {
  render() {
  return (
  <div>
    <TopHeader></TopHeader>
    <HeaderMain></HeaderMain>
    <ShippingPromo></ShippingPromo>
  </div>
  );
  }
}

const AppWithHot = hot(module)(App);

var mountNode = document.getElementById("app");
ReactDOM.render(<AppWithHot/>, mountNode);
