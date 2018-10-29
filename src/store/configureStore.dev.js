import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'
import createSagaMiddleware, {END} from 'redux-saga';


const configureStore = preloadedState => {
	const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(sagaMiddleware)
		),
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer)
    })
	}

	store.runSaga = sagaMiddleware.run;
	store.close = ()=> store.dispatch(END);
  return store
}

export default configureStore
