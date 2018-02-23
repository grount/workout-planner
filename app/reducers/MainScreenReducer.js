import Immutable from 'immutable';
import * as types from '../actions/types.js';

const initialState = {
	program: null,
};

export default function MainScreenReducer(state = initialState, action)
{
	switch(action.type) {
	case types.SET_SOME_STORE_CONST: {
		return state;
	}
	default:
		return state;
	}
}
