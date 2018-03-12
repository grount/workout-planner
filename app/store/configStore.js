import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers/index.js';
import logger from 'redux-logger';

export default function configStore(initialState) {
	return createStore(
		rootReducer,
		initialState,
		applyMiddleware(logger)
	);
}
