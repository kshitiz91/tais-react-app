import React from "react";
import ReactDOM from "react-dom";
import { hot } from 'react-hot-loader';
import { HyperLink } from './common/hyperLink';
import { TopHeader } from './header/topheader/topHeader';
import './index.scss';
class App extends React.Component {
  render() {
  return (
  <div>
    <TopHeader></TopHeader>
  </div>
  );
  }
}

const AppWithHot = hot(module)(App);

var mountNode = document.getElementById("app");
ReactDOM.render(<AppWithHot/>, mountNode);
