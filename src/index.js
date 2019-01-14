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
import Loadable from 'react-loadable';

const preloadedState = window.__PRELOADED_STATE__ || {};
delete window.__PRELOADED_STATE__;

const store = configureStore(preloadedState);
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
 Loadable.preloadReady().then(()=>{
	ReactDOM.hydrate( <AppWithHot/> , mountNode);
 }).catch(()=>console.log('document has error'));

