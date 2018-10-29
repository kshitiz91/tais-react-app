import React,{ Component } from "react";
import ReactDOM from "react-dom";
import { hot } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import {BaseLayout} from './templates/BaseLayout'
import configureStore from './store/configureStore'
import './index.scss';
import rootSaga from './saga';
import { Provider } from 'react-redux';
import 'babel-polyfill';

const store = configureStore();
store.runSaga(rootSaga);
class App extends Component {
  render() {
  return (
		<Provider store={store}>
			<BrowserRouter>
				<BaseLayout/>
			</BrowserRouter>
		</Provider>
  );
  }
}

const AppWithHot = hot(module)(App);

var mountNode = document.getElementById("app");
ReactDOM.render(<AppWithHot/>, mountNode);
