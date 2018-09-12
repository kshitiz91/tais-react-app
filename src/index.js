import React from "react";
import ReactDOM from "react-dom";
import { hot } from 'react-hot-loader'
import {HyperLink} from './common/hyperLink'
class App extends React.Component {
  render() {
  return (
  <div>
    Hello {this.props.name}
    <HyperLink url="www.shiftmx.com" title="shiftmx us" linkText ="ShiftMx US"/>
  </div>
  );
  }
}

const AppWithHot = hot(module)(App);

var mountNode = document.getElementById("app");
ReactDOM.render(<AppWithHot name="Jane" />, mountNode);