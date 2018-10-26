import React from "react";
import ReactDOM from "react-dom";
import { hot } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import {BaseLayout} from './templates/BaseLayout'

import './index.scss';

class App extends React.Component {
  render() {
  return (
    <BrowserRouter>
    <BaseLayout/>
  </BrowserRouter>
  );
  }
}

const AppWithHot = hot(module)(App);

var mountNode = document.getElementById("app");
ReactDOM.render(<AppWithHot/>, mountNode);
