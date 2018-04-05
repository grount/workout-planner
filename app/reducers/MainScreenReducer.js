import Immutable from 'immutable';
import * as types from '../actions/types.js';

const initialState = Immutable.fromJS({
	isProgramExists: false,
});

export default function MainScreenReducer(state = initialState, action) {
	switch (action.type) {
		case types.SET_PROGRAM_EXISTS_CONST:
			return state.set('isProgramExists', action.isProgramExists);
		case types.ADD_PROGRAM_CONST:
			return state.set('program', action.program);
		default:
			return state;
	}
}
