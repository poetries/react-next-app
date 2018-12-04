import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import apiMiddleware from './middleware/api'
import rootReducer from './reducers';

export function initializeStore(initialState = {}) {
	const middlewares = [thunkMiddleware, apiMiddleware]
	
  return createStore(
		rootReducer, 
		initialState, 
		composeWithDevTools(applyMiddleware(...middlewares))
	)
}
