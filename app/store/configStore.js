import { createStore } from 'redux';
import rootReducer from '../reducers/index.js';

export default function configStore(initialState) {
	return createStore(
		rootReducer,
		initialState
	);
}
